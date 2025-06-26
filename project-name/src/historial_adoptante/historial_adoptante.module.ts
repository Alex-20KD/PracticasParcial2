import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HistorialAdoptanteService } from './historial_adoptante.service';
import { HistorialAdoptanteController } from './historial_adoptante.controller';
import { HistorialAdoptante } from './entities/historial_adoptante.entity';
@Module({
  imports: [
    TypeOrmModule.forFeature([HistorialAdoptante])
  ],
  controllers: [HistorialAdoptanteController],
  providers: [HistorialAdoptanteService],
  exports: [TypeOrmModule], // si lo usas en otros módulos

})
export class HistorialAdoptanteModule {}
