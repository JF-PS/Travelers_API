'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ads_And_Type extends Model {
    static associate(models) {
      // BelongsTo

      Ads_And_Type.belongsTo(models.Ads, {
        foreignKey: 'ad_id',
        as: 'ad'
      });
      Ads_And_Type.belongsTo(models.TypeAds, {
        foreignKey: 'type_ad_id',
        as: 'type_ad'
      });

    }
  };
  Ads_And_Type.init({
    days_number: DataTypes.INTEGER,
    ad_id: DataTypes.INTEGER,
    type_ad_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Ads_And_Type',
  });
  return Ads_And_Type;
};