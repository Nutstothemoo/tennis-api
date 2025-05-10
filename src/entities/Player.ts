import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Country } from './Country';
import { IPlayer } from '../interfaces/IPlayer';

@Entity()
export class Player implements IPlayer {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  firstname!: string;

  @Column()
  lastname!: string;

  @Column()
  shortname!: string;

  @Column()
  sex!: string;

@ManyToOne(() => Country, (country: Country) => country.players, { eager: true })
@JoinColumn({ name: 'country_id' })
country!: Country;

  @Column()
  picture!: string;

  @Column('int')
  rank!: number;

  @Column('int')
  points!: number;

  @Column('int')
  weight!: number;

  @Column('int')
  height!: number;

  @Column('int')
  age!: number;

  @Column('simple-array')
  last!: number[];
}
