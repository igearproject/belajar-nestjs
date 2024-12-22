import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  // setting open api with swagger
  const config = new DocumentBuilder()
    .setTitle('Latihan Nest JS')
    .setDescription('Latihan membuat api yang baik dengan nestjs')
    .addBearerAuth(
      { type: 'http', scheme: 'bearer', bearerFormat: 'JWT', in: 'header' },
      'accessToken',
    )
    .setVersion('1.0')
    .addTag('latihan')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('openapi', app, document);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
