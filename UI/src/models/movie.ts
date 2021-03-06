export class Movie {
  _id: string;
  name: string;
  image: string;
  director: string[];
  cast: string[];
  genre: string[];
  release_date: Date;
  running_time: number;
  description: string;
  trailer: string;
  disable: boolean;
}
