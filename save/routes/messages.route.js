module.exports = (express, controller) => {
  const router = express.Router();

  router.get('/:chat_id', controller.getChatById);
  router.get('/:user1/:user2', controller.getChatMessages);
  router.post('/', controller.create);

  return router;
};
