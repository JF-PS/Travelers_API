module.exports = (repository) => ({
  async getUserChats(req, res) {
    await repository
      .getUserChats(req.params.id)
      .then((chats) => {
        if (chats) {
          res.status(200).json(chats);
        } else {
          res
            .status(404)
            .json({ message: "No valid entry found for provided ID" });
        }
      })
      .catch((err) => {
        res.status(500).json({ error: err });
      });
  },

  async create(req, res) {
    await repository
      .createChat()
      .then((post) => {
        res.status(200).send(post);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  },
});
