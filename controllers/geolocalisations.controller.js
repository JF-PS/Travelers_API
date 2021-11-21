module.exports = (repository) => ({

    async allowLoc(req, res) {
      await repository.allowLoc(req.body).then((seetings) => {
        res.status(200).send(seetings)
      })
      .catch((err) => {
        res.status(500).send(err)
      });
    },
  
  });
  