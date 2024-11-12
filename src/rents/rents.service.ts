import { Injectable } from '@nestjs/common';
import { CreateRentDto } from './dto/create-rent.dto';
import { UpdateRentDto } from './dto/update-rent.dto';
import { Rent } from './entities/rent.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class RentsService {

  constructor(
    @InjectModel(Rent.name) private rentModel: Model<Rent>
    
  ) {}

  async create(createRentDto: CreateRentDto) {
    const newRent = new this.rentModel(createRentDto)
    return await newRent.save()
  }

  async findAll() {
    return await this.rentModel.find()
  }

  async getUpcomingEvents (actuallyDate: Date) {
    return await this.rentModel.aggregate([
      {
        '$match': {
          'date': {
            '$gt': new Date(actuallyDate)
          }
        }
      }
    ])
  }

  async findPaidEvents () {
    return await this.rentModel.find(
      {paid:true}
    )
  }

  async findUnPaidEvents () {
    return await this.rentModel.find(
      {paid:false}
    )
  }

  async update(id: string, updateRentDto: UpdateRentDto) {
    return await this.rentModel.findOneAndUpdate(
      {_id:id},
      {$set:updateRentDto},
      {new:true }
    )
  }

  async remove(id: string) {
    return await this.rentModel.findOneAndDelete({_id:id}) 
  }
}
