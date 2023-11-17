import { HttpException, HttpStatus } from '@nestjs/common';

export class BookAlreadyLentException extends HttpException {
  constructor() {
    super('El libro ya está prestado', HttpStatus.BAD_REQUEST);
  }
}