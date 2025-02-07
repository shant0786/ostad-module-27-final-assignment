const BlogModel = require("../models/BlogModel");
const createBlogService = async (req, res) => {
  try {
    const reqBody = req.body;
    const data = await BlogModel.create(reqBody);
    if (!data) {
      return {
        status: "error",
        message: "Blog creation failed due to some error",
      };
    }
    return {
      status: "success",
      message: "Blog Successfully Saved",
      data: data,
    };
  } catch (error) {
    console.error(error);
    return {
      status: "error",
      error_message: error.message,
    };
  }
};
// Read blog
const readBlogService = async (req, res) => {
  try {
    const data = await BlogModel.find();
    // Token Direct method

    if (!data.length > 0) {
      return {
        status: "error",

        message: "Data fetching failed due to some error",
      };
    }

    return {
      status: "success",
      message: "Blog fetching was successful",
      data: data,
    };
  } catch (error) {
    console.error(error);
    return {
      status: "error",
      error_message: error.message,
    };
  }
};
// Update blog
const updateBlogService = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await BlogModel.updateOne({ _id: id }, { $set: req.body });
    // Token Direct method

    if (!data.modifiedCount > 0) {
      return {
        status: "error",
        message: "Data update failed due to some error",
      };
    }

    return {
      status: "success",
      message: "Blog update was successful",
      data: data,
    };
  } catch (error) {
    console.error(error);
    return {
      status: "error",
      error_message: error.message,
    };
  }
};
const deleteBlogService = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await BlogModel.deleteOne({ _id: id });
    // Token Direct method

    if (!data.acknowledged) {
      return {
        status: "error",
        message: "Data delation failed due to some error",
      };
    }

    return {
      status: "success",
      message: "Blog was delated successful",
      data: data,
    };
  } catch (error) {
    console.error(error);
    return {
      status: "error",
      error_message: error.message,
    };
  }
};

module.exports = {
  createBlogService,
  readBlogService,
  updateBlogService,
  deleteBlogService,
};
