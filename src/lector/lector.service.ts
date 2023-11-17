import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class LectorService {
  private prisma = new PrismaClient();

  async createLector(nombre: string) {
    return this.prisma.lector.create({
      data: {
        nombre         
      },
    });
  }
}
