import { HttpStatus } from '@nestjs/common';
import { BaseBusinessError } from '@common/errors/base-business-error';

export class ToDoNotFoundError implements BaseBusinessError {
  constructor(
    public messages = ['To do not found.'],
    public statusCode = HttpStatus.BAD_REQUEST,
  ) {}
}
