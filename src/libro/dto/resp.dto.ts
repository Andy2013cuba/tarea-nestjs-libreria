import { ApiProperty } from "@nestjs/swagger";
import { isBoolean, IsNotEmpty, IsNumber, IsString, IsBoolean } from 'class-validator';

export class Response {
    @ApiProperty({
        example: true,
        description: 'ejecucion satisfactoria',
    })
      
    ok!: boolean;

    @ApiProperty({
        example: 'Success',
        description: 'mensaje de ejecucion',
    })   
   
    message!: string;

    @ApiProperty({
        example: 201,
        description: 'Estado del estado de la respuesta',
    }) 
    statuscode!: number;
}