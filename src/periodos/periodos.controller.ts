import { Controller, Get } from '@nestjs/common';
import { PeriodosService } from './periodos.service';

@Controller('periodos')
export class PeriodosController {
  constructor(private readonly periodosService: PeriodosService){}

  @Get()
  getHello(): string{
    return this.periodosService.provideNome();
  }  
}
