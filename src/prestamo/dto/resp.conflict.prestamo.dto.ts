import { ApiProperty } from "@nestjs/swagger";
import { isBoolean, IsNotEmpty, IsNumber, IsString, IsBoolean } from 'class-validator';

export class ResponseConflictCreatePrestamoDto {
    @ApiProperty({
        example: false,
        description: 'ejecucion no satisfactoria',
    })
      
    ok!: boolean;

    @ApiProperty({
        example: 'El Libro ya se encuentra prestado',
        description: 'mensaje de ejecucion',
    })   
   
    message!: string;

    @ApiProperty({
        example: 409 ,
        description: 'Estado del estado de la respuesta',
    }) 
    statuscode!: number;
}