import { IsString, IsNotEmpty, IsNumber, IsUrl, IsBoolean} from 'class-validator';

export class CreateMascotaDto {
  @IsString({ message: 'El nombre debe ser un texto.' })
  @IsNotEmpty({ message: 'El nombre no puede estar vacío.' })
  name: string;

  @IsString({ message: 'La especie debe ser un texto.' })
  @IsNotEmpty({ message: 'La especie no puede estar vacía.' })
  especie: string;

  @IsString({ message: 'La raza debe ser un texto.' })
  @IsNotEmpty({ message: 'La raza no puede estar vacía.' })
  raza: string;

  @IsNumber({}, { message: 'La edad debe ser un número.' })
  @IsNotEmpty({ message: 'La edad no puede estar vacía.' })
  edad: number;

  @IsString({ message: 'El género debe ser un texto.' })
  @IsNotEmpty({ message: 'El género no puede estar vacío.' })
  genero: string;

  @IsString({ message: 'La descripción debe ser un texto.' })
  @IsNotEmpty({ message: 'La descripción no puede estar vacía.' })
  descripcion: string;

  @IsBoolean({ message: 'El estado de adopción debe ser verdadero o falso.' })
  @IsNotEmpty({ message: 'El estado de adopción no puede estar vacío.' })
  estado_adopcion: boolean;

  @IsUrl({}, { message: 'La URL de la foto no es válida.' })
  @IsNotEmpty({ message: 'La foto no puede estar vacía.' })
  foto_url: string;
}
