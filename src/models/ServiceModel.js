const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema(
  {
    title: String,
    des: String,
    image: String,
  },
  { versionKey: false, timestamps: true }
);

const ServiceModel = mongoose.model("services", usersSchema);
module.exports = ServiceModel;
