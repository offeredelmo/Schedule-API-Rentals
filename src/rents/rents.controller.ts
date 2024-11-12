import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RentsService } from './rents.service';
import { CreateRentDto } from './dto/create-rent.dto';
import { UpdateRentDto } from './dto/update-rent.dto';

@Controller('rents')
export class RentsController {
  constructor(private readonly rentsService: RentsService) {}

  @Post()
  async create(@Body() createRentDto: CreateRentDto) {
    return await this.rentsService.create(createRentDto);
  }

  @Get("all")
  async findAll() {
    return await this.rentsService.findAll();
  }
  
  @Get("upcoming/:date")
  async getUpcomingEvents(@Param('date') actuallyDate: Date) {
    return await this.rentsService.getUpcomingEvents(actuallyDate);
  }

  @Get("findpaidevents")
  async findPaidEvents() {
    return await this.rentsService.findPaidEvents();
  }

  @Get("findunpaidevents")
  async findUnPaidEvents() {
    return await this.rentsService.findUnPaidEvents();
  }


  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateRentDto: UpdateRentDto) {
    return await this.rentsService.update(id, updateRentDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.rentsService.remove(id);
  }
}
