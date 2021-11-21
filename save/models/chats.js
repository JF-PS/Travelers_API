'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Chats extends Model {
    static associate(models) {
      
      Chats.hasMany(models.Messages, {
        foreignKey: 'chat_id'
      });

    }
  };
  Chats.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false }
  }, {
    sequelize,
    modelName: 'Chats',
  });
  return Chats;
};