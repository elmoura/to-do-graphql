import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from '../models/task.model';
import { TaskEntity } from './task.entity';

@Injectable()
export class TaskDataSource {
  constructor(
    @InjectRepository(TaskEntity)
    private taskRepository: Repository<TaskEntity>,
  ) {}

  async create(
    taskPayload: Omit<Task, 'id' | 'isDone' | 'createdAt' | 'updatedAt'>,
  ): Promise<Task> {
    return this.taskRepository.save(taskPayload);
  }

  async listUndoneTasks(): Promise<Task[]> {
    return this.taskRepository.find({
      where: { isDone: false },
      order: {
        createdAt: 'ASC',
        deadline: 'ASC',
      },
    });
  }

  async findById(id: number): Promise<Task> {
    return this.taskRepository.findOne({ where: { id } });
  }

  async update(updateTaskPayload: Partial<Task>): Promise<Task> {
    return this.taskRepository.save(updateTaskPayload);
  }

  async delete(id: number): Promise<boolean> {
    const deleteResult = await this.taskRepository.delete({ id });
    return Boolean(deleteResult.affected);
  }
}
