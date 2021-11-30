import { Injectable } from '@nestjs/common';
import { BaseUseCase } from '@common/base-use-case.interface';
import { ToDoDataSource } from '../data/to-do.datasource';
import { UpdateToDoInput } from '../models/update-to-do.model';
import { ToDo } from '../models/to-do.model';
import { ToDoNotFoundError } from './errors/to-do-not-found.error';

@Injectable()
export class UpdateToDoUseCase
  implements BaseUseCase<UpdateToDoInput, Partial<ToDo>>
{
  constructor(private toDoDataSource: ToDoDataSource) {}

  async execute(updateToDoPayload: UpdateToDoInput): Promise<ToDo> {
    const toDoExists = await this.toDoDataSource.findById(updateToDoPayload.id);

    if (!toDoExists) {
      new ToDoNotFoundError();
    }

    await this.toDoDataSource.update(updateToDoPayload);

    /* workaround pra campos nullable do Graphql
     * que não são retornados no ".save()" do TypeORM
     */
    return this.toDoDataSource.findById(updateToDoPayload.id);
  }
}
