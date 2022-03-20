'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.bulkInsert('Users', [{
                name: 'John Doe',
                email: 'johndoe@email.com',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Johnny Cage',
                email: 'johnnycage@email.com',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});

    },

    async down(queryInterface, Sequelize) {

        await queryInterface.bulkDelete('Users', null, {});

    }
};