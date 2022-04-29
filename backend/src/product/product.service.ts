import { Inject, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import * as mongodb from 'mongodb'

@Injectable()
export class ProductService {
  constructor(
    @Inject('DATABASE_CONNECTION') private db: mongodb.Db,
  ) { }
  create(createProductDto: CreateProductDto) {
    return 'This action adds a new product';
  }

  findAll() {
    return this.db.collection('product').aggregate([
      {
        $match: {

        }
      }
    ]).toArray()
  }

  async findOne(id: string) {
    return (await this.db.collection('product').aggregate([
      {
        $match: {
          _id: new mongodb.ObjectId(id)
        }
      }
    ]).toArray())[0]
  }
}
