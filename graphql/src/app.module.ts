import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MascotaModule } from './mascota/mascota.module';
import { AdoptanteModule } from './adoptante/adoptante.module';
import { HistorialAdoptanteModule } from './historial_adoptante/historial_adoptante.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';


@Module({
  imports:
  [ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
    type: 'sqlite', // Tipo de base de datos
    database: 'db.sqlite', // Nombre del archivo de la base de datos
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true, // ¡Solo para desarrollo! Sincroniza el esquema de la BD con las entidades
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    MascotaModule, AdoptanteModule, HistorialAdoptanteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
