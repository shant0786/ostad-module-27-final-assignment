const express = require("express");
const router = require("./src/routes/api");
const app = new express();

const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");

const xss = require("xss-clean");
const hpp = require("hpp");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const path = require("path");
const URL =
  "mongodb+srv://<username>:<password>@cluster0.vidqntm.mongodb.net/portfolio_assignment";
let option = { user: "rmshanto786", pass: "shanto786", autoIndex: true };

mongoose
  .connect(URL, option)
  .then((res) => {
    console.log("Database Connected Successfully");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(cookieParser());
app.use(cors());

app.use(helmet());

app.use(mongoSanitize());
app.use(xss());
app.use(hpp());

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));

const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 3000 });
app.use(limiter);

app.set("etag", false);
app.use("/api/v1", router);

// Scaffolding with client-side
app.use(express.static("client/dist"));

// Add React Front End Routing
app.get("*", function (req, res) {
  res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
});

module.exports = app;
