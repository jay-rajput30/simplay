const mongoose = require("mongoose");
require("dotenv/config");

let intializeDBConnection = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_CONNECT, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connected to the database: "+conn.connection.host);
  } catch (e) {
    console.error({error});
  }
};

module.exports = { intializeDBConnection };
