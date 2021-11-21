module.exports = (repository) => ({

  async getTravelersAround(req, res) {
    await repository.getTravelersAround(req.params.lat, req.params.lng).then((travelers) => {
      if (travelers) {
          res.status(200).json(travelers);
      } 
      else 
      {
          res.status(404).json({message: 'No valid entry found for provided ID'});
      }
    })
    .catch(err => 
    {
      res.status(500).json({error: err});
    });
  },

  async updateLocation(req, res) {
    await repository.updateLocation(req.params.id, req.body).then((user) =>
    { 
      res.status(200).send(user)
    })
    .catch((err) => 
    {
      res.status(500).send(err)
    });
  },

  async signIn(req, res) {
    await repository.signIn(req.body).then((result) =>
    { 
      res.status(201).send(result)
    })
    .catch((err) => 
    {
      res.status(500).send(err)
    });
  },

  async signUp(req, res) {
    await repository.signUp(req.body).then((result) =>
    { 
      res.status(201).send(result)
    })
    .catch((err) => 
    {
      res.status(500).send(err)
    });
  },

  async deleteUser(req, res) {
    await repository.deleteUser(req.params.id).then((result) =>
    { 
      res.status(201).send(result)
    })
  . catch((err) =>
    {
      res.status(500).send(err)
    });
  },

  async updateUser(req, res) {
    await repository.updateUser(req.params.id, req.body).then((result) =>
    { 
      res.status(200).send(result)
    })
    .catch((err) => 
    {
      res.status(500).send(err)
    });
  },

});
