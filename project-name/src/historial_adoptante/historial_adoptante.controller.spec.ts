import { Test, TestingModule } from '@nestjs/testing';
import { HistorialAdoptanteController } from './historial_adoptante.controller';
import { HistorialAdoptanteService } from './historial_adoptante.service';

describe('HistorialAdoptanteController', () => {
  let controller: HistorialAdoptanteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HistorialAdoptanteController],
      providers: [HistorialAdoptanteService],
    }).compile();

    controller = module.get<HistorialAdoptanteController>(HistorialAdoptanteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
