import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("HistorialAdoptante")
export class HistorialAdoptante {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    solicitud_id: number;

    @Column()
    adopciones_permanentes: number;

    @Column()
    adopciones_temporales: number;

    @Column()
    fecha_ultima_adopcion: Date;

    @Column()
    calificacion: number;

    @Column()
    notas: string; 
}
