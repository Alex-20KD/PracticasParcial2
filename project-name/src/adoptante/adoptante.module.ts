import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdoptanteService } from './adoptante.service';
import { AdoptanteController } from './adoptante.controller';
import { Adoptante } from './entities/adoptante.entity';

@Module({
  imports: [
    // Importa el repositorio para que pueda ser inyectado en el servicio.
    TypeOrmModule.forFeature([Adoptante])
  ],
  controllers: [AdoptanteController],
  providers: [AdoptanteService],
  exports: [TypeOrmModule], // Exportamos el servicio para que pueda ser utilizado en otros módulos si es necesario
})
export class AdoptanteModule {}
