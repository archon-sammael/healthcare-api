import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Patient } from '../models/patient.entity';

@Injectable()
export class PatientService {
  constructor(
    @InjectRepository(Patient)
    private patientRepository: Repository<Patient>,
  ) {}

  findAll(): Promise<Patient[]> {
    return this.patientRepository.find();
  }

  findOne(id: string): Promise<Patient> {
    return this.patientRepository.findOne({ where: { id } });
  }

  create(patient: Patient): Promise<Patient> {
    return this.patientRepository.save(patient);
  }

  async remove(id: string): Promise<void> {
    const patient = await this.patientRepository.findOne({ where: { id }, relations: ['lesions'] });
    if (patient && patient.lesions.length === 0) {
      await this.patientRepository.delete(id);
    }
  }
}