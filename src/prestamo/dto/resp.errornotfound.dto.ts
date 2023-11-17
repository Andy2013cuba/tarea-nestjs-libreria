import { ApiProperty } from "@nestjs/swagger";
import { isBoolean, IsNotEmpty, IsNumber, IsString, IsBoolean } from 'class-validator';

export class ResponseErrorCreatePrestamoDto {
    @ApiProperty({
        example: false,
        description: 'ejecucion no satisfactoria',
    })
      
    ok!: boolean;

    @ApiProperty({
        example: 'No se encontraron lectores o libros con los ids proporcionados',
        description: 'mensaje de ejecucion',
    })   
   
    message!: string;

    @ApiProperty({
        example: 404 ,
        description: 'Estado del estado de la respuesta',
    }) 
    statuscode!: number;
}