import { Query, Mutation, Resolver, Args } from '@nestjs/graphql';
import { CreateTaskUseCase } from '../core/create-task.usecase';
import { ListTasksUseCase } from '../core/list-tasks.usecase';
import { UpdateTaskUseCase } from '../core/update-task.usecase';
import { CreateTaskInput } from '../models/create-task.model';
import { UpdateTaskInput } from '../models/update-task.model';
import { Task } from '../models/task.model';
import { DeleteTaskUseCase } from '../core/delete-task.usecase';
import { DeleteTaskOutput } from '../models/delete-task.model';

@Resolver()
export class TasksResolver {
  constructor(
    private listTasksUseCase: ListTasksUseCase,
    private createTaskUseCase: CreateTaskUseCase,
    private updateTaskUseCase: UpdateTaskUseCase,
    private deleteTaskUseCase: DeleteTaskUseCase,
  ) {}

  @Query(() => [Task])
  async listUndoneTasks(): Promise<Task[]> {
    return this.listTasksUseCase.execute();
  }

  @Mutation(() => Task)
  async createTask(@Args('input') input: CreateTaskInput): Promise<Task> {
    return this.createTaskUseCase.execute(input);
  }

  @Mutation(() => Task)
  async updateTask(@Args('input') input: UpdateTaskInput): Promise<Task> {
    return this.updateTaskUseCase.execute(input);
  }

  @Mutation(() => DeleteTaskOutput)
  async deleteTask(@Args('id') id: number): Promise<DeleteTaskOutput> {
    return this.deleteTaskUseCase.execute(id);
  }
}
