import { Injectable } from '@nestjs/common';
import { BaseUseCase } from '@common/base-use-case.interface';
import { TaskDataSource } from '../data/task.datasource';
import { UpdateTaskInput } from '../models/update-task.model';
import { Task } from '../models/task.model';
import { TaskNotFoundError } from './errors/task-not-found.error';

@Injectable()
export class UpdateTaskUseCase implements BaseUseCase<UpdateTaskInput, Task> {
  constructor(private taskDataSource: TaskDataSource) {}

  async execute(updateTaskPayload: UpdateTaskInput): Promise<Task> {
    const taskExists = await this.taskDataSource.findById(updateTaskPayload.id);

    if (!taskExists) {
      new TaskNotFoundError();
    }

    await this.taskDataSource.update(updateTaskPayload);

    /* workaround pra campos nullable do Graphql
     * que não são retornados no ".save()" do TypeORM
     */
    return this.taskDataSource.findById(updateTaskPayload.id);
  }
}
