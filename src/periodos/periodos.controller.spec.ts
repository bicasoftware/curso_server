import { Test, TestingModule } from '@nestjs/testing';
import { PeriodosController } from './periodos.controller';

describe('Periodos Controller', () => {
  let controller: PeriodosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PeriodosController],
    }).compile();

    controller = module.get<PeriodosController>(PeriodosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
