import { PartialType } from '@nestjs/mapped-types';
import { CreateAdoptanteDto } from './create-adoptante.dto';

// PartialType toma todas las validaciones de CreateAdoptanteDto
// y las aplica, pero marcando cada campo como opcional.
export class UpdateAdoptanteDto extends PartialType(CreateAdoptanteDto) {}
