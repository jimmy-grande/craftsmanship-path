const emailSvc = require("./emailService");

module.exports = {
  get: (params) => {
    // code to get uset
  },
  create: (data) => {
    if (!emailSvc.validateEmail(data.email)) {
      throw new Error("User email is not valid");
    }
    // code to create user
    emailSvc.sendEmail(
      `Hello ${data.firstName} ${data.lastName}. Your account has been created!`
    );
  },
};
