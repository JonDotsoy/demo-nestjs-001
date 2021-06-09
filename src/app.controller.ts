import { Controller, Post, Get, Body, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { Human } from './dto/human.dto';
import { Home } from './views/home';
import React from 'react';
import ReactDOM from 'react-dom/server';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  postHello(
    @Body(
      new ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
      }),
    )
    human: Human,
  ) {
    return this.appService.getHello(human);
  }

  @Get()
  getHello() {
    return ReactDOM.renderToString(React.createElement(Home));
  }
}
