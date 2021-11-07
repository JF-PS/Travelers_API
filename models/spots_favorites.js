'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Spots_Favorites extends Model {
    static associate(models) {

      Spots_Favorites.belongsTo(models.Users, {
        foreignKey: 'user_id',
        as: 'user'
      });
      Spots_Favorites.belongsTo(models.Spots_Publications, {
        foreignKey: 'spot_id',
        as: 'spot'
      });

    }
  };
  Spots_Favorites.init({
    spot_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Spots_Favorites',
  });
  return Spots_Favorites;
};