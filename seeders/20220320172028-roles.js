'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.bulkInsert('Roles', [{
                name: 'Admin',
                description: 'Admin privileges can delete or create',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'User',
                description: 'User can only view requests without modifying them (only get)',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});

    },

    async down(queryInterface, Sequelize) {

        await queryInterface.bulkDelete('Roles', null, {});

    }
};