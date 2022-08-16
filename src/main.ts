import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true, // filtra datos que no corresponden
      forbidNonWhitelisted: true, // retorna un error si se envía información incorrecta
      transformOptions: {
        enableImplicitConversion: true
      }
    }),
  );
  await app.listen(AppModule.port);
}
bootstrap();
