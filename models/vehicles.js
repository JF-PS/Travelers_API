'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vehicles extends Model {
    static associate(models) {
      // HasOne

      Vehicles.hasOne(models.Ads, {
        foreignKey: 'vehicle_id',
        constraints: false
      });
      Vehicles.hasOne(models.Pictures_Vehicles, {
        foreignKey: 'vehicle_id',
        allowNull: true,
        constraints: false,
      });

      // BelongTo

      Vehicles.belongsTo(models.Model_Vehicles, {
        foreignKey: 'model_id',
        as: 'model'
      });
      Vehicles.belongsTo(models.Pictures_Vehicles, {
        foreignKey: 'picture_id',
        as: 'picture'
      });
      Vehicles.belongsTo(models.Horses_Vehicles, {
        foreignKey: 'horses_vehicles_id',
        as: 'horses_vehicles'
      });
      Vehicles.belongsTo(models.Categories_Vehicles, {
        foreignKey: 'category_id',
        as: 'category'
      });
      Vehicles.belongsTo(models.Under_Categories_Vehicles, {
        foreignKey: 'under_category_id',
        as: 'under_category'
      });
      Vehicles.belongsTo(models.Brandes_Vehicles, {
        foreignKey: 'brand_id',
        as: 'brand'
      });
      Vehicles.belongsTo(models.Fuels_Vehicles, {
        foreignKey: 'fuel_id',
        as: 'fuel'
      });

    }
  };
  Vehicles.init({
    category_id: DataTypes.INTEGER,
    under_category_id: DataTypes.INTEGER,
    brand_id: DataTypes.INTEGER,
    model_id: DataTypes.INTEGER,
    fuel_id: DataTypes.INTEGER,
    horses_vehicles_id: DataTypes.INTEGER,
    picture_id: DataTypes.INTEGER,
    price: DataTypes.DECIMAL,
    kilometer: DataTypes.DECIMAL,
    date_creation: DataTypes.DATE,
    date_circulation: DataTypes.DATE,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Vehicles',
  });
  return Vehicles;
};