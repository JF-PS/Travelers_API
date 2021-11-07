'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Journeys extends Model {
    static associate(models) {
      Journeys.belongsTo(models.Users, {
        foreignKey: 'user_id',
        as: 'user'
      });

      Journeys.hasOne(models.Ads, {
        foreignKey: 'journey_id',
      });

    }
  };
  Journeys.init({
    user_id: DataTypes.INTEGER,
    location: DataTypes.GEOGRAPHY('Point')
  }, {
    sequelize,
    modelName: 'Journeys',
  });
  return Journeys;
};