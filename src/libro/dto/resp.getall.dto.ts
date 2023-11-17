import { ApiProperty } from "@nestjs/swagger";
import { isBoolean, IsNotEmpty, IsNumber, IsString, IsBoolean } from 'class-validator';

export class ResponseAllLibrosDto {
    @ApiProperty({
        example: true,
        description: 'ejecucion satisfactoria',
    })
      
    ok!: boolean;

    @ApiProperty({
        example: 'Libros obtenidos correctamente',
        description: 'mensaje de ejecucion',
    })   
   
    message!: string;

    
    @ApiProperty({
        example: [{
            "id": 5,
            "nombre": "La edad de Oro",
            "ISBN": "12abc",
            "prestado": false
          },
          {
            "id": 7,
            "nombre": "La edad de Oro2",
            "ISBN": "12abcc",
            "prestado": false
          },
          {
            "id": 8,
            "nombre": "La edad de Oro3",
            "ISBN": "12abc3c",
            "prestado": false
          },
          {
            "id": 9,
            "nombre": "La edad de Or5o",
            "ISBN": "12ab5c",
            "prestado": false
          }],
        description: 'Listado de libros',
    }) 
    libros!: [];
}