import { PartialType } from '@nestjs/mapped-types';
import { CreateHistorialAdoptanteDto } from './create-historial_adoptante.dto';

export class UpdateHistorialAdoptanteDto extends PartialType(CreateHistorialAdoptanteDto) {}