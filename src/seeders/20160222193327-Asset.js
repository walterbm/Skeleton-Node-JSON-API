'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

      return queryInterface.bulkInsert('Assets', [
        {
          type: "Bitcoin",
          current_price: 438190,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          type: "Gold Ounce",
          current_price: 1208510,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          type: "Crude Oil Barrel",
          current_price: 33.390,
          created_at: new Date(),
          updated_at: new Date()
        }
      ], {});
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('Assets', null, {});
  }
};
