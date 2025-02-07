const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema(
  {
    title: String,
    image: String,
    author: String,
    content: String,
    published_date: { type: Date, default: Date.now },
  },
  { versionKey: false, timestamps: true }
);

const BlogModel = mongoose.model("blogs", usersSchema);
module.exports = BlogModel;
