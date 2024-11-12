import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { RentsModule } from './rents/rents.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://211099:211099@cluster0.5uxjy9w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'), 
    UsersModule, 
    RentsModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
