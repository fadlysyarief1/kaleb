import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    insert(body: CreateUserDto): {
        url: string;
    };
    login(body: LoginUserDto): Promise<{
        url: string;
    }>;
    findAll(): any;
    findOne(id: string): Promise<any>;
    update(id: string, updateUserDto: UpdateUserDto): any;
    remove(id: string): any;
}
