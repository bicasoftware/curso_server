import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { PeriodosService } from './periodos.service';
import { Periodos } from './periodos.entity';
import { PeriodosDto } from './dto/periodos.dto';
import { DeleteResponseDto } from 'src/server_dto/delete.response.dto';

@Controller('periodos')
export class PeriodosController {
  constructor(private readonly periodosService: PeriodosService) { }

  @Get()
  getHello(): string {
    return this.periodosService.provideNome();
  }

  @Get("/all")
  getAll(): Promise<Periodos[]> {
    return this.periodosService.findAll();
  }

  @Post()
  async postPeriodo(@Body() periodo: PeriodosDto): Promise<Periodos> {
    return await this.periodosService.postPeriodo(periodo);
  }

  @Delete(":id")
  async deletePeriodo(@Param() params): Promise<DeleteResponseDto> {
    const result = await this.periodosService.deleteById(params.id);
    return {
      removedRows: result
    }
  }
}
