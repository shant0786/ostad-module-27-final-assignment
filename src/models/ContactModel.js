const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema(
  {
    email: String,
    subject: String,
    message: String,
    content: String,
    published_date: { type: Date, default: Date.now },
  },
  { versionKey: false, timestamps: true }
);

const BlogModel = mongoose.model("contact", usersSchema);
module.exports = BlogModel;
