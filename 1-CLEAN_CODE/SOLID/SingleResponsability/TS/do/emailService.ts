namespace CraftsmanshipPath.Solid.SingleResponsability {
  export interface IEmailService {
    validate: (email: string) => boolean;
    send: (params: any) => void;
  }

  export class EmailService implements IEmailService {
    validate(email: string): boolean {
      return email.includes("@");
    }

    send(content: string): void {
      // code to send the email
    }
  }
}
