import { Movie } from './movie';
import { Room } from './room';

export class Showtime {
  _id: string;
  opening_date: Date;
  movie: Movie;
  room: Room;
  disable: Boolean;
}
