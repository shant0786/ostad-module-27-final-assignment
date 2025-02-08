const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    otp: { type: String, default: 0 },
    verified: { type: Boolean, default: false },
    city: { type: String },
  },
  { versionKey: false, timestamps: true }
);

const UserModel = mongoose.model("users", usersSchema);
module.exports = UserModel;
