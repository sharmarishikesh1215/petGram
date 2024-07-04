require("dotenv").config();
const petsRouter = require("./routes/pets");

const express = require("express");
const app = express();

app.use("/api/pets", petsRouter);

app.listen(process.env.PORT, () => {
  console.log("Server is running on port 3000");
});
