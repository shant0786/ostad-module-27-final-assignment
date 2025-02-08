const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    role: { type: String, required: true },
    image: { type: String, required: true },
    expertise: { type: String, required: true },
  },
  { versionKey: false, timestamps: true }
);

const TeamModel = mongoose.model("team", usersSchema);
module.exports = TeamModel;
