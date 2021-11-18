module.exports = (repository) => ({
  
    async createSpot(req, res) {
      await repository.createSpot(req.body).then((result) =>
      { 
        res.status(201).send(result)
      })
      .catch((err) => 
      {
        res.status(500).send(err)
      });
    },

    async updateLocation(req, res) {
      await repository.updateLocation(req.params.id, req.body).then((spot_publication) =>
      { 
        res.status(200).send(spot_publication)
      })
      .catch((err) => 
      {
        res.status(500).send(err)
      });
    },

    async deleteSpot_Publication(req, res) {
      await repository.deleteSpot_Publication(req.params.id).then((result) =>
      { 
        res.status(201).send(result)
      })
    . catch((err) =>
      {
        res.status(500).send(err)
      });
    },

    async updateSpot_Publication(req, res) {
      await repository.updateSpot_Publication(req.params.id, req.body).then((result) =>
      { 
        res.status(200).send(result)
      })
      .catch((err) => 
      {
        res.status(500).send(err)
      });
    },
  
  });
  