const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { typeDefs } = require("./typeDefs/index");
const { resolvers } = require("./resolvers/index");
const { intializeDBConnection } = require("./db/db.connect");
const { Auth } = require("./middlewares/auth");
const jwt = require("jsonwebtoken");
const cors = require("cors");
require("dotenv").config();
const app = express();
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};
app.use(cors(corsOptions));
let startServer = async () => {
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

  apolloserver.applyMiddleware({
    app,
    path: "/",
    cors: false, // disables the apollo-server-express cors to allow the cors middleware use
  });
  app.listen(4000, () => console.log(`server running on port 4000`));
};

startServer();
