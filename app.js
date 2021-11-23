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
const UsersRepository = require('./repositories/users.pg');
const AnnoncesRepository = require('./repositories/annonces.pg.js');
const ChatsRepository = require('./repositories/chats.pg.js');
const MessagesRepository = require('./repositories/messages.pg.js');
const GeolocalisationsRepository = require('./repositories/geolocalisations.pg');
const Spots_PublicationsRepository = require('./repositories/spots_publications.pg');

const usersController = require('./controllers/users.controller');
const geolocalisationsController = require('./controllers/geolocalisations.controller');
const spots_publicationsController = require('./controllers/spots_publications.controller');
const annoncesController = require('./controllers/annonces.controller');
const chatsController = require('./controllers/chats.controller');
const messagesController = require('./controllers/messages.controller');

const userRoutes = require('./routes/users.route');
const geolocalisationRoutes = require('./routes/geolocalisations.route');
const spot_publicationRoutes = require('./routes/spots_publications.route');
const annonceRoutes = require('./routes/annonces.route');
const chatRoutes = require('./routes/chats.route');
const messageRoutes = require('./routes/messages.route');

var swaggerUi = require('swagger-ui-express');
var swaggerDocument = require('./swagger.json');

const usersRepository = new UsersRepository();
const geolocalisationsRepository = new GeolocalisationsRepository();
const spots_publicationsRepository = new Spots_PublicationsRepository();
const annoncesRepository = new AnnoncesRepository();
const chatsRepository = new ChatsRepository();
const messagesRepository = new MessagesRepository();

io.on('connect', (socket) => {
  socket.on('disconnect', () => {
    // console.log(`a user is disconnected`.red.bold);
  });
  socket.on('SendMessage', ({ name, message, userId, chatId, recipientId }) => {
    console.log(`name: ${name} message: ${message} userId: ${userId} chatId: ${chatId} recipientId: ${recipientId}`)
    messagesRepository.createMessage({
      content: message,
      user_id: userId,
      chat_id: chatId,
      recipient_id: recipientId
    });
    io.emit('message', { name, message, userId, chatId, recipientId });
  });
  socket.on('sendLocation', ({ id, lat, lng }) => {
    usersRepository.updateLocation(id, { lat, lng })
    io.emit('location', { id, lat, lng });
  });
  socket.on('sendBlockLocation', ({ user_id, authorization, start_date, end_date }) => {
    geolocalisationsRepository.allowLoc({
      user_id,
      authorization,
      start_date,
      end_date
    });
    io.emit('hideLocation', { user_id, start_date, end_date });
  });
});

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
app.use('/spots_publications', spot_publicationRoutes(express, spots_publicationsController(spots_publicationsRepository)));
app.use('/annonces', annonceRoutes(express, annoncesController(annoncesRepository)));
app.use('/chats', chatRoutes(express, chatsController(chatsRepository)));
app.use('/messages', messageRoutes(express, messagesController(messagesRepository)));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


server.listen(port, () => {
  var desc = "Adresse du serveur: ";
  var adresse = ` http://localhost:${port}`.green.bold;
  console.log(`################################################################`.yellow.bold);
  console.log(desc + adresse);
  console.log(`################################################################`.yellow.bold);
});

module.exports = app;