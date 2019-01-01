import { User } from './user';
import { Showtime } from './showtime';

export class Booking {
  user: User;
  showtime: Showtime;
  quantily: number;
  dateAdded: Date;
  disable: boolean;
}