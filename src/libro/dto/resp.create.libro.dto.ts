import { ApiProperty } from "@nestjs/swagger";
import { isBoolean, IsNotEmpty, IsNumber, IsString, IsBoolean } from 'class-validator';

export class RespCreateLibroDto extends Response{
    @ApiProperty({
        example: true,
        description: 'error',
    })
      
    ok!: boolean;

    @ApiProperty({
        example: 'Libro creado correctamente.',
        description: 'mensaje de respuesta',
    })   
   
    message!: string;

    @ApiProperty({
        example: 201,
        description: 'Estado de la respuesta',
    }) 
    statuscode!: number;
}