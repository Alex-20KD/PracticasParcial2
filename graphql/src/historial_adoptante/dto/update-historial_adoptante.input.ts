import { IsUUID } from 'class-validator';
import { CreateHistorialAdoptanteInput } from './create-historial_adoptante.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateHistorialAdoptanteInput extends PartialType(CreateHistorialAdoptanteInput) {

  @Field(() => Int)
  @IsUUID()
  id: string;
  
}
