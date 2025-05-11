import type { IPlayer } from './IPlayer'; 

export interface ICountry {
  id: number;
  name: string;
  code: string;
  picture: string;
  players: Array<Pick<IPlayer, 'id' | 'firstname' | 'lastname'>>; 
}
