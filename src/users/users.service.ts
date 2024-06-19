import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthService } from '../auth/auth.service';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

export type User2 = any;

@Injectable()
export class UsersService {
  [x: string]: any;
  saltOrRounds: number = 10;
  
  
  constructor(@InjectRepository(User) private usersRepository: Repository<User>,private authService: AuthService) { }
  async insert(user: any) {
    const hashPass = await bcrypt.hash(user.password, this.saltOrRounds)

    let data = {
      fullName:user.fullName,
      username:user.username,
      password: hashPass
    }
    return await this.usersRepository.insert(data);
}

async loginku(userku: any) {
  
    const user2 = await this.authService.findOneBy(userku.username);
    if (user2?.password !== userku.password) {
      const isMatch = await bcrypt.compare(userku.password, user2?.password);
      if (!isMatch) {
        throw new UnauthorizedException();
      }
      const payload = { sub: userku.username, email: userku.password };
      return {
        token: Math.floor(100000 + Math.random() * 900000),
      };
  
    }
   

  }

async findOne(username: any): Promise<User2 | undefined> {
   
  this.usersRepository.find({
    select: ["password"],
    where: [{ "username": username}]
  });


}

}

