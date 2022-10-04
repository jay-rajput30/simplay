const User = require("./models/user.model");
const bcrypt = require("bcrypt");
const express = require("express");
const bodyParser = require("body-parser");
const { ApolloServer } = require("apollo-server-express");
const { typeDefs } = require("./typeDefs/index");
const { resolvers } = require("./resolvers/index");
const { intializeDBConnection } = require("./db/db.connect");
const { Auth } = require("./middlewares/auth");
const jwt = require("jsonwebtoken");
const cors = require("cors");
require("dotenv").config();
const app = express();
// ["http://localhost:3000", "https://studio.apollographql.com"]
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};
// corsOptions
app.use(cors(corsOptions));
intializeDBConnection();

app.use(bodyParser.json());

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExists = await User.findOne({ email: email.toString() });

    const isValidPassword = await bcrypt.compare(password, userExists.password);
    if (!userExists) {
      throw new Error("user does not exists");
    }
    if (!isValidPassword) {
      throw new AuthenticationError("invalid password");
    }
    const token = await jwt.sign(
      {
        userId: userExists._id,
        email: userExists.email,
        name: userExists.name,
      },
      process.env.SECRET_KEY,
      {
        expiresIn: "2h",
      }
    );
    res.json({ token: token });
  } catch (e) {
    console.error({ error: e });
    res.json({ success: false, error: e });
  }
});
let startServer = async () => {
  const apolloserver = new ApolloServer({
    typeDefs,
    resolvers,
    context: async ({ req }) => {
      const authHeader = req.headers.authorization;
      let user = {
        isAuth: false,
        userId: null,
        email: null,
      };
      console.log("auth token" + req.headers.authorization);
      let token = authHeader;

      if (!token || token === "") {
        user.isAuth = false;
      }
      let decodedToken;
      try {
        decodedToken = jwt.verify(token, process.env.SECRET_KEY);
        console.log({ decodedToken });
      } catch (e) {
        user.isAuth = false;
      }

      if (!decodedToken) {
        user.isAuth = false;
      }
      user.isAuth = true;
      user.userId = decodedToken.userId;
      user.email = decodedToken.email;
      user.name = decodedToken.name;
      console.log({ user });
      return { user };
    },
  });

  await apolloserver.start();

  // apolloserver.applyMiddleware({ app });

  // app.use((req, res) => {
  //   res.send("hello from apollo server");
  // });

  apolloserver.applyMiddleware({
    app,
    path: "/graphql",
    // cors: false,
  });

  // cors: false, disables the apollo-server-express cors to allow the cors middleware use
  app.listen(4000, () =>
    console.log(`server running on http://localhost:4000/graphql`)
  );
};

startServer();
