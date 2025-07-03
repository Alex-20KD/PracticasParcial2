import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Adoptante } from 'src/adoptante/entities/adoptante.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('Mascota')
export class Mascota {

  @PrimaryGeneratedColumn('uuid')
  @Field(() =>ID)
  id: string;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  especie: string;

  @Column()
  @Field()
  raza: string;

  @Column({ type: 'int' })  
  @Field(() => Int)
  edad: number;

  @Column()
  @Field()
  genero: string;

  @Column()
  @Field()
  descripcion: string;

  @Column()
  @Field()
  foto_url: string;

  @Column({ default: true })
  @Field()
  estado_adopcion: boolean;

  @ManyToOne(() => Adoptante, (adoptante) => adoptante.mascotas, { nullable: true })
  @Field(() => Adoptante, { nullable: true })
  adoptante: Adoptante;
  
}
