const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const cors = require('cors');
require('colors');

const app = express();
const server = http.createServer(app);
const io = socketio(server);
const port = process.env.PORT || 8000;

app.use(cors());

io.on('connect', (socket) => {

  socket.on('sendMessage', (message) => {
    io.emit('message', message);
  });

  socket.on('disconnect', () => {
    console.log(" ================================================ ")
    console.log(" USER IS DISCONNECT ")
  });

  socket.on('sendLocation', ({ id, lat, lng }) => {
    io.emit('location', { id, lat, lng });
  });

});

const UsersRepository = require('./repositories/users.pg');
const AnnoncesRepository = require('./repositories/annonces.pg.js');
const GeolocalisationsRepository = require('./repositories/geolocalisations.pg');

const usersController = require('./controllers/users.controller');
const geolocalisationsController = require('./controllers/geolocalisations.controller');
const annoncesController = require('./controllers/annonces.controller');

const userRoutes = require('./routes/users.route');
const geolocalisationRoutes = require('./routes/geolocalisations.route');
const annonceRoutes = require('./routes/annonces.route');

const usersRepository = new UsersRepository();
const geolocalisationsRepository = new GeolocalisationsRepository();
const annoncesRepository = new AnnoncesRepository();

const cookieParser = require('cookie-parser');
const logger = require('morgan');
const path = require('path');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/users', userRoutes(express, usersController(usersRepository)));
app.use('/geolocalisations', geolocalisationRoutes(express, geolocalisationsController(geolocalisationsRepository)));
app.use('/annonces', annonceRoutes(express, annoncesController(annoncesRepository)));

server.listen(port, () => {
  var desc = "Adresse du serveur: ";
  var adresse = ` http://localhost:${port}`.green.bold;
  console.log(`################################################################`.yellow.bold);
  console.log(desc + adresse);
  console.log(`################################################################`.yellow.bold);
});
module.exports = app;