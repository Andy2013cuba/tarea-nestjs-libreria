import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePrestamoDto } from './dto/crear-prestamo.dto';

@Injectable()
export class PrestamosService {
  constructor(private prisma: PrismaService) {}

  
}
