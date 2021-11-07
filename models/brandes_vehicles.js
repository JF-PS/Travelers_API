'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Brandes_Vehicles extends Model {
    static associate(models) {
      Brandes_Vehicles.hasOne(models.Vehicles, {
        foreignKey: 'brand_id',
      });
    }
  };
  Brandes_Vehicles.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Brandes_Vehicles',
  });
  return Brandes_Vehicles;
};