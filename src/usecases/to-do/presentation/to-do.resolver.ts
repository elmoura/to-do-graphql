import { Query, Mutation, Resolver, Args } from '@nestjs/graphql';
import { CreateToDoUseCase } from '../core/create-to-do.usecase';
import { ListToDosUseCase } from '../core/list-to-dos.usecase';
import { UpdateToDoUseCase } from '../core/update-to-do.usecase';
import { CreateToDoInput } from '../models/create-to-do.model';
import { UpdateToDoInput } from '../models/update-to-do.model';
import { ToDo } from '../models/to-do.model';
import { DeleteToDoUseCase } from '../core/delete-to-do.usecase';
import { DeleteToDoOutput } from '../models/delete-to-do.model';

@Resolver()
export class ToDoResolver {
  constructor(
    private listToDosUseCase: ListToDosUseCase,
    private createToDoUseCase: CreateToDoUseCase,
    private updateToDoUseCase: UpdateToDoUseCase,
    private deleteToDoUseCase: DeleteToDoUseCase,
  ) {}

  @Query(() => [ToDo])
  async listUndoneToDos(): Promise<ToDo[]> {
    return this.listToDosUseCase.execute();
  }

  @Mutation(() => ToDo)
  async createToDo(@Args('input') input: CreateToDoInput): Promise<ToDo> {
    return this.createToDoUseCase.execute(input);
  }

  @Mutation(() => ToDo)
  async updateToDo(@Args('input') input: UpdateToDoInput): Promise<ToDo> {
    return this.updateToDoUseCase.execute(input);
  }

  @Mutation(() => DeleteToDoOutput)
  async deleteToDo(@Args('id') id: number): Promise<DeleteToDoOutput> {
    return this.deleteToDoUseCase.execute(id);
  }
}
