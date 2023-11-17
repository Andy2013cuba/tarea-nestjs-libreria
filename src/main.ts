import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { LectorModule } from './lector/lector.module';

import { execSync } from 'child_process';
import { PrismaService } from './prisma/prisma.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  if (process.env.RUN_MIGRATIONS_AND_SEEDING === 'true') {
    execSync('npx prisma migrate dev', { stdio: 'inherit' });
    execSync('npx prisma db seed', { stdio: 'inherit' });
  }
  const config = new DocumentBuilder()
    .setTitle('Libreria API')
    .setDescription('La descripción de la API')
    .setVersion('1.0')
    // .addTag('tag') si quieres agregar etiquetas
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
