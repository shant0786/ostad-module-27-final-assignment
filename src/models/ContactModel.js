const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },

    published_date: { type: Date, default: Date.now },
  },
  { versionKey: false, timestamps: true }
);

const BlogModel = mongoose.model("contact", usersSchema);
module.exports = BlogModel;
