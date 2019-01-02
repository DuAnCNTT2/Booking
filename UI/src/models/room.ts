import { Theater } from './theater';

export class Room {
  _id: string;
  name: string;
  number_seat: string[];
  type_seat: string;
  room: Theater;
  price: number;
  disable: boolean;
}
