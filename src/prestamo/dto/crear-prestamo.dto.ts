import { ApiProperty } from "@nestjs/swagger";
import { isBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreatePrestamoDto {
    @ApiProperty({
        description: 'Identificador del Lector',
    })
    @IsNumber()
    @IsNotEmpty({
        message: 'El Identificador del lector es obligatorio.',
    })
    idlector!: number;

    @ApiProperty({
        description: 'Identificador del Libro',
    })
    @IsNumber()
    @IsNotEmpty({
        message: 'El Identificador del libro es obligatorio.',
    })
    idlibro!: number;
}