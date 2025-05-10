import { IPlayer } from './IPlayer';

export interface IMatch {
  id: number;
  player1: IPlayer;
  player2: IPlayer;
  winner: number; // ID du joueur gagnant
  date: Date;
}
