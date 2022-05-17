const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { typeDefs } = require("./typeDefs/index");
const { resolvers } = require("./resolvers/index");
const { intializeDBConnection } = require("./db/db.connect");

let startServer = async () => {
  const app = express();
  const apolloserver = new ApolloServer({
    typeDefs,
    resolvers,
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
