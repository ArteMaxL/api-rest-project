'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkInsert('Characters', [{
        image:'https://static.wikia.nocookie.net/disney/images/4/44/Rayo_McQueen.png/revision/latest?cb=20140204155911&path-prefix=es',
        name: 'Rayo McQueen',
        age: 22,
        weight: 33,
        history: 'es una prometedora figura del automovilismo, que está a punto de conseguir su primera Copa Pistón, aun siendo un novato. ',
        moviesOrSeries: 'cars'
      },{
        image:'https://static.wikia.nocookie.net/disney/images/e/ef/Sulley.png/revision/latest?cb=20130302192551&path-prefix=es',
        name: 'James P. Sullivan',
        age: 33,
        weight: 87,
        history: 'un monstruo de pelo azul de más de 2 m, posee el récord como Asustador de Niños. Mike, un vivaraz monstruo verde de un solo ojo, es su Ayudante Asustador y su mejor amigo.',
        moviesOrSeries: 'Monsters INC'

      },{
        image:'https://static.wikia.nocookie.net/disney/images/a/ab/Woody_4.png/revision/latest?cb=20161125135228&path-prefix=es',
        name: 'Woody',
        age: 30,
        weight: 12,
        history: ' Woody, el juguete preferido de Andy, llama a la calma y envía a un grupo de soldados verdes a la fiesta de cumpleaños para que nombren los regalos que reciba Andy.',
        moviesOrSeries: 'Toy Story'


      }
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
