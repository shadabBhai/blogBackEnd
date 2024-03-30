const express = require("express");
const dbConnection = require("./config/dataBase");
const postRoute = require("./routes/post");
const app = express();

require("dotenv").config;

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use("/api/v1", postRoute);

app.listen(PORT, () => {
  console.log(`server acvtived successfully on ${PORT}`);
});

dbConnection();
