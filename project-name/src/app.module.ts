import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdoptanteModule } from './adoptante/adoptante.module';
import { HistorialAdoptanteModule } from './historial_adoptante/historial_adoptante.module';
import { MascotaModule } from './mascota/mascota.module';
@Module({
imports: [
TypeOrmModule.forRoot({
type: 'sqlite',
database: 'db.sqlite', // Nombre del archivo de la base de datos
entities: [__dirname + '/**/*.entity{.ts,.js}'],
synchronize: true, // ¡Solo para desarrollo! Sincroniza el esquema de la BD con las entidades
}),
AdoptanteModule,
HistorialAdoptanteModule,
MascotaModule,
],
controllers: [AppController],
providers: [AppService],
})
export class AppModule {}