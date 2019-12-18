import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinTable } from "typeorm";
import { Materias } from "src/materias/materias.entity";

@Entity('notas')
export class Notas {
  @PrimaryGeneratedColumn() id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column('date')
  data: Date;

  @Column('smallint')
  ordemAula: number;

  @ManyToOne(
    type => Materias, materia => materia.id,
    { cascade: true }
  )
  @JoinTable()
  materia: Materias;
}