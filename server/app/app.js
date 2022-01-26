require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const apiRouter = require("../routes/apiRoutes");
const { corsConfig } = require("../config");
const path = require("path");

const publicPath = path.join(__dirname, "../../client/build")

app.use(cors(corsConfig));
app.use(express.static(publicPath))

app.use(express.json());

app.use("/api", apiRouter);


app.use("*", (req ,res) => {
  res.status(500).send("route isnt found")
})

module.exports = app;
