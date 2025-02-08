const {
  RegistrationService,
  LoginService,
  UserService,
  UsersService,
  UpdateUserService,
  DeleteUserService,
  SendOTPService,
  VerifyAccountService,
} = require("../services/UserServices");
exports.Registration = async (req, res) => {
  const result = await RegistrationService(req);
  return res.status(200).json(result);
};
exports.Login = async (req, res) => {
  const result = await LoginService(req);
  if (result) {
    // Cookie settings
    const cookieOption = {
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
      httpOnly: false,
    };
    // Set Cookie to the Browser
    res.cookie("token", result["token"], cookieOption);
  }
  return res.status(200).json(result);
};
exports.Logout = async (req, res) => {
  // Set Cookie to the Browser
  const cookieOption = {
    expires: new Date(Date.now() - 1000 * 60 * 60 * 24),
    httpOnly: false,
  };
  // Set Cookie to the Browser
  res.cookie("token", "", cookieOption);
  return res.status(200).json({
    status: "success",
    message: "User has successfully logged out",
  });
};

exports.User = async (req, res) => {
  const result = await UserService(req);
  return res.status(200).json(result);
};
exports.SendOTP = async (req, res) => {
  const result = await SendOTPService(req);
  return res.status(200).json(result);
};
exports.VerifyAccount = async (req, res) => {
  const result = await VerifyAccountService(req);
  if (result) {
    // Cookie settings
    const cookieOption = {
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30),
      httpOnly: true,
      secure: true,
      sameSite: "none",
    };
    // Set Cookie to the Browser
    res.cookie("token", result["token"], cookieOption);
  }
  return res.status(200).json(result);
};
exports.Users = async (req, res) => {
  const result = await UsersService(req);
  return res.status(200).json(result);
};

exports.UpdateUser = async (req, res) => {
  const result = await UpdateUserService(req);
  return res.status(200).json(result);
};
exports.DeleteUser = async (req, res) => {
  const result = await DeleteUserService(req);
  return res.status(200).json(result);
};
