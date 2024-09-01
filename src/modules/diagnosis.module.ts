import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Diagnosis } from '../models/diagnosis.entity';
import { DiagnosisService } from '../services/diagnosis.service';
import { DiagnosisController } from '../controllers/diagnosis.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Diagnosis])],
  providers: [DiagnosisService],
  controllers: [DiagnosisController],
})
export class DiagnosisModule {}
