module.exports = (express, controller) => {
    const router = express.Router();

    router.put("/allowloc", controller.allowLoc);

    return router;
};


