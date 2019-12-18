import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Periodos } from './periodos.entity';
import { Repository, getConnection } from 'typeorm';
import { PeriodosDto } from './dto/periodos.dto';

@Injectable()
export class PeriodosService {

  constructor(@InjectRepository(Periodos) private periodosRepo: Repository<Periodos>) { }

  provideNome(): string {
    return "Injetado, porra";
  }

  async findAll(): Promise<Periodos[]> {
    return this.periodosRepo.find();
  }

  async postPeriodo(periodo: PeriodosDto): Promise<Periodos> {
    return this.periodosRepo.save(periodo);
  }

  async deleteById(idPeriodo: number): Promise<number> {
    const r = await getConnection()
      .createQueryBuilder()
      .delete()
      .from(Periodos)
      .where("id = :id", { id: idPeriodo })
      .execute();

    return r.affected;
  }
}
