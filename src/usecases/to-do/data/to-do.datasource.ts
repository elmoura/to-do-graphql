import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ToDo } from '../models/to-do.model';
import { ToDoEntity } from './to-do.entity';

@Injectable()
export class ToDoDataSource {
  constructor(
    @InjectRepository(ToDoEntity)
    private toDoRepository: Repository<ToDoEntity>,
  ) {}

  async create(
    toDoPayload: Omit<ToDo, 'id' | 'isDone' | 'createdAt' | 'updatedAt'>,
  ): Promise<ToDo> {
    return this.toDoRepository.save(toDoPayload);
  }

  async listUndoneTasks(): Promise<ToDo[]> {
    return this.toDoRepository.find({
      where: { isDone: false },
      order: {
        createdAt: 'ASC',
        deadline: 'ASC',
      },
    });
  }

  async findById(id: number): Promise<ToDo> {
    return this.toDoRepository.findOne({ where: { id } });
  }

  async update(updateToDoPayload: Partial<ToDo>): Promise<ToDo> {
    return this.toDoRepository.save(updateToDoPayload);
  }
}
