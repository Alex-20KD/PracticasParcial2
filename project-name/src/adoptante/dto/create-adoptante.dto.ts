import { IsString, IsNotEmpty, IsEmail, IsNumber } from 'class-validator';

export class CreateAdoptanteDto {
  @IsString({ message: 'El nombre debe ser un texto.' })
  @IsNotEmpty({ message: 'El nombre no puede estar vacío.' })
  name: string;

  @IsEmail({}, { message: 'El formato del email no es válido.' })
  @IsNotEmpty({ message: 'El email no puede estar vacío.' })
  email: string;

  @IsNumber({}, { message: 'El teléfono debe ser un número.' })
  @IsNotEmpty({ message: 'El teléfono no puede estar vacío.' })
  telefono: number;

  @IsString({ message: 'La dirección debe ser un texto.' })
  @IsNotEmpty({ message: 'La dirección no puede estar vacía.' })
  direccion: string;

  @IsString({ message: 'El tipo de documento debe ser un texto.' })
  @IsNotEmpty({ message: 'El tipo de documento no puede estar vacío.' })
  tipo_documento: string;

  @IsNumber({}, { message: 'El número de documento debe ser un número.' })
  @IsNotEmpty({ message: 'El número de documento no puede estar vacío.' })
  numero_documento: number;

  // La fecha_registro y el status no se incluyen aquí,
  // ya que son manejados automáticamente por el servidor y la base de datos.
}
