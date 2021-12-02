import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskDataSource } from './data/task.datasource';
import { TaskEntity } from './data/task.entity';
import { TasksResolver } from './presentation/tasks.resolver';
import { CreateTaskUseCase } from './core/create-task.usecase';
import { ListTasksUseCase } from './core/list-tasks.usecase';
import { UpdateTaskUseCase } from './core/update-task.usecase';
import { DeleteTaskUseCase } from './core/delete-task.usecase';

@Module({
  imports: [TypeOrmModule.forFeature([TaskEntity])],
  providers: [
    TasksResolver,
    TaskDataSource,
    ListTasksUseCase,
    CreateTaskUseCase,
    UpdateTaskUseCase,
    DeleteTaskUseCase,
  ],
})
export class TasksModule {}
