import { Injectable } from '@nestjs/common';

@Injectable()
export class PeriodosService {
  provideNome() : string {
    return "Injetado, porra";
  }
}
