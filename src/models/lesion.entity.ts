import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Patient } from '../models/patient.entity';
import { Diagnosis } from '../models/diagnosis.entity';

@Entity()
export class Lesion {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Patient, (patient) => patient.lesions, {
    onDelete: 'CASCADE',
  })
  patient: Patient;

  @ManyToOne(() => Diagnosis, (diagnosis) => diagnosis.lesions, {
    onDelete: 'RESTRICT',
  })
  diagnosis: Diagnosis;
}
