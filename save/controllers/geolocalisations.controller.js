module.exports = (repository) => ({
  
    async allowLoc(req, res) {
      await repository.allowLoc(req.body).then((result) =>
      { 
        res.status(201).send(result)
      })
      .catch((err) => 
      {
        res.status(500).send(err)
      });
    },
  
  });
  