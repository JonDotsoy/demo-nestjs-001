import { Controller, Post, Get, Body, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { Human } from './dto/human.dto';
import React from 'react';
import ReactDOM from 'react-dom/server';
import fs from 'fs';
import util from 'util';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post()
  async postHello(
    @Body(
      new ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
      }),
    )
    human: Human,
  ) {
    return util.inspect(await this.appService.getHello(human));
  }

  @Get()
  getHello() {
    return fs.readFileSync(`views/home.html`, 'utf-8');
  }
}
