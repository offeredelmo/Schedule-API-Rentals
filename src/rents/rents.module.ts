import { Module } from '@nestjs/common';
import { RentsService } from './rents.service';
import { RentsController } from './rents.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Rent, RentSchema } from './entities/rent.entity';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: Rent.name, schema: RentSchema }]),UsersModule],
  controllers: [RentsController],
  providers: [RentsService],
})
export class RentsModule {}
