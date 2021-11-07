'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Horses_Vehicles extends Model {
    static associate(models) {
      Horses_Vehicles.hasOne(models.Vehicles, {
        foreignKey: 'horses_vehicles_id',
      });
    }
  };
  Horses_Vehicles.init({
    horses_car_number: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Horses_Vehicles',
  });
  return Horses_Vehicles;
};