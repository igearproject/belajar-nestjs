import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('send-register-mail')
  sendRegisterSuccesMail(
    @Body('to') to: string,
    @Body('subject') subject: string,
    @Body('name') name: string,
    @Body('message') message: string,
  ) {
    return this.appService.registerSuccess(to, subject, name, message);
  }
}
