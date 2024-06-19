import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm/repository/Repository';
import { User } from './users/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AppService {
  
}
