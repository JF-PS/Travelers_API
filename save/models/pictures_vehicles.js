'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pictures_Vehicles extends Model {
    static associate(models) {
      Pictures_Vehicles.hasOne(models.Vehicles, {
        foreignKey: 'picture_id',
      });
    }
  };
  Pictures_Vehicles.init({
    source: DataTypes.TEXT,
    vehicle_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Pictures_Vehicles',
  });
  return Pictures_Vehicles;
};