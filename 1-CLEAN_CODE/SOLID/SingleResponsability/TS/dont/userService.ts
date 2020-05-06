export class UserService {
  constructor() {
    
  }
  private validateEmail(email: string): boolean {
    return email.includes('@')
  }

  private sendEmail(content: string): void {
    // code to send your email
  }
  create(userData) {
    if (!this.validateEmail(userData.email)) {
      throw new Error("User email is not valid");
    }
    // code to create user
    this.sendEmail(
      `Hello ${userData.firstName} ${userData.lastName}. Your account has been created!`
    );
  }
}
