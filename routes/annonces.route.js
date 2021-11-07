module.exports = (express, controller) => {
    const router = express.Router();

    router.get('/', controller.getAll);

    router.get('/:id', controller.getOne);

    // router.post('/', controller.create);

    // router.put('/:id', controller.update);

    // router.delete('/:id', controller.delete);

    return router;
};


