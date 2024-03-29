'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Messages extends Model {
    static associate(models) {
      Messages.belongsTo(models.Users, {
        foreignKey: 'user_id',
        as: 'user'
      });
      Messages.belongsTo(models.Chats, {
        foreignKey: 'chat_id',
        as: 'chat'
      });
    }
  };
  Messages.init({
    chat_id: DataTypes.INTEGER,
    content: DataTypes.TEXT,
    user_id: DataTypes.INTEGER,
    recipient_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Messages',
  });
  return Messages;
};