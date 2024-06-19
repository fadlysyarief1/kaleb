import { IsNotEmpty } from "class-validator"

export class CreateUserDto {
    @IsNotEmpty()
    id:number
    
    
    fullName:string

    @IsNotEmpty()
    username:string

    @IsNotEmpty()
    password:string
}
