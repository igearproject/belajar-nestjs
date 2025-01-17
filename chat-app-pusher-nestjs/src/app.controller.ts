import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { PusherService } from './pusher/pusher.service';

@Controller('api')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private pusherService: PusherService,
  ) {}

  @Post('message')
  async message(
    @Body('username') username: string,
    @Body('message') message: string,
  ) {
    await this.pusherService.trigger('chat', message, {
      username,
      message,
    });

    return [];
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
