const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    image: {
      type: String,
      required: true,
      default: "https://placehold.co/600x400",
    },
    content: { type: String, required: true },
    published_date: { type: Date, default: Date.now },
  },
  { versionKey: false, timestamps: true }
);

const BlogModel = mongoose.model("blogs", usersSchema);
module.exports = BlogModel;
