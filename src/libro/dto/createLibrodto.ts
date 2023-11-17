import { ApiProperty } from "@nestjs/swagger";
import { isBoolean, IsNotEmpty, IsNumber, IsString, IsBoolean } from 'class-validator';

export class CreateLibroDto {
    @ApiProperty({
        example: 'La edad de Oro',
        description: 'Nombre del Libro',
    })
    @IsString()
    @IsNotEmpty({
        message: 'El nombre del Libro es obligatorio.',
    })
    nombre!: string;

    @ApiProperty({
        example: '12abc',
        description: 'ISBN del Libro',
    })
    @IsString()
    @IsNotEmpty({
        message: 'El ISBN del libro es obligatorio.',
    })
    ISBN!: string;

    @ApiProperty({
        example: false,
        description: 'Estado del Libro , prestado o no',
    })
    @IsBoolean()
    @IsNotEmpty({
        message: 'Estado del Libro , prestado o no es obligatorio',
    })   
    prestado!: boolean;
}