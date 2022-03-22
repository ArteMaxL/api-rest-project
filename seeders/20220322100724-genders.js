'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkInsert('Genders', [{
        name: 'Comedy',
        image:'https://static.wikia.nocookie.net/disney/images/a/ab/Woody_4.png/revision/latest?cb=20161125135228&path-prefix=es',
        moviesOrSeries: 'Toy Story',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'Comedy',
        image:'https://static.wikia.nocookie.net/disney/images/a/ab/Woody_4.png/revision/latest?cb=20161125135228&path-prefix=es',
        moviesOrSeries: 'Cars',
        createdAt: new Date(),
        updatedAt: new Date()       
      },{
        name: 'Comedy',
        image:'https://static.wikia.nocookie.net/disney/images/a/ab/Woody_4.png/revision/latest?cb=20161125135228&path-prefix=es',
        moviesOrSeries: 'Monsters,Inc',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkDelete('Genders', null, {});
     
  }
};
