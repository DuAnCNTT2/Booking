import { Movie } from 'src/models/movie';

export let fakeMovies: Movie[] = [
  {
    _id: '1',
    name: 'Aquaman: Đế Vương Atlantis',
    image: '../../../assets/images/aquaman.jpg',
    director: ['James Wan'],
    cast: ['Jason Momoa', 'Amber Heard', 'Patrick Wilson'],
    genre: ['Hành Động'],
    release_date: null,
    running_time: 145,
    description: 'Câu chuyện của Đế Vương Atlantis tiếp nối sau những sự kiện xảy ra trong Justice League – Liên Minh Công Lý.',
    trailer: 'https://www.youtube.com/watch?v=iMbzy-_LPqw',
    disable: false
}
];
