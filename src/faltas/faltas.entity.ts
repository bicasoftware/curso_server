import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinTable } from "typeorm";
import { Materias } from "src/materias/materias.entity";

@Entity('faltas')
export class Faltas {
  @PrimaryGeneratedColumn() id: number;

  @Column({ type: 'date' })
  data: Date;

  @Column({ type: 'smallint' })
  ordemAula: number;

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(
    type => Materias, materia => materia.id,
    { cascade: true }
  )
  @JoinTable()
  materia: Materias;

}