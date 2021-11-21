'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TypeAds extends Model {
    static associate(models) {
      // HasOne
      
      TypeAds.hasOne(models.Ads_And_Type, {
        foreignKey: 'type_ad_id',
      });
    }
  };
  TypeAds.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'TypeAds',
  });
  return TypeAds;
};