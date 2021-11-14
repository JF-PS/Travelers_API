express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var path = require('path');
var app = express();
var port = 8000;
var http = require('http');
var cors = require('cors');
require('colors');

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

app.use(express.static('public'));

const server = http.createServer(app).listen(port, () => {
  var desc = "Adresse du serveur: ";
  var adresse = ` http://localhost:${port}`.green.bold;
  console.log(`################################################################`.yellow.bold);
  console.log(desc + adresse);
  console.log(`################################################################`.yellow.bold);
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());

app.use('/users', userRoutes(express, usersController(usersRepository)));
app.use('/geolocalisations', geolocalisationRoutes(express, geolocalisationsController(geolocalisationsRepository)));
app.use('/annonces', annonceRoutes(express, annoncesController(annoncesRepository)));



 module.exports = app;