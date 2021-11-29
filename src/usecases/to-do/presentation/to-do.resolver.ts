import { Query, Mutation, Resolver, Args } from '@nestjs/graphql';
import { CreateToDoUseCase } from '../core/create-to-do.usecase';
import { ListToDosUseCase } from '../core/list-to-dos.usecase';
import { CreateToDoInput } from '../models/create-to-do.model';
import { ToDo } from '../models/to-do.model';

@Resolver()
export class ToDoResolver {
  constructor(
    private listToDosUseCase: ListToDosUseCase,
    private createToDoUseCase: CreateToDoUseCase,
  ) {}

  @Mutation(() => ToDo)
  async createToDo(@Args('input') input: CreateToDoInput): Promise<ToDo> {
    return this.createToDoUseCase.execute(input);
  }

  @Query(() => [ToDo])
  async listUndoneToDos(): Promise<ToDo[]> {
    return this.listToDosUseCase.execute();
  }
}
