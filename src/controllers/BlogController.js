const {
  createBlogService,
  readBlogService,
  updateBlogService,
  deleteBlogService,
} = require("../services/BlogService");

// Create blog
exports.createBlog = async (req, res) => {
  const result = await createBlogService(req);
  return res.status(200).json(result);
};
// Read blog
exports.readBlog = async (req, res) => {
  const result = await readBlogService(req);
  return res.status(200).json(result);
};
// Update blog
exports.updateBlog = async (req, res) => {
  const result = await updateBlogService(req);
  return res.status(200).json(result);
};
exports.deleteBlog = async (req, res) => {
  const result = await deleteBlogService(req);
  return res.status(200).json(result);
};
