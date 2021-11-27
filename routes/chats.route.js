module.exports = (express, controller) => {
  const router = express.Router();

  router.get("/:id", controller.getUserChats);
  router.post("/", controller.create);

  return router;
};
