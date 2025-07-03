import { Module } from '@nestjs/common';
import { HistorialAdoptanteService } from './historial_adoptante.service';
import { HistorialAdoptanteResolver } from './historial_adoptante.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HistorialAdoptante } from './entities/historial_adoptante.entity';

@Module({
  providers: [HistorialAdoptanteResolver, HistorialAdoptanteService],
  exports: [TypeOrmModule],
  imports: [TypeOrmModule.forFeature([HistorialAdoptante])], // Aquí puedes importar otros módulos si es necesario
})
export class HistorialAdoptanteModule {}
