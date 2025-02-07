const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema(
  {
    name: String,
    role: String,
    image: String,
    profile: String,
  },
  { versionKey: false, timestamps: true }
);

const TeamModel = mongoose.model("team", usersSchema);
module.exports = TeamModel;
