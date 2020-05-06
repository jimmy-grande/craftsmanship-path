/// <reference path="emailService.ts" />
namespace CraftsmanshipPath.Solid.SingleResponsability {  
  export class UserService {
    private _emailSvc: IEmailService
    constructor(emailSvc: IEmailService) {      
      this._emailSvc = emailSvc
    }

    create(userData){
      if(!this._emailSvc.validate(userData.email)){
        throw new Error("User email is not valid")
      }
      // code to create user
      this._emailSvc.send(`Hello ${userData.firstName} ${userData.lastName}. Your account has been created!`)
    }
  }  
}