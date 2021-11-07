'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ads extends Model {
    static associate(models) {
      //BelongsTo

      Ads.belongsTo(models.Vehicles, {
        foreignKey: 'vehicle_id',
        as: 'vehicle'
      });
      Ads.belongsTo(models.Users, {
        foreignKey: 'user_id',
        as: 'user'
      });
      Ads.belongsTo(models.Journeys, {
        foreignKey: 'journey_id',
        as: 'journey'
      });

      //HasOne

      Ads.hasOne(models.Ads_Favorites, {
        foreignKey: 'ad_id',
      });
      Ads.hasOne(models.Ads_And_Type, {
        foreignKey: 'ad_id',
      });

    }
  };
  Ads.init({
    vehicle_id: DataTypes.INTEGER,
    adresse_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    title: DataTypes.TEXT,
    description: DataTypes.TEXT,
    journey_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Ads',
  });
  return Ads;
};