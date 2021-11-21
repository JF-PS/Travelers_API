'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reviews extends Model {
    static associate(models) {
      // BelongTo :

      Reviews.belongsTo(models.Users, {
        foreignKey: 'user_id',
        as: 'user'
      });
      Reviews.belongsTo(models.Spots_Publications, {
        foreignKey: 'spot_publication_id',
        as: 'spot'
      });
      
    }
  };
  Reviews.init({
    user_id: DataTypes.INTEGER,
    spot_publication_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Reviews',
  });
  return Reviews;
};