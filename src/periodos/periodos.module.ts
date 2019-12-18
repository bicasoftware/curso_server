import { Module } from '@nestjs/common';
import { PeriodosService } from './periodos.service';
import { PeriodosController } from './periodos.controller';

@Module({
  imports: [PeriodosModule],
  providers: [PeriodosService],
  controllers: [PeriodosController]
})
export class PeriodosModule {}
