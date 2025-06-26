import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAdoptanteDto } from './dto/create-adoptante.dto';
import { UpdateAdoptanteDto } from './dto/update-adoptante.dto';
import { Adoptante } from './entities/adoptante.entity';

@Injectable()
export class AdoptanteService {
  constructor(
    @InjectRepository(Adoptante)
    private readonly adoptanteRepository: Repository<Adoptante>,
  ) {}

  async create(createAdoptanteDto: CreateAdoptanteDto): Promise<Adoptante> {
    // Creamos una nueva instancia del adoptante con los datos del DTO.
    const adoptante = this.adoptanteRepository.create(createAdoptanteDto);
    // Asignamos la fecha de registro actual antes de guardar.
    adoptante.fecha_registro = new Date();
    return await this.adoptanteRepository.save(adoptante);
  }

  async findAll(): Promise<Adoptante[]> {
    // Buscamos todos los adoptantes que tengan status = true (borrado lógico).
    return await this.adoptanteRepository.find({ where: { status: true } });
  }

  async findOne(id: number): Promise<Adoptante> {
    const adoptante = await this.adoptanteRepository.findOne({ where: { id, status: true } });
    if (!adoptante) {
      throw new NotFoundException(`El adoptante con ID "${id}" no fue encontrado o está inactivo.`);
    }
    return adoptante;
  }

  async update(id: number, updateAdoptanteDto: UpdateAdoptanteDto): Promise<Adoptante> {
    // 'preload' busca el adoptante por ID y fusiona los nuevos datos del DTO.
    const adoptante = await this.adoptanteRepository.preload({
      id: id,
      ...updateAdoptanteDto,
    });
    if (!adoptante) {
      throw new NotFoundException(`El adoptante con ID "${id}" no fue encontrado para actualizar.`);
    }
    // Guardamos y retornamos el adoptante actualizado.
    return this.adoptanteRepository.save(adoptante);
  }

  async remove(id: number): Promise<Adoptante> {
    // Buscamos el adoptante para asegurar que exista.
    const adoptante = await this.findOne(id);
    // Aplicamos el borrado lógico cambiando el status a false.
    adoptante.status = false;
    // Guardamos el cambio en la base de datos.
    return await this.adoptanteRepository.save(adoptante);
  }
}
