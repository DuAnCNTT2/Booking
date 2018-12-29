const express = require('express');
const bodyParser = require('body-parser');
// const cors = require('cors');

const { mongoose } = require('./db.js');
var userController = require('./controllers/userController.js');
var theaterController = require('./controllers/theaterController');
var movieController = require('./controllers/movieController');
var roomController = require('./controllers/roomController');
var showtimeController = require('./controllers/showtimeController');
var bookingController = require('./controllers/bookingController');

var app = express();
app.use(bodyParser.json());
// app.use(cors({ origin: 'http://localhost:4200' }));

app.listen(3000, () => console.log('Server được khởi động tại port : 3000'));

app.use('/users', userController);
app.use('/theaters', theaterController);
app.use('/movies', movieController);
app.use('/rooms', roomController);
app.use('/showtimes', showtimeController);
app.use('/bookings', bookingController);