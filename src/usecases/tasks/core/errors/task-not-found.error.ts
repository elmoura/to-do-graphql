import { BadRequestException } from '@nestjs/common';

export class TaskNotFoundError extends BadRequestException {
  constructor(message = 'Task not found.') {
    super(message);
  }
}
