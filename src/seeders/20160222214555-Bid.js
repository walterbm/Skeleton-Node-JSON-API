'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.bulkInsert('Bids', [
        {
          bidder_id: 4,
          contract_id: 1,
          seller_confirmed: false,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          bidder_id: 2,
          contract_id: 1,
          seller_confirmed: true,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          bidder_id: 5,
          contract_id: 2,
          seller_confirmed: false,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          bidder_id: 4,
          contract_id: 2,
          seller_confirmed: true,
          created_at: new Date(),
          updated_at: new Date()
        }
      ], {});
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('Bids', null, {});
  }
};
