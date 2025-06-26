import { Test, TestingModule } from '@nestjs/testing';
import { HistorialAdoptanteService } from './historial_adoptante.service';

describe('HistorialAdoptanteService', () => {
  let service: HistorialAdoptanteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HistorialAdoptanteService],
    }).compile();

    service = module.get<HistorialAdoptanteService>(HistorialAdoptanteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
