'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Movies extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Movies.init({
        image: DataTypes.STRING,
        title: DataTypes.STRING,
        calificaton: DataTypes.INTEGER,
        character_id: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Movies',
    });
    return Movies;
};