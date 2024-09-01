import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PatientModule } from './patient/patient.module';
import { DiagnosisModule } from './diagnosis/diagnosis.module';
import { LesionModule } from './lesion/lesion.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'your_username',
      password: 'your_password',
      database: 'your_database',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    PatientModule,
    DiagnosisModule,
    LesionModule,
  ],
})
export class AppModule {}