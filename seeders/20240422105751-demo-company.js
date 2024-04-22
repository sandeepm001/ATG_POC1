'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Companies', [
      {
        name: 'Company 1',
        country: 'Country 1',
        website: 'www.example1.com',
        email: 'example1@example.com',
        verified: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Company 2',
        country: 'Country 2',
        website: 'www.example2.com',
        email: 'example2@example.com',
        verified: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Company 3',
        country: 'Country 3',
        website: 'www.example3.com',
        email: 'example3@example.com',
        verified: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Companies', null, {});
  }
};

