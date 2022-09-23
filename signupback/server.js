const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const routesUrls = require("./routes/routes.js");

dotenv.config();

mongoose.connect(process.env.DATABASE_ACCESS, () =>
  console.log("DB connected")
);

app.use(express.json());
app.use(cors());
app.use("/app", routesUrls);
app.listen(4000, () => console.log("Server up and running"));
