import { Test, TestingModule } from '@nestjs/testing';
import { HistorialAdoptanteResolver } from './historial_adoptante.resolver';
import { HistorialAdoptanteService } from './historial_adoptante.service';

describe('HistorialAdoptanteResolver', () => {
  let resolver: HistorialAdoptanteResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HistorialAdoptanteResolver, HistorialAdoptanteService],
    }).compile();

    resolver = module.get<HistorialAdoptanteResolver>(HistorialAdoptanteResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
