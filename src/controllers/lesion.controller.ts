import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { LesionService } from '../services/lesion.service';
import { Lesion } from '../models/lesion.entity';

@Controller('lesions')
export class LesionController {
  constructor(private readonly lesionService: LesionService) {}

  @Get()
  findAll(): Promise<Lesion[]> {
    return this.lesionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Lesion> {
    return this.lesionService.findOne(id);
  }

  @Post()
  create(@Body() lesion: Lesion): Promise<Lesion> {
    return this.lesionService.create(lesion);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.lesionService.remove(id);
  }
}