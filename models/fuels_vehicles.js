'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Fuels_Vehicles extends Model {
    static associate(models) {
      Fuels_Vehicles.hasOne(models.Vehicles, {
        foreignKey: 'fuel_id',
      });
    }
  };
  Fuels_Vehicles.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Fuels_Vehicles',
  });
  return Fuels_Vehicles;
};