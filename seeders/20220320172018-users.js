'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.bulkInsert('Users', [{
                name: 'Admin Test',
                email: 'admin@test.com',
                id_role: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'User Test',
                email: 'usere@test.com',
                id_role: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});

    },

    async down(queryInterface, Sequelize) {

        await queryInterface.bulkDelete('Users', null, {});

    }
};