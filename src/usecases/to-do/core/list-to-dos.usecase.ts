import { BaseUseCase } from '@common/base-use-case.interface';
import { Injectable } from '@nestjs/common';
import { ToDoDataSource } from '../data/to-do.datasource';
import { ToDo } from '../models/to-do.model';

@Injectable()
export class ListToDosUseCase implements BaseUseCase<any, ToDo[]> {
  constructor(private toDoDataSource: ToDoDataSource) {}

  async execute(): Promise<ToDo[]> {
    return this.toDoDataSource.listUndoneTasks();
  }
}
