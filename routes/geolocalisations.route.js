module.exports = (express, controller) => {
    const router = express.Router();

    router.post("/allowloc", controller.allowLoc);

    return router;
};


