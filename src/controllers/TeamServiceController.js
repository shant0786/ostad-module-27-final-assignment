const {
  addTeamMemberService,
  readTeamMemberService,
  updateTeamMemberService,
  deleteTeamMemberService,
  addServicesService,
  readServicesService,
  updateServicesService,
  deleteServicesService,
  contactSendService,
} = require("../services/TeamServicesMemberService");

exports.addTeamMember = async (req, res) => {
  const result = await addTeamMemberService(req);
  return res.status(200).json(result);
};
exports.readTeamMember = async (req, res) => {
  const result = await readTeamMemberService(req);
  return res.status(200).json(result);
};
exports.updateTeamMember = async (req, res) => {
  const result = await updateTeamMemberService(req);
  return res.status(200).json(result);
};
exports.deleteTeamMember = async (req, res) => {
  const result = await deleteTeamMemberService(req);
  return res.status(200).json(result);
};

// service
exports.addServices = async (req, res) => {
  const result = await addServicesService(req);
  return res.status(200).json(result);
};
exports.readServices = async (req, res) => {
  const result = await readServicesService(req);
  return res.status(200).json(result);
};
exports.updateServices = async (req, res) => {
  const result = await updateServicesService(req);
  return res.status(200).json(result);
};
exports.deleteServices = async (req, res) => {
  const result = await deleteServicesService(req);
  return res.status(200).json(result);
};
exports.contactSend = async (req, res) => {
  const result = await contactSendService(req);
  return res.status(200).json(result);
};
