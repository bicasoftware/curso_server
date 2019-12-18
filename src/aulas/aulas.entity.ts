import { Entity, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn, Column, ManyToOne, JoinTable } from "typeorm";
import { Materias } from "src/materias/materias.entity";

@Entity('aulas')
export class Aulas {
  @PrimaryGeneratedColumn() id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column('smallint')
  ordemAula: number;

  @Column('smallint')
  weekday: number;

  @ManyToOne(
    type => Materias, materia => materia.id,
    {cascade: true}
  )
  @JoinTable()
  materia: Materias;

}