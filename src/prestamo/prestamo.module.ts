import { Module } from '@nestjs/common';
import { PrestamosService } from './prestamo.service';
import { PrestamoController } from './prestamo.controller';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { LibroService } from 'src/libro/libro.service';

@Module({
  controllers: [PrestamoController],
  providers: [PrestamosService,PrismaService, LibroService],
  exports:[PrismaService,LibroService]
})
export class PrestamoModule {}
