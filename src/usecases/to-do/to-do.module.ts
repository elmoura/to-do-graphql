import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ToDoDataSource } from './data/to-do.datasource';
import { ToDoEntity } from './data/to-do.entity';
import { ToDoResolver } from './presentation/to-do.resolver';
import { CreateToDoUseCase } from './core/create-to-do.usecase';
import { ListToDosUseCase } from './core/list-to-dos.usecase';
import { UpdateToDoUseCase } from './core/update-to-do.usecase';

@Module({
  imports: [TypeOrmModule.forFeature([ToDoEntity])],
  providers: [
    ToDoResolver,
    ToDoDataSource,
    CreateToDoUseCase,
    UpdateToDoUseCase,
    ListToDosUseCase,
  ],
})
export class ToDoModule {}
