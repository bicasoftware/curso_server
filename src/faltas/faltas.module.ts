import { Module } from '@nestjs/common';
import { FaltasController } from './faltas.controller';

@Module({
  controllers: [FaltasController]
})
export class FaltasModule {}
