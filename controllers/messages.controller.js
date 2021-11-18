module.exports = (repository) => ({
  async create(req, res) {
    await repository.createMessage(req.body).then((message) => {
      res.status(200).send(message)
    })
      .catch((err) => {
        res.status(500).send(err)
      });
  },

  async getChatById(req, res) {
    await repository.getChatById(req.params.chat_id).then((messages) => {
      if (messages) {
        res.status(200).json(messages);
      }
      else {
        res.status(404).json({ message: 'No valid entry found for provided ID' });
      }
    })
      .catch(err => {
        res.status(500).json({ error: err });
      });
  },

  async getChatMessages(req, res) {
    await repository.getChatMessages(req.params.user1, req.params.user2).then((validation) => {
      if (validation) {
        res.status(200).json(validation);
      }
      else {
        res.status(404).json({ message: 'No valid entry found for provided ID' });
      }
    })
      .catch(err => {
        res.status(500).json({ error: err });
      });
  },
});