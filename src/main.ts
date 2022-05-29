import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [
      'http://localhost:3000',
    ],
    methods: ["GET", "POST", "DELETE", "PATCH", "PUT"],
    credentials: true,
  });
  app.useGlobalPipes(new ValidationPipe({whitelist: true, transform: true}))
  await app.listen(4001);
}
bootstrap();
