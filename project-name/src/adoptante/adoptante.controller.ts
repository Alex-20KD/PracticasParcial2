import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { AdoptanteService } from './adoptante.service';
import { CreateAdoptanteDto } from './dto/create-adoptante.dto';
import { UpdateAdoptanteDto } from './dto/update-adoptante.dto';

// Por convención, las rutas de API son plurales y en minúscula.
@Controller('adoptante')
export class AdoptanteController {
  constructor(private readonly adoptanteService: AdoptanteService) {}

  @Post()
  create(@Body() createAdoptanteDto: CreateAdoptanteDto) {
    return this.adoptanteService.create(createAdoptanteDto);
  }

  @Get()
  findAll() {
    return this.adoptanteService.findAll();
  }

  @Get(':id')
  // ParseIntPipe transforma y valida que el 'id' de la URL sea un número.
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.adoptanteService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateAdoptanteDto: UpdateAdoptanteDto) {
    return this.adoptanteService.update(id, updateAdoptanteDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.adoptanteService.remove(id);
  }
}
