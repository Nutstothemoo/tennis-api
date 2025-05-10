import type { IPlayer } from './IPlayer'; // Notez './' pour le chemin relatif

export interface ICountry {
  id: number;
  name: string;
  code: string;
  picture: string;
  players: Array<Pick<IPlayer, 'id' | 'firstname' | 'lastname'>>; // Référence différée
}
