'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.bulkInsert('Contracts', [
        {
          buyer_id: 1,
          seller_id: 2,
          asset_id: 1,
          strike_price: 40000,
          address: "fake_contract_address",
          premium: 12300,
          quantity: 44,
          status: "Confirmed",
          start_time: new Date("2015-01-01T14:00:00"),
          end_time: new Date("2015-04-01T14:00:00"),
          buyer_confirmed: true,
          full_text: "This is the full contract for contract number 1.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          buyer_id: 3,
          seller_id: 4,
          asset_id: 3,
          strike_price: 2999,
          address: "fake_contract_address",
          premium: 9999,
          quantity: 77,
          status: "Secured",
          start_time: new Date("2015-01-01T14:00:00"),
          end_time: new Date("2015-03-01T14:00:00"),
          buyer_confirmed: false,
          full_text: "This is the full contract for contract number 2.",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {});
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('Contracts', null, {});
  }
};
