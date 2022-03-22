'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Genders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Genders.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    moviesOrSeries: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Genders',
  });
  return Genders;
};