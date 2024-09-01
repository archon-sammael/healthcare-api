import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Lesion } from '../models/lesion.entity';

@Entity()
export class Diagnosis {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @OneToMany(() => Lesion, (lesion) => lesion.diagnosis)
  lesions: Lesion[];
}
