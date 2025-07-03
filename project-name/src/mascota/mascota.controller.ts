import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { MascotaService } from './mascota.service';
import { CreateMascotaDto } from './dto/create-mascota.dto';
import { UpdateMascotaDto } from './dto/update-mascota.dto';

// La ruta base para este controlador será 'mascotas'.
@Controller('mascotas')
export class MascotaController {
  constructor(private readonly mascotaService: MascotaService) {}

  @Post()
  create(@Body() createMascotaDto: CreateMascotaDto) {
    return this.mascotaService.create(createMascotaDto);
  }

  @Get()
  findAll() {
    return this.mascotaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.mascotaService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateMascotaDto: UpdateMascotaDto) {
    return this.mascotaService.update(id, updateMascotaDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.mascotaService.remove(id);
  }
}
