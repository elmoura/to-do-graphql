import { Injectable } from '@nestjs/common';
import { BaseUseCase } from '@common/base-use-case.interface';
import { TaskDataSource } from '../data/task.datasource';
import { CreateTaskInput } from '../models/create-task.model';
import { Task } from '../models/task.model';

@Injectable()
export class CreateTaskUseCase implements BaseUseCase<CreateTaskInput, Task> {
  constructor(private taskDataSource: TaskDataSource) {}

  async execute(createTaskPayload: CreateTaskInput): Promise<Task> {
    return this.taskDataSource.create(createTaskPayload);
  }
}
