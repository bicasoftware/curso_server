import { Entity, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn, Column, OneToMany } from "typeorm";
import { Horarios } from "src/horarios/horarios.entity";
import { Materias } from "src/materias/materias.entity";

@Entity('periodos')
export class Periodos {

  @PrimaryGeneratedColumn() id: number;

  @UpdateDateColumn()
  updatedAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  @Column({ type: 'smallint', width: 2, nullable: false, default: 1 })
  numperiodo: number;

  @Column({ type: 'smallint', width: 2, nullable: false, default: 4 })
  aulasdia: number;

  @Column('date')
  inicio: Date;

  @Column('date')
  termino: Date;

  @Column({ type: 'smallint', })
  presObrig: number;

  @Column('decimal')
  medaprov: number;

  @OneToMany(
    type => Horarios, horarios => horarios.periodo,
  )
  horarios: Horarios[];

  @OneToMany(
    type => Materias, materia => materia.periodo
  )
  materias: Materias[];


}