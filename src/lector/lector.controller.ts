
import { Body, Controller, Get, Post } from '@nestjs/common';
import { LectorService } from './lector.service';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateLectorDto } from './dto/crear-lector.dto';

@ApiTags('Lector')
@Controller()
export class LectorController {
  constructor(private readonly lectorservice: LectorService) {}

 
   
  @Post()
  @ApiOperation({ summary: 'Crear un lector' })
  @ApiResponse({ status: 200, description: 'El lector ha sido creado.', type: CreateLectorDto })
  createBook(@Body() userData: CreateLectorDto) {
     return this.lectorservice.createLector(userData.nombre);
  }
}