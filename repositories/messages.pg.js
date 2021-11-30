const Message = require("../models").Messages;
const User = require("../models").Users;
const { Op } = require("sequelize");

module.exports = class MessagesRepository {
  async createMessage(object) {
    return await new Promise((resolve, reject) => {
      Message.create(object)
        .then((message) => {
          resolve(message);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  async getChatById(chat_id) {
    return await new Promise((resolve, reject) => {
      Message.findAll({ where: { chat_id }, order: [["createdAt", "ASC"]] })
        .then((messages) => {
          resolve(messages);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  async getChatMessages(user1, user2) {
    return await new Promise((resolve, reject) => {
      Message.findAll({
        include: [{ model: User, as: "user" }],
        where: {
          user_id: [user1, user2],
          [Op.or]: [
            {
              [Op.and]: [{ user_id: user1 }, { recipient_id: user2 }],
            },
            {
              [Op.and]: [{ user_id: user2 }, { recipient_id: user1 }],
            },
          ],
        },
        order: [["createdAt", "ASC"]],
      })
        .then((messages) => {
          resolve(messages);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
};
