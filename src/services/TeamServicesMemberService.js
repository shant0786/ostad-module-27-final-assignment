const TeamModel = require("../models/TeamModel");
const ContactModel = require("../models/ContactModel");
const ServiceModel = require("../models/ServiceModel");

const addTeamMemberService = async (req, res) => {
  try {
    const reqBody = req.body;
    const data = await TeamModel.create(reqBody);
    if (!data) {
      return {
        status: "error",
        message: "adding Member failed due to some error",
      };
    }
    return {
      status: "success",
      message: "added Successfully",
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
const readTeamMemberService = async (req, res) => {
  try {
    const data = await TeamModel.find();
    // Token Direct method

    if (!data.length > 0) {
      return {
        status: "error",
        message: "Data fetching failed due to some error",
      };
    }

    return {
      status: "success",
      message: "Member fetching was successful",
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
const updateTeamMemberService = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await TeamModel.updateOne({ _id: id }, { $set: req.body });
    // Token Direct method

    if (!data.modifiedCount > 0) {
      return {
        status: "error",
        message: "Data update failed due to some error",
      };
    }

    return {
      status: "success",
      message: "Data update was successful",
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
const deleteTeamMemberService = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await TeamModel.deleteOne({ _id: id });
    // Token Direct method

    if (!data.acknowledged) {
      return {
        status: "error",
        message: "Data delation failed due to some error",
      };
    }

    return {
      status: "success",
      message: "Data was delated successful",
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
const addServicesService = async (req, res) => {
  try {
    const reqBody = req.body;
    const data = await ServiceModel.create(reqBody);
    if (!data) {
      return {
        status: "error",
        message: "adding failed due to some error",
      };
    }
    return {
      status: "success",
      message: "added Successfully",
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
const readServicesService = async (req, res) => {
  try {
    const data = await ServiceModel.find();
    // Token Direct method

    if (!data.length > 0) {
      return {
        status: "error",
        message: "Data fetching failed due to some error",
      };
    }

    return {
      status: "success",
      message: "Data fetching was successful",
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
const updateServicesService = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await ServiceModel.updateOne({ _id: id }, { $set: req.body });
    // Token Direct method

    if (data.modifiedCount === 0) {
      return {
        status: "error",
        message: "Data update failed due to some error",
      };
    }

    return {
      status: "success",
      message: "Data update was successful",
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
const deleteServicesService = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await ServiceModel.deleteOne({ _id: id });
    // Token Direct method

    if (data["deletedCount"] === 0) {
      return {
        status: "error",
        message: "Data delation failed due to some error",
        data: data,
      };
    }

    return {
      status: "success",
      message: "Data was delated successful",
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
const contactSendService = async (req, res) => {
  try {
    const reqBody = req.body;
    const data = await ContactModel.create(reqBody);
    if (!data) {
      return {
        status: "error",
        message: "adding failed due to some error",
      };
    }
    return {
      status: "success",
      message: "Message Send Successfully",
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
  addTeamMemberService,
  readTeamMemberService,
  updateTeamMemberService,
  deleteTeamMemberService,
  addServicesService,
  readServicesService,
  updateServicesService,
  deleteServicesService,
  contactSendService,
};
