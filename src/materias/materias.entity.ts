import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Column, ManyToMany, JoinTable, ManyToOne, OneToMany } from "typeorm";
import { Periodos } from "src/periodos/periodos.entity";
import { Faltas } from "src/faltas/faltas.entity";
import { Notas } from "src/notas/notas.entity";
import { Aulas } from "src/aulas/aulas.entity";

@Entity('materias')
export class Materias {
  @PrimaryGeneratedColumn() id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ type: 'varchar', nullable: false, default: "OxFF00FF" })
  cor: string;

  @Column({ type: 'varchar', nullable: false, default: "" })
  nome: string;

  @Column({ type: 'varchar', length: 8, nullable: false, default: "" })
  sigla: string;

  @Column({ type: 'boolean', nullable: false, default: true })
  freq: boolean;

  @Column({ type: 'decimal', nullable: false, default: 0.0 })
  medaprov: number;

  @ManyToOne(
    type => Periodos, periodo => periodo.id, {
    cascade: true
  })
  @JoinTable()
  periodo: Periodos;

  @OneToMany(
    type => Notas, nota => nota.materia
  )
  notas: Notas[];

  @OneToMany(
    type => Faltas, falta => falta.materia
  )
  faltas: Faltas[];

  @OneToMany(
    type => Aulas, aula => aula.materia
  )
  aulas: Aulas[];
}