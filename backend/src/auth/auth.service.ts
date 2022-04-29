import { Inject, Injectable } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { AuthDto } from './dto/auth.dto';

import * as mongodb from 'mongodb'
@Injectable()
export class AuthService {
  constructor(
    @Inject('DATABASE_CONNECTION') private db: mongodb.Db,
  ) { }
  register(dto: RegisterDto) {
    console.log(dto);
    return this.db.collection('users').insertOne(dto);
  }

  login(dto: AuthDto) {
    console.log(dto);
    return this.db.collection('users').aggregate([
      {
        $match: {
          email: dto.email,
          password: dto.password,
        }
      }
    ]);
  }

  validate(dto: AuthDto) {
    return this.db.collection('users').aggregate([
      {
        $match: {
          email: dto.email
        }
      }
    ]);

  }
}
