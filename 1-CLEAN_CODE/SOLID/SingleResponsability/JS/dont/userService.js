const validateEmail = email => email.includes('@')
const sendEmail = content => {
  // code to send the email
}

module.exports = {
  get: params => {
    // code to get user
  },
  create: data => {
    if(!validateEmail(data.email)){
      throw new Error("User email is not valid")
    }
    // code to create user
    sendEmail(`Hello ${data.firstName} ${data.lastName}. Your account has been created!`)
  }
}