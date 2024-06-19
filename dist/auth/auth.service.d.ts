import { User } from '../users/entities/user.entity';
import { Repository } from 'typeorm';
export declare class AuthService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    findOneBy(username: string): Promise<User>;
}
