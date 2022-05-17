const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const { AuthenticationError } = require("apollo-server-express");

const UserResolvers = {
  Query: {
    getAllUsers: async (parent, args, context, info) => {
      try {
        return await User.find();
      } catch (e) {
        console.error({ error: e });
      }
    },
  },
  Mutation: {
    signUp: async (parent, args, context, info) => {
      try {
        console.log({ args });
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
        console.log({ result });
        return { ...result._doc, id: result._id };
      } catch (e) {
        console.error({ error: e });
      }
    },
    getUser: async (parent, args, context, info) => {
      try {
        const { id } = args;
        let userFound = await User.findById(id);
        return userFound;
      } catch (e) {
        console.error({ error: e });
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

      return { id: userFound.id, email: userFound.email, name: userFound.name };
    },
  },
};

module.exports = { UserResolvers };
