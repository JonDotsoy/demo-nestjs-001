import { Injectable } from '@nestjs/common';
import { Human } from './dto/human.dto';

@Injectable()
export class AppService {
  getHello(payload: Human) {
    return {
      payload,
    };
  }
}
