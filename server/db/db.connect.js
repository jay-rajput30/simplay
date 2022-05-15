const mongoose = require("mongoose");
require("dotenv/config");

let intializeDBConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECT, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connected to the database");
  } catch (e) {
    console.error(`something went wrong, error: ${error}`);
  }
};

module.exports = { intializeDBConnection };
