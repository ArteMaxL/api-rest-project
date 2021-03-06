'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Characters extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Characters.init({
    image: DataTypes.STRING,
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    weight: DataTypes.INTEGER,
    history: DataTypes.STRING,
    moviesOrSeries: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Characters',
  });
  return Characters;
};