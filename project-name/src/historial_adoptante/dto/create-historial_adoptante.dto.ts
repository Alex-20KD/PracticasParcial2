import { IsString, IsNotEmpty, IsNumber, IsDateString, IsOptional, Min, Max } from 'class-validator';

export class CreateHistorialAdoptanteDto {
  @IsNumber({}, { message: 'El ID de la solicitud debe ser un número.' })
  @IsNotEmpty({ message: 'El ID de la solicitud no puede estar vacío.' })
  solicitud_id: number;

  @IsNumber({}, { message: 'El número de adopciones permanentes debe ser un número.' })
  @IsNotEmpty({ message: 'El campo de adopciones permanentes no puede estar vacío.' })
  adopciones_permanentes: number;

  @IsNumber({}, { message: 'El número de adopciones temporales debe ser un número.' })
  @IsNotEmpty({ message: 'El campo de adopciones temporales no puede estar vacío.' })
  adopciones_temporales: number;

  // IsDateString es ideal para recibir fechas en formato ISO (YYYY-MM-DD) desde el JSON.
  @IsDateString({}, { message: 'La fecha de última adopción debe tener un formato de fecha válido.' })
  @IsNotEmpty({ message: 'La fecha de última adopción no puede estar vacía.' })
  fecha_ultima_adopcion: Date;

  @IsNumber({}, { message: 'La calificación debe ser un número.' })
  @Min(1, { message: 'La calificación mínima es 1.'})
  @Max(5, { message: 'La calificación máxima es 5.'})
  @IsNotEmpty({ message: 'La calificación no puede estar vacía.' })
  calificacion: number;

  @IsString({ message: 'Las notas deben ser un texto.'})
  @IsOptional() // Las notas suelen ser opcionales.
  notas?: string;
}
