import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { HistorialAdoptanteService } from './historial_adoptante.service';
import { HistorialAdoptante } from './entities/historial_adoptante.entity';
import { CreateHistorialAdoptanteInput } from './dto/create-historial_adoptante.input';
import { UpdateHistorialAdoptanteInput } from './dto/update-historial_adoptante.input';

@Resolver(() => HistorialAdoptante)
export class HistorialAdoptanteResolver {
  constructor(private readonly historialAdoptanteService: HistorialAdoptanteService) {}

  @Mutation(() => HistorialAdoptante)
  createHistorialAdoptante(@Args('createHistorialAdoptanteInput') createHistorialAdoptanteInput: CreateHistorialAdoptanteInput)
  : Promise<HistorialAdoptante> {
    return this.historialAdoptanteService.create(createHistorialAdoptanteInput);
  }

  @Query(() => [HistorialAdoptante], { name: 'historialAdoptantes' })
  findAll(): Promise<HistorialAdoptante[]> {
    return this.historialAdoptanteService.findAll();
  }

  @Query(() => HistorialAdoptante, { name: 'historialAdoptante' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.historialAdoptanteService.findOne(id);
  }

  @Mutation(() => HistorialAdoptante)
  updateHistorialAdoptante(@Args('updateHistorialAdoptanteInput') updateHistorialAdoptanteInput: UpdateHistorialAdoptanteInput)
  : Promise<HistorialAdoptante> {
    return this.historialAdoptanteService.update(updateHistorialAdoptanteInput.id, updateHistorialAdoptanteInput);
  }

  @Mutation(() => HistorialAdoptante)
  removeHistorialAdoptante(@Args('id', { type: () => String }) id: string): Promise<HistorialAdoptante> {
    return this.historialAdoptanteService.remove(id);
  }
}
