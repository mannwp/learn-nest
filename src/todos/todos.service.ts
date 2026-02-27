import { Injectable } from '@nestjs/common';
import { Todo } from './todo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo)
    private readonly repo: Repository<Todo>,
  ) {}

  async create(data: Partial<Todo>) {
    const todo = this.repo.create(data);
    return this.repo.save(todo);
  }
  findAll() {
    return this.repo.find({
      where: { isDeleted: false },
      order: { createdAt: 'DESC' },
    });
  }
  async findOne(id: string) {
    return this.repo.findOneBy({ id, isDeleted: false });
  }
  async update(id: string, data: Partial<Todo>) {
    await this.repo.update(id, data);
    return this.findOne(id);
  }

  async remove(id: string) {
    await this.repo.update(id, { isDeleted: true });
    return { deleted: true };
  }
  async removeAll() {
    await this.repo.updateAll({ isDeleted: true });
    return { deleted: true };
  }
}
