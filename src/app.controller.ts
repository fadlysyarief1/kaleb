import { Controller, Get, Render,Post } from '@nestjs/common';
import { AppService } from './app.service';


@Controller()
export class AppController {
  [x: string]: any;
  constructor(private readonly appService: AppService) {}

  @Post('/register2')
  root() {
    return { message: 'Hello Bodat Juga Kau Ya!' };
  }
}
