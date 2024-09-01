import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lesion } from '../models/lesion.entity';
import { LesionService } from '../services/lesion.service';
import { LesionController } from '../controllers/lesion.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Lesion])],
  providers: [LesionService],
  controllers: [LesionController],
})
export class LesionModule {}
