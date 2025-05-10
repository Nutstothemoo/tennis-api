import 'reflect-metadata';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Player } from './Player';
import { ICountry } from '../interfaces/ICountry';

@Entity()
export class Country implements ICountry {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  code!: string;

  @Column()
  picture!: string;

  @OneToMany(() => Player, (player) => player.country)
  players!: Player[];
}
