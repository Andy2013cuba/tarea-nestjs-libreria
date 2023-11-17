import { Body, Controller, HttpCode, HttpStatus, ParseIntPipe, Post, Res } from '@nestjs/common';
import { ApiConflictResponse, ApiInternalServerErrorResponse, ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePrestamoDto } from './dto/crear-prestamo.dto';
import { LibroService } from 'src/libro/libro.service';
import { ResponseErrorServer } from 'src/libro/dto/resp.error-server.dto';
import { ResponseCreatePrestamoDto } from './dto/resp.create.prestamo.dto';
import { ResponseErrorCreatePrestamoDto } from './dto/resp.errornotfound.dto';
import { ResponseConflictCreatePrestamoDto } from './dto/resp.conflict.prestamo.dto';



@ApiTags('Prestamo')
@Controller('prestamo')
export class PrestamoController {

    constructor(private readonly libroService: LibroService) {}
   
  @Post()
  @ApiInternalServerErrorResponse({
    description:
    'Error server.',
        type: ResponseErrorServer
  })
  @ApiOkResponse({
    description: 'Prestamo creado correctamente',
    type: ResponseCreatePrestamoDto,
  })
  @ApiConflictResponse({
    description: 'El libro ya se encuentra prestado',
    type: ResponseConflictCreatePrestamoDto,
  })
  @ApiNotFoundResponse({
    description: 'No se encontraron lectores o libros con los ids proporcionados',
    type: ResponseErrorCreatePrestamoDto,
  })
  @ApiOperation({ summary: 'Generar prestamo de un libro a un lector ' })  
  async createBook( @Res() res, @Body() createprestamo: CreatePrestamoDto) {
   


    try {
      const prestamo =  await this.libroService.createPrestamo(createprestamo);
      if(prestamo.ok){
        return res.status(HttpStatus.OK).json(prestamo);
      } else{
        switch (prestamo.statusCode) {
            case HttpStatus.CONFLICT:
                return res.status(HttpStatus.CONFLICT).json(prestamo);
            case HttpStatus.NOT_FOUND:
                 return res.status(HttpStatus.NOT_FOUND).json(prestamo);    
        }
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
