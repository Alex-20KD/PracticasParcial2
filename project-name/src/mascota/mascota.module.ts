import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MascotaService } from './mascota.service';
import { MascotaController } from './mascota.controller';
import { Mascota } from './entities/mascota.entity';

@Module({
  // ---> ESTA ES LA LÍNEA MÁS IMPORTANTE <---
  // Asegúrate de que este array 'imports' exista y contenga TypeOrmModule.
  imports: [
    TypeOrmModule.forFeature([Mascota])
  ],
  controllers: [MascotaController],
  providers: [MascotaService],
  exports: [TypeOrmModule], // Exportamos el servicio para que pueda ser utilizado en otros módulos si es necesario
})
export class MascotaModule {}
