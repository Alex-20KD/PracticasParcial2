import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { HistorialAdoptanteService } from './historial_adoptante.service';
import { CreateHistorialAdoptanteDto } from './dto/create-historial_adoptante.dto';
import { UpdateHistorialAdoptanteDto } from './dto/update-historial_adoptante.dto';

@Controller('historial-adoptante')
export class HistorialAdoptanteController {
  constructor(private readonly historialAdoptanteService: HistorialAdoptanteService) {}

  @Post()
  create(@Body() createHistorialDto: CreateHistorialAdoptanteDto) {
    return this.historialAdoptanteService.create(createHistorialDto);
  }

  @Get()
  findAll() {
    return this.historialAdoptanteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.historialAdoptanteService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateHistorialDto: UpdateHistorialAdoptanteDto) {
    return this.historialAdoptanteService.update(id, updateHistorialDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.historialAdoptanteService.remove(id);
  }
}
