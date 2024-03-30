const mongoose = require("mongoose");

require("dotenv").config();

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("database connect succesfull");
  } catch (err) {
    console.error("Error msg : ", err.message);
    process.exit(1);
  }
};

module.exports = dbConnection;
