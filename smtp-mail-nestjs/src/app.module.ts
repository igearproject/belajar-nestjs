import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import * as path from 'path';

@Module({
  imports: [
    MailerModule.forRoot({
      // transport: 'smtp://mail:25',
      transport: {
        host: 'mail.sipintek.com',
        port: 465,
        secure: true,
        auth: {
          user: 'test@sipintek.com',
          pass: '=RqZLp.89N)h',
        },
      },
      defaults: {
        from: 'test@sipintek.com',
      },
      template: {
        dir: path.join(__dirname, '..', 'mail'),
        adapter: new HandlebarsAdapter(),
        options: {
          strict: false,
        },
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
