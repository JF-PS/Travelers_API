'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Geolocalisations extends Model {
    static associate(models) {
      Geolocalisations.belongsTo(models.Users, {
        foreignKey: 'user_id',
        as: 'user',
        allowNull: true,
        constraints: false
      });
    }
  };
  Geolocalisations.init({
    authorization: DataTypes.BOOLEAN,
    start_date: { type: DataTypes.DATE, allowNull: true },
    end_date: { type: DataTypes.DATE, allowNull: true },
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Geolocalisations',
  });
  return Geolocalisations;
};