
import { IsNotEmpty } from "class-validator"

export class LoginUserDto{
    @IsNotEmpty()
    username:any

    @IsNotEmpty()
    password:any
}
