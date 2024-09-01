import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Diagnosis } from '../models/diagnosis.entity';

@Injectable()
export class DiagnosisService {
  constructor(
    @InjectRepository(Diagnosis)
    private diagnosisRepository: Repository<Diagnosis>,
  ) {}

  findAll(): Promise<Diagnosis[]> {
    return this.diagnosisRepository.find();
  }

  findOne(id: string): Promise<Diagnosis> {
    return this.diagnosisRepository.findOne({ where: { id } });
  }

  create(diagnosis: Diagnosis): Promise<Diagnosis> {
    return this.diagnosisRepository.save(diagnosis);
  }

  async remove(id: string): Promise<void> {
    const diagnosis = await this.diagnosisRepository.findOne({
      where: { id },
      relations: ['lesions'],
    });

    if (diagnosis && diagnosis.lesions.length === 0) {
      await this.diagnosisRepository.delete(id);
    }
  }
}
