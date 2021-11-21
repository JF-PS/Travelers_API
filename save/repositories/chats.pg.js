const Chat = require('../models').Chats;

module.exports = class ChatsRepository {

  async createChat() {
    return await new Promise((resolve, reject) => {
      Chat.create().then((chat) => {
        resolve(chat);
      })
        .catch((err) => {
          reject(err);
        });
    });
  }
}
