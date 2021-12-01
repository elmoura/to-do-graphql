import { BaseUseCase } from '@common/base-use-case.interface';
import { Injectable } from '@nestjs/common';
import { ToDoDataSource } from '../data/to-do.datasource';
import { DeleteToDoOutput } from '../models/delete-to-do.model';
import { ToDoNotFoundError } from './errors/to-do-not-found.error';

@Injectable()
export class DeleteToDoUseCase
  implements BaseUseCase<number, DeleteToDoOutput>
{
  constructor(private toDoDataSource: ToDoDataSource) {}

  async execute(id: number): Promise<DeleteToDoOutput> {
    const toDoExists = await this.toDoDataSource.findById(id);

    if (!toDoExists) {
      throw new ToDoNotFoundError();
    }

    const hasDeletedSuccessfully = await this.toDoDataSource.delete(id);
    return { success: hasDeletedSuccessfully };
  }
}
