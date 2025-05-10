import type { ICountry } from './ICountry';

export interface IPlayer {
  id: number;
  firstname: string;
  lastname: string;
  shortname: string;
  sex: string;
  country: Pick<ICountry, 'id' | 'name' | 'code'>; 
  picture: string;
  rank: number;
  points: number;
  weight: number;
  height: number;
  age: number;
  last: number[];
}
