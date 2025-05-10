import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Player } from './Player';
import { IMatch } from '../interfaces/IMatch';

@Entity()
export class Match implements IMatch {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Player, { eager: true })
  @JoinColumn({ name: 'player1_id' })
  player1!: Player;

  @ManyToOne(() => Player, { eager: true })
  @JoinColumn({ name: 'player2_id' })
  player2!: Player;

  @Column()
  winner!: number; // ID du joueur gagnant

  @Column('timestamp')
  date!: Date;
}
