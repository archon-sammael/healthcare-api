import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PatientModule } from './modules/patient.module';
import { DiagnosisModule } from './modules/diagnosis.module';
import { LesionModule } from './modules/lesion.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '',
      database: 'postgres',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    PatientModule,
    DiagnosisModule,
    LesionModule,
  ],
})
export class AppModule {}