import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepo: Repository<User>,
  ) {}

  async create(email: string, password: string) {
    const userExists = await this.usersRepo.findOne({ where: { email } });
    if (userExists) {
      throw new ConflictException('Email already registered');
    }
    const hashed = await bcrypt.hash(password, 10);

    const user = this.usersRepo.create({
      email,
      password: hashed,
    });

    return this.usersRepo.save(user);
  }

  findByEmail(email: string) {
    return this.usersRepo.findOne({ where: { email } });
  }
}
