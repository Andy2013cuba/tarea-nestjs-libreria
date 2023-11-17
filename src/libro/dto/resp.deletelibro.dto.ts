import { ApiProperty } from "@nestjs/swagger";
import { isBoolean, IsNotEmpty, IsNumber, IsString, IsBoolean } from 'class-validator';

export class RespErrorDeleteLibroDto {
    @ApiProperty({
        example: false,
        description: 'error',
    })
      
    ok!: boolean;

    @ApiProperty({
        example: 'Libro con ID # no encontrado.',
        description: 'mensaje de error',
    })   
   
    message!: string;

    @ApiProperty({
        example: 404,
        description: 'Estado de la respuesta',
    }) 
    statuscode!: number;
}