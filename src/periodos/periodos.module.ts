import { Module } from '@nestjs/common';
import { PeriodosService } from './periodos.service';
import { PeriodosController } from './periodos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Periodos } from './periodos.entity';

@Module({
  imports: [PeriodosModule, TypeOrmModule.forFeature([Periodos])],
  providers: [PeriodosService],
  controllers: [PeriodosController]
})
export class PeriodosModule {}
