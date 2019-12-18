import { Test, TestingModule } from '@nestjs/testing';
import { FaltasController } from './faltas.controller';

describe('Faltas Controller', () => {
  let controller: FaltasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FaltasController],
    }).compile();

    controller = module.get<FaltasController>(FaltasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
