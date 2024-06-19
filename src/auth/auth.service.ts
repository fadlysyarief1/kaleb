import { Injectable, UnauthorizedException } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
constructor(@InjectRepository(User) private usersRepository: Repository<User>) { }
  async findOneBy(username: string){
    return await this.usersRepository.findOneBy({ username: username });
  }
 
}