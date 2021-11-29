import { Injectable } from '@nestjs/common';
import { BaseUseCase } from '@common/base-use-case.interface';
import { ToDoDataSource } from '../data/to-do.datasource';
import { CreateToDoInput } from '../models/create-to-do.model';
import { ToDo } from '../models/to-do.model';

@Injectable()
export class CreateToDoUseCase implements BaseUseCase<CreateToDoInput, ToDo> {
  constructor(private toDoDataSource: ToDoDataSource) {}

  async execute(toDo: CreateToDoInput): Promise<ToDo> {
    return this.toDoDataSource.create(toDo);
  }
}
