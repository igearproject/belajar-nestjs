import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private mail: MailerService) {}
  getHello(): string {
    return 'Hello World!';
  }

  async registerSuccess(
    to: string,
    subject: string,
    name: string,
    message: string,
  ) {
    // console.log(process.cwd());
    // console.log(__dirname);
    return await this.mail.sendMail({
      to: to,
      from: 'test@sipintek.com',
      subject,
      text: 'Hellow thank for register',
      template: './register-success',
      context: { name, message },
    });
  }
}
