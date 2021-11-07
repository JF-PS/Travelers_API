'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Spots_Publications extends Model {
    static associate(models) {
      
      Spots_Publications.belongsTo(models.Users, {
        foreignKey: 'user_id',
        as: 'user'
      });

      Spots_Publications.hasOne(models.Spots_Favorites, {
        foreignKey: 'spot_id'
      });

      Spots_Publications.hasOne(models.Reviews, {
        foreignKey: 'spot_publication_id'
      });

    }
  };
  Spots_Publications.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    location: DataTypes.GEOGRAPHY('Point'),
    adresse: DataTypes.TEXT,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Spots_Publications',
  });
  return Spots_Publications;
};