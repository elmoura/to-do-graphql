import { BadRequestException } from '@nestjs/common';

export class ToDoNotFoundError extends BadRequestException {
  constructor(message = 'To do not found.') {
    super(message);
  }
}
