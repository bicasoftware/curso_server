import { Entity, UpdateDateColumn, PrimaryGeneratedColumn, CreateDateColumn, Column, JoinTable, ManyToOne } from "typeorm";
import { Periodos } from "src/periodos/periodos.entity";

@Entity('horarios')
export class Horarios {
  @PrimaryGeneratedColumn() id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ type: 'char', length: 5, nullable: false, default: "18:00" })
  inicio: string;

  @Column({ type: 'char', length: 5, nullable: false, default: "18:00" })
  termino: string;

  @Column({ type: 'smallint', nullable: false, default: 0 })
  ordemaula: number;

  @ManyToOne(
    type => Periodos, periodo => periodo.id, {
    cascade: true
  })
  @JoinTable()
  periodo: Periodos;


}