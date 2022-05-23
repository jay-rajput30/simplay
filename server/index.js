const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { typeDefs } = require("./typeDefs/index");
const { resolvers } = require("./resolvers/index");
const { intializeDBConnection } = require("./db/db.connect");
const { Auth } = require("./middlewares/auth");
const jwt = require("jsonwebtoken");
require("dotenv").config();

let startServer = async () => {
  const app = express();
  const apolloserver = new ApolloServer({
    typeDefs,
    resolvers,
    context: async ({ req }) => {
      const authHeader = req.get("Authorization");
      let user = {
        isAuth: false,
        userId: null,
        email: null,
      };
      let token = authHeader && authHeader.split(" ")[1];

      if (!token || token === "") {
        user.isAuth = false;
        return user;
      }
      let decodedToken;
      try {
        console.log({ token, signature: process.env.SECRET_KEY });
        decodedToken = jwt.verify(token, process.env.SECRET_KEY);
      } catch (e) {
        user.isAuth = false;
        console.error({ error: e });
      }

      if (!decodedToken) {
        user.isAuth = false;
        return user;
      }
      user.isAuth = true;
      user.userId = decodedToken.userId;
      user.email = decodedToken.email;
      user.name = decodedToken.name;
      return user;
    },
  });

  await apolloserver.start();

  apolloserver.applyMiddleware({ app });

  app.use((req, res) => {
    res.send("hello from apollo server");
  });

  intializeDBConnection();
  typeDefs;
  app.listen(4000, () => console.log(`server running on port 4000`));
};

startServer();
