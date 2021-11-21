'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ads_Favorites extends Model {
    static associate(models) {

    }
  };
  Ads_Favorites.init({
    ad_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Ads_Favorites',
  });
  return Ads_Favorites;
};