module.exports = (express, controller) => {
    const router = express.Router();

    router.post("/createspot", controller.createSpot);

    router.put('/:id', controller.updateLocation);

    router.delete("/deletespot_publication/:id", controller.deleteSpot_Publication);

    router.put("/updatespot_publication/:id", controller.updateSpot_Publication);

    return router;
};


