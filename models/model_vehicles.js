'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Model_Vehicles extends Model {
    static associate(models) {
      Model_Vehicles.hasOne(models.Vehicles, {
        foreignKey: 'model_id',
      });
    }
  };
  Model_Vehicles.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Model_Vehicles',
  });
  return Model_Vehicles;
};