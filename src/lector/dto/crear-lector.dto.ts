import { ApiProperty } from "@nestjs/swagger";
import { isBoolean, IsNotEmpty, IsNumber, IsString, IsBoolean } from 'class-validator';

export class CreateLectorDto {
    @ApiProperty({
        example: 'Mario',
        description: 'Nombre del Lector',
    })
    @IsString()
    @IsNotEmpty({
        message: 'El nombre del Lector es obligatorio.',
    })
    nombre!: string;
   
}