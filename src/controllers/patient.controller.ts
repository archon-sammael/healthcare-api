import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { PatientService } from '../services/patient.service';
import { Patient } from '../models/patient.entity';

@Controller('patients')
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @Get()
  findAll(): Promise<Patient[]> {
    return this.patientService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Patient> {
    return this.patientService.findOne(id);
  }

  @Post()
  create(@Body() patient: Patient): Promise<Patient> {
    return this.patientService.create(patient);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.patientService.remove(id);
  }
}