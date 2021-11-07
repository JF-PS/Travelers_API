'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categories_Vehicles extends Model {
    static associate(models) {
      Categories_Vehicles.hasOne(models.Vehicles, {
        foreignKey: 'category_id',
      });
    }
  };
  Categories_Vehicles.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Categories_Vehicles',
  });
  return Categories_Vehicles;
};