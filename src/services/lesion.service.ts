import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lesion } from '../models/lesion.entity';

@Injectable()
export class LesionService {
  constructor(
    @InjectRepository(Lesion)
    private lesionRepository: Repository<Lesion>,
  ) {}

  findAll(): Promise<Lesion[]> {
    return this.lesionRepository.find({ relations: ['patient', 'diagnosis'] });
  }

  findOne(id: string): Promise<Lesion> {
    return this.lesionRepository.findOne({
      where: { id },
      relations: ['patient', 'diagnosis'],
    });
  }

  create(lesion: Lesion): Promise<Lesion> {
    return this.lesionRepository.save(lesion);
  }

  async remove(id: string): Promise<void> {
    const lesion = await this.lesionRepository.findOne({ where: { id } });
    if (lesion) {
      await this.lesionRepository.delete(id);
    }
  }
}