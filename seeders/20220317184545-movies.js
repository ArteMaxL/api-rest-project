'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.bulkInsert('Movies', [{
                image: 'https://static.wikia.nocookie.net/disney/images/a/ab/Woody_4.png/revision/latest?cb=20161125135228&path-prefix=es',
                title: 'Toy Story',
                calificaton: 5,
                createdAt: new Date(),
                updatedAt: new Date(),
                character_id: 1 //FK of Characters. Check ER diagrams.
            },
            {
                image: 'https://static.wikia.nocookie.net/disney/images/4/44/Rayo_McQueen.png/revision/latest?cb=20140204155911&path-prefix=es',
                title: 'Cars',
                calificaton: 5,
                createdAt: new Date(),
                updatedAt: new Date(),
                character_id: 2 //FK of Characters. Check ER diagrams.

            }, {
                image: 'https://static.wikia.nocookie.net/disney/images/e/ef/Sulley.png/revision/latest?cb=20130302192551&path-prefix=es',
                title: 'Monsters, Inc.',
                calificaton: 5,
                createdAt: new Date(),
                updatedAt: new Date(),
                character_id: 3 //FK of Characters. Check ER diagrams.
            }
        ], {});

    },

    async down(queryInterface, Sequelize) {

        await queryInterface.bulkDelete('Movies', null, {});
    }
};