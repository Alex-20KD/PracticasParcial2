import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMascotaDto } from './dto/create-mascota.dto';
import { UpdateMascotaDto } from './dto/update-mascota.dto';
import { Mascota } from './entities/mascota.entity';

@Injectable()
export class MascotaService {
  constructor(
    @InjectRepository(Mascota)
    private readonly mascotaRepository: Repository<Mascota>,
  ) {}

  async create(createMascotaDto: CreateMascotaDto): Promise<Mascota> {
    const mascota: Mascota = this.mascotaRepository.create(createMascotaDto as Partial<Mascota>);
    return await this.mascotaRepository.save(mascota);
  }

  async findAll(): Promise<Mascota[]> {
    return await this.mascotaRepository.find({
      where: { estado_adopcion: true },
    });
  }

  async findOne(id: number): Promise<Mascota> {
    const mascota = await this.mascotaRepository.findOne({
      where: { id, estado_adopcion: true },
    });

    if (!mascota) {
      throw new NotFoundException(`La mascota con ID "${id}" no fue encontrada o ya fue adoptada.`);
    }

    return mascota;
  }

  async update(id: number, updateMascotaDto: UpdateMascotaDto): Promise<Mascota> {
    const mascota = await this.mascotaRepository.preload({
      id,
      ...(updateMascotaDto as Partial<Mascota>),
    });

    if (!mascota) {
      throw new NotFoundException(`La mascota con ID "${id}" no fue encontrada para actualizar.`);
    }

    return await this.mascotaRepository.save(mascota);
  }

  async remove(id: number): Promise<Mascota> {
    const mascota = await this.findOne(id);
    mascota.estado_adopcion = false;
    return await this.mascotaRepository.save(mascota);
  }
}
