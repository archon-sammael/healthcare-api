import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Lesion } from '../models/lesion.entity';

@Entity()
export class Patient {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @OneToMany(() => Lesion, (lesion) => lesion.patient)
  lesions: Lesion[];
}
