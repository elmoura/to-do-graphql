import { BaseUseCase } from '@common/base-use-case.interface';
import { Injectable } from '@nestjs/common';
import { TaskDataSource } from '../data/task.datasource';
import { Task } from '../models/task.model';

@Injectable()
export class ListTasksUseCase implements BaseUseCase<any, Task[]> {
  constructor(private taskDataSource: TaskDataSource) {}

  async execute(): Promise<Task[]> {
    return this.taskDataSource.listUndoneTasks();
  }
}
