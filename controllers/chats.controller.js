module.exports = (repository) => ({
 async create(req, res) {
    await repository.createChat().then((post) =>
      {
        res.status(200).send(post)

      })
      .catch((err) =>
      {
        res.status(500).send(err)
      });
    },
});