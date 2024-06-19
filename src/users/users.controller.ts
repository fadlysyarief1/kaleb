import { Controller, Get, Post, Body, Patch, Param, Delete, Redirect, HttpCode, UnauthorizedException } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { url } from 'inspector';
import * as bcrypt from 'bcrypt';
import { access } from 'fs';


@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('create')
  @Redirect('http://localhost:5173/?Pesan=BerhasilRegister')
  insert(@Body() body: CreateUserDto) {
    this.usersService.insert(body)
    return { url: 'http://localhost:5173/?Pesan="Berhasil Register' };
  }

  @Post('login')
  // @Redirect('http://localhost:5173/dashboard?Pesan=Login Berhasil')
  async login(@Body() body: LoginUserDto) {
    
   const token = await this.usersService.loginku(body);
  
   
    return { url: `http://localhost:5173/dashboard?username=${body.username}`} };
    
  

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
