import { Module } from '@nestjs/common';
import { LibroService } from './libro.service';
import { LibroController } from './libro.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({   
  controllers: [LibroController],
  providers: [LibroService,PrismaService],
  exports: [PrismaService]
})
export class LibroModule {}
