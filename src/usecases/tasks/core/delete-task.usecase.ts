import { BaseUseCase } from '@common/base-use-case.interface';
import { Injectable } from '@nestjs/common';
import { TaskDataSource } from '../data/task.datasource';
import { DeleteTaskOutput } from '../models/delete-task.model';
import { TaskNotFoundError } from './errors/task-not-found.error';

@Injectable()
export class DeleteTaskUseCase
  implements BaseUseCase<number, DeleteTaskOutput>
{
  constructor(private taskDataSource: TaskDataSource) {}

  async execute(id: number): Promise<DeleteTaskOutput> {
    const taskExists = await this.taskDataSource.findById(id);

    if (!taskExists) {
      throw new TaskNotFoundError();
    }

    const hasDeletedSuccessfully = await this.taskDataSource.delete(id);
    return { success: hasDeletedSuccessfully };
  }
}
