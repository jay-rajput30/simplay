const { AuthenticationError } = require("apollo-server-express");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const Auth = async (req, res, next) => {
  const authHeader = req.get("Authorization");
  const token = authHeader && authHeader.split(" ")[1];
  if (!token || token === "") {
    res.isAuth = false;
    return next();
  }
  let decodedToken;
  try {
    decodedToken = await jwt.verify(token, process.env.SECRET_KEY);
  } catch (e) {
    res.isAuth = false;
    console.error({ error: e });
  }

  if (!decodedToken) {
    res.isAuth = false;
    return next();
  }
  const user = {
    isAuth: true,
    userId: decodedToken.userId,
    email: decodedToken.email,
  };

  //   res.name = decodedToken.name
  return next();
};

module.exports = { Auth };
