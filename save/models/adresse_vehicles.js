'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Adresse_Vehicles extends Model {
    static associate(models) {

      Adresse_Vehicles.hasOne(models.Ads, {
        foreignKey: 'adresse_id',
      });
      Adresse_Vehicles.belongsTo(models.Users, {
        foreignKey: 'user_id',
        as: 'user'
      });

    }
  };
  Adresse_Vehicles.init({
    user_id: DataTypes.INTEGER,
    adresse: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Adresse_Vehicles',
  });
  return Adresse_Vehicles;
};