const Chat = require("../models").Chats;
const Message = require("../models").Messages;
const User = require("../models").Users;
const { Op } = require("sequelize");

module.exports = class ChatsRepository {
  async createChat() {
    return await new Promise((resolve, reject) => {
      Chat.create()
        .then((chat) => {
          resolve(chat);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  async getUserChats(id) {
    return await new Promise((resolve, reject) => {
      Chat.findAll({
        include: [
          {
            model: Message,
            as: "message",
            limit: 1,
            where: {
              recipient_id: id,
            },
            include: [{ model: User, as: "user" }],
          },
        ],
        order: [["createdAt", "ASC"]],
      })
        .then((chats) => {
          resolve(chats);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
};
