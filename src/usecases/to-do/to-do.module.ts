import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ToDoDataSource } from './data/to-do.datasource';
import { ToDoEntity } from './data/to-do.entity';
import { ToDoResolver } from './presentation/to-do.resolver';
import { CreateToDoUseCase } from './core/create-to-do.usecase';

@Module({
  imports: [TypeOrmModule.forFeature([ToDoEntity])],
  providers: [ToDoResolver, ToDoDataSource, CreateToDoUseCase],
})
export class ToDoModule {}
