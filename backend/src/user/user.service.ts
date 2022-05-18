import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as mongodb from 'mongodb'

@Injectable()
export class UserService {
  constructor(
    @Inject('DATABASE_CONNECTION') private db: mongodb.Db,
  ) { }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: string) {
    return `This action returns a #${id} user`;
  }
}
