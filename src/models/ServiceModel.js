const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    des: { type: String, required: true },
    image: { type: String, required: true },
  },
  { versionKey: false, timestamps: true }
);

const ServiceModel = mongoose.model("services", usersSchema);
module.exports = ServiceModel;
