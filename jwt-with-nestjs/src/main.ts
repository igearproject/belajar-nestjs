import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser('sjhasaghgf@!##@3467132SAODAN!@#$$%123'));
  app.enableCors({
    origin: 'http://localhost:5000',
    credentials: true,
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
