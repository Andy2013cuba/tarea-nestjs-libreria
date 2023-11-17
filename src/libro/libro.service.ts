import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateLibroDto } from './dto/createLibrodto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePrestamoDto } from 'src/prestamo/dto/crear-prestamo.dto';
import { BookAlreadyLentException } from './dto/error-response.prestamo';

@Injectable()
export class LibroService {
  constructor(private prisma: PrismaService) {}

  // Método para crear los libros
  async crearLibro(createLibroDto: CreateLibroDto) {
    return this.prisma.libro.create({
      data: createLibroDto,
    });
  }

  // Método para listar todos los libros
  async findAll() {
    return this.prisma.libro.findMany();
  }

  // Método para eliminar un libros byId
  async deleteLibroByid(id: number) {
    const libro = await this.prisma.libro.findUnique({ where: { id } });

    if (libro) {
      await this.prisma.libro.delete({ where: { id } });
    } else {
      return {
        ok: false,
        message: `Libro con ID ${id} no encontrado.`,
        statusCode: HttpStatus.NOT_FOUND,
      };
    }

    return {
      ok: true,
      message: 'Libro con ID eliminado correctamente.',
      statusCode: HttpStatus.OK,
      libro: libro,
    };
  }

  async createPrestamo(createPrestamoDto: CreatePrestamoDto) {
    const { idlibro, idlector } = createPrestamoDto;

    // Verificar si el libro existe y está disponible
    const libro = await this.prisma.libro.findUnique({
      where: { id: idlibro },
    });
    if (!libro) {
      return {
        ok: false,
        message: `Libro con ID ${idlibro} no encontrado.`,
        statusCode: HttpStatus.NOT_FOUND,
      };
      throw new NotFoundException();
    }
    if (libro.prestado) {
      return {
        ok: false,
        message: `El libro con id ${idlibro}  ya está prestado`,
        statusCode: HttpStatus.CONFLICT,
      };
    }

    console.log(libro);

    // Verificar si el lector existe
    const lector = await this.prisma.lector.findUnique({
      where: { id: idlector },
    });
    if (!lector) {
      return {
        ok: false,
        message: `Lector con ID ${idlector} no encontrado.`,
        statusCode: HttpStatus.NOT_FOUND,
      };
    }

    // Crear el préstamo
    // Crear el préstamo
    const prestamo = await this.prisma.prestamo.create({
      data: {
        libroId: idlibro,
        lectorId: idlector,
      },
    });
    // Marcar el libro como prestado
    await this.prisma.libro.update({
      where: { id: idlibro },
      data: { prestado: true },
    });

    return {
      ok: true,
      message: 'Prestamo creado correctamente.',
      statusCode: HttpStatus.OK,
      prestamo: prestamo,
    };
  }
}
