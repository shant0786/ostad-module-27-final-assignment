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
const {
  WEB_CACHE,
  MONGODB_CONNECTION,
  REQUEST_LIMIT_TIME,
  REQUEST_LIMIT_NUMBER,
  MAX_JSON_SIZE,
  URL_ENCODED,
} = require("./config");

mongoose
  .connect(MONGODB_CONNECTION, { autoIndex: true })
  .then((res) => {
    console.log("Database Connected Successfully");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(cookieParser());
app.use(cors());
app.use(
  helmet.contentSecurityPolicy({
    useDefaults: true,
    directives: {
      "img-src": ["'self'", "https: data:"],
    },
  })
);
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());

app.use(express.json({ limit: MAX_JSON_SIZE }));
app.use(express.urlencoded({ extended: URL_ENCODED }));

app.use(
  rateLimit({
    windowMs: REQUEST_LIMIT_TIME,
    max: REQUEST_LIMIT_NUMBER,
  })
);

// Disabling ETags helps avoid caching problems,dynamic content or multiple servers

app.set("etag", WEB_CACHE);
app.use("/api/v1", router);

app.use(express.static("client/dist"));

// Add React Front End Routing
app.get("*", function (req, res) {
  res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
});

module.exports = app;
