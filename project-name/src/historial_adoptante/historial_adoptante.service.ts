import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateHistorialAdoptanteDto } from './dto/create-historial_adoptante.dto';
import { UpdateHistorialAdoptanteDto } from './dto/update-historial_adoptante.dto';
import { HistorialAdoptante } from './entities/historial_adoptante.entity';

@Injectable()
export class HistorialAdoptanteService {
  constructor(
    @InjectRepository(HistorialAdoptante)
    private readonly historialRepository: Repository<HistorialAdoptante>,
  ) {}

  async create(createHistorialDto: CreateHistorialAdoptanteDto): Promise<HistorialAdoptante> {
    const historial = this.historialRepository.create(createHistorialDto);
    return await this.historialRepository.save(historial);
  }

  async findAll(): Promise<HistorialAdoptante[]> {
    return await this.historialRepository.find();
  }

  async findOne(id: number): Promise<HistorialAdoptante> {
    const historial = await this.historialRepository.findOne({ where: { id } });
    if (!historial) {
      throw new NotFoundException(`El historial con ID "${id}" no fue encontrado.`);
    }
    return historial;
  }

  async update(id: number, updateHistorialDto: UpdateHistorialAdoptanteDto): Promise<HistorialAdoptante> {
    const historial = await this.historialRepository.preload({
      id: id,
      ...updateHistorialDto,
    });
    if (!historial) {
      throw new NotFoundException(`El historial con ID "${id}" no fue encontrado para actualizar.`);
    }
    return this.historialRepository.save(historial);
  }

  async remove(id: number): Promise<HistorialAdoptante> {
    // Primero, encontramos el registro para asegurar que exista.
    const historial = await this.findOne(id);
    // Como esta entidad no tiene 'status', removemos el registro físicamente.
    // El método 'remove' de TypeORM devuelve la entidad eliminada.
    return await this.historialRepository.remove(historial);
  }
}
