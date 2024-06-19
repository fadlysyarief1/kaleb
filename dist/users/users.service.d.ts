import { AuthService } from '../auth/auth.service';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
export type User2 = any;
export declare class UsersService {
    private usersRepository;
    private authService;
    [x: string]: any;
    saltOrRounds: number;
    constructor(usersRepository: Repository<User>, authService: AuthService);
    insert(user: any): Promise<import("typeorm").InsertResult>;
    loginku(userku: any): Promise<{
        token: number;
    }>;
    findOne(username: any): Promise<User2 | undefined>;
}
