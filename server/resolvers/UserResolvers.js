const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { AuthenticationError } = require("apollo-server-express");
const Account = require("../models/account.model");
require("dotenv").config();

const UserResolvers = {
  Query: {
    getAllUsers: async (parent, args, context, info) => {
      try {
        const { isAuth, userId, email, name } = context;
        console.log({ isAuth, userId, email, name });
        if (isAuth) {
          return await User.find();
        } else {
          throw new AuthenticationError("unauthorized access");
        }
      } catch (e) {
        console.error({ error: e });
      }
    },
  },
  Mutation: {
    signUp: async (parent, args, context, info) => {
      try {
        const { name, email, password } = args.user;
        const hashedPassword = await bcrypt.hash(password, 12);

        const userAlreadyExists = await User.findOne({ email });
        if (userAlreadyExists) {
          throw new Error("user already exists");
        }
        const newUser = new User({
          name,
          email,
          password: hashedPassword,
        });

        let result = await newUser.save();

        let newAccount = new Account({
          uid: result._id,
          likedVidoes: [],
          history: [],
        });
        await newAccount.save();
        const token = await jwt.sign(
          {
            userId: result._id,
            email: result._doc.email,
            name: result._doc.name,
          },
          process.env.SECRET_KEY,
          {
            expiresIn: "2h",
          }
        );
        return { token, expiry: 2 };
      } catch (e) {
        console.error({ error: e });
      }
    },
    getUser: async (parent, args, context, info) => {
      const { isAuth, userId, email, name } = context;
      if (isAuth) {
        try {
          const { isAuth } = req;
          const { userId } = req;
          console.log({ isAuth, userId });
          const { id } = args;
          let userFound = await User.findById(id);
          return userFound;
        } catch (e) {
          console.error({ error: e });
        }
      } else {
        throw new AuthenticationError("unauthorized access");
      }
    },
    login: async (parent, args, context, info) => {
      const { email, password } = args;

      const userFound = await User.findOne({ email });
      const isValidPassword = bcrypt.compare(password, userFound.password);
      if (!userFound) {
        throw new Error("user does not exists");
      }
      if (!isValidPassword) {
        throw new AuthenticationError("invalid password");
      }
      const token = await jwt.sign(
        {
          userId: userFound._id,
          email: userFound.email,
          name: userFound.name,
        },
        process.env.SECRET_KEY,
        {
          expiresIn: "2h",
        }
      );
      return { token, expiry: 2 };
      // return { id: userFound.id, email: userF/ound.email, name: userFound.name };
    },
  },
};

module.exports = { UserResolvers };
