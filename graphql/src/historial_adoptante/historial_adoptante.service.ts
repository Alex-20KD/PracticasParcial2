import { Injectable} from '@nestjs/common';
import { CreateHistorialAdoptanteInput } from './dto/create-historial_adoptante.input';
import { UpdateHistorialAdoptanteInput } from './dto/update-historial_adoptante.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HistorialAdoptante } from './entities/historial_adoptante.entity';

@Injectable()
export class HistorialAdoptanteService {

  constructor(

    @InjectRepository(HistorialAdoptante)
    private readonly historialAdoptanteRepository: Repository<HistorialAdoptante>

  ) {}
  async create(createHistorialAdoptanteInput: CreateHistorialAdoptanteInput): Promise<HistorialAdoptante> {
    const created = this.historialAdoptanteRepository.create(createHistorialAdoptanteInput);
    return await this.historialAdoptanteRepository.save(created);

    }

  async findAll(): Promise<HistorialAdoptante[]> {

    return await this.historialAdoptanteRepository.find();
  }

  async findOne(id: string) {
    
    return await this.historialAdoptanteRepository.findOne({ where: { id } });

  }

  async update(id: string, updateHistorialAdoptanteInput: UpdateHistorialAdoptanteInput): Promise<HistorialAdoptante> {

    const updated = await this.historialAdoptanteRepository.preload(updateHistorialAdoptanteInput);
    if (!updated) {
      throw new Error(`HistorialAdoptante with id ${id} not found`);
    }
    return await this.historialAdoptanteRepository.save(updated);
 }

  async remove(id: string): Promise<HistorialAdoptante> {

    const removed = await this.historialAdoptanteRepository.findOne({ where: { id } });
    if (!removed) {
      throw new Error(`HistorialAdoptante with id ${id} not found`);
    }
    return await this.historialAdoptanteRepository.remove(removed);
  }
}
