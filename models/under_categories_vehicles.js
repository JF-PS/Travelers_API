'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Under_Categories_Vehicles extends Model {
    static associate(models) {

      Under_Categories_Vehicles.hasOne(models.Vehicles, {
        foreignKey: 'under_category_id',
      });
      
    }
  };
  Under_Categories_Vehicles.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Under_Categories_Vehicles',
  });
  return Under_Categories_Vehicles;
};