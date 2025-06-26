import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Adoptante")
export class Adoptante {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    telefono: number;

    @Column()
    direccion:string;

    @Column()
    tipo_documento: string; 

    @Column()
    numero_documento: number;

    @Column()
    fecha_registro: Date;

    @Column({default: true})
    status:boolean; 
}
