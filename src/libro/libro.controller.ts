import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Body,
  HttpCode,
  HttpStatus,
  ParseIntPipe,
  Res,
} from '@nestjs/common';
import { LibroService } from './libro.service';

import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiNotFoundResponse,
  ApiInternalServerErrorResponse,
} from '@nestjs/swagger';
import { CreateLibroDto } from './dto/createLibrodto';
import { Response } from 'express';
import { RespErrorDeleteLibroDto } from './dto/resp.deletelibro.dto';
import { ResponseErrorServer } from './dto/resp.error-server.dto';
import { RespCreateLibroDto } from './dto/resp.create.libro.dto';
import { ResponseAllLibrosDto } from './dto/resp.getall.dto';

@ApiTags('Libro')
@Controller('Libro')
export class LibroController {
  constructor(private readonly libroService: LibroService) {}

  @Get()
  @ApiInternalServerErrorResponse({
    description: 'Error server.',
    type: ResponseErrorServer,
  })
  @ApiOkResponse({
    description: 'Libros obtenidos correctamente',
    type: ResponseAllLibrosDto,
  })
  @ApiOperation({ summary: 'Listar todos los libros' })
  @ApiResponse({ status: 200, description: 'Retorna una lista de libros.' })
  async findAll(@Res() res: Response) {
    try {
      const libros = await this.libroService.findAll();
      return res.status(HttpStatus.OK).json({
        ok: true,
        message: 'Libros obtenidos correctamente',
        libros: libros,
      });
    } catch (error) {
      // Response
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        ok: false,
        message: 'Error inesperado.',
      });
    }
  }

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo libro' })
  @ApiInternalServerErrorResponse({
    description: 'Error Server.',
    type: ResponseErrorServer,
  })
  @ApiCreatedResponse({
    description: 'El libro ha sido creado.',
    type: RespCreateLibroDto,
  })
  async createBook(@Res() res, @Body() bookData: CreateLibroDto) {
    try {
      const respuesta = await this.libroService.crearLibro(bookData);

      return res.status(HttpStatus.CREATED).json({
        ok: true,
        message: 'El libro ha sido creado correctamente.',
        libro: respuesta,
      });
    } catch (error) {
      // Response
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        ok: false,
        message: 'Error inesperado.',
      });
    }
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Eliminar un libro' })
  @ApiParam({
    name: 'id',
    type: 'number',
    description: 'ID del libro a eliminar',
  })
  @ApiOkResponse({
    description: 'Libro eliminado correctamente.',
    type: CreateLibroDto,
  })
  @ApiNotFoundResponse({
    description: 'Libro no encontrado.',
    type: RespErrorDeleteLibroDto,
  })
  @ApiInternalServerErrorResponse({
    description: 'Error server.',
    type: ResponseErrorServer,
  })
  async deleteBook(@Res() res, @Param('id', ParseIntPipe) id: number) {
    try {
      const respuesta = await this.libroService.deleteLibroByid(id);

      if (respuesta.ok) {
        return res.status(HttpStatus.OK).json(respuesta);
      } else {
        res.status(HttpStatus.NOT_FOUND).json(respuesta);
      }
    } catch (error) {
      // Response
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        ok: false,
        message: 'Error inesperado.',
      });
    }
  }
}
