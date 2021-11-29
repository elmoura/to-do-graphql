import { Query, Mutation, Resolver, Args } from '@nestjs/graphql';
import { CreateToDoUseCase } from '../core/create-to-do.usecase';
import { CreateToDoInput } from '../models/create-to-do.model';
import { ToDo } from '../models/to-do.model';

@Resolver()
export class ToDoResolver {
  constructor(private createToDoUseCase: CreateToDoUseCase) {}

  @Mutation(() => ToDo)
  async createToDo(@Args('input') input: CreateToDoInput): Promise<ToDo> {
    return this.createToDoUseCase.execute(input);
  }

  @Query(() => String)
  helloWorld() {
    return 'hello world';
  }
}
