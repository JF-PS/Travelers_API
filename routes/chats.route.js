module.exports = (express, controller) => {
  const router = express.Router();

  router.post('/', controller.create);

  return router;
};
