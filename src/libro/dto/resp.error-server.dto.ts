import { ApiProperty } from "@nestjs/swagger";
import { isBoolean, IsNotEmpty, IsNumber, IsString, IsBoolean } from 'class-validator';

export class ResponseErrorServer {
    @ApiProperty({
        example: false,
        description: 'error',
    })
      
    ok!: boolean;

    @ApiProperty({
        example: 'Error Server.',
        description: 'mensaje de error',
    })   
   
    message!: string;

    @ApiProperty({
        example: 500,
        description: 'Estado del estado de la respuesta',
    }) 
    statuscode!: number;
}