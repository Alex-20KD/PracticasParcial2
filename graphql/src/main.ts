import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Elimina propiedades no permitidas
    forbidNonWhitelisted: true, // Lanza un error si se envían propiedades no permitidas
    transform: true, // Transforma los objetos entrantes a sus tipos correspondientes
  })); // Configuración de validación global
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
