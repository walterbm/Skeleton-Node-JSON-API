'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: function (queryInterface, Sequelize) {

      return queryInterface.bulkInsert('Users', [
        {
          first_name: "Walter",
          last_name: "Beller-Morales",
          institution: "Bank of Maryland",
          wallet_address: "fake-wallet-address",
          physical_address: "438 Fake Ave",
          email: "walter@slashquo.com",
          encrypted_password: bcrypt.hashSync('password', 8),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          first_name: "Ryan",
          last_name: "Yun",
          institution: "Union Bank",
          wallet_address: "fake-wallet-address",
          physical_address: "438 Fake Ave",
          email: "ryan@slashquo.com",
          encrypted_password: bcrypt.hashSync('password', 8),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          first_name: "Dylan",
          last_name: "Straughan",
          institution: "Dickinson Credit Union",
          wallet_address: "fake-wallet-address",
          physical_address: "438 Fake Ave",
          email: "dylan@slashquo.com",
          encrypted_password: bcrypt.hashSync('password', 8),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          first_name: "David",
          last_name: "Bowie",
          institution: "Blackstar",
          wallet_address: "fake-wallet-address",
          physical_address: "438 Fake Ave",
          email: "ziggy@stardust.com",
          encrypted_password: bcrypt.hashSync('password', 8),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          first_name: "Jay",
          last_name: "Z",
          institution: "Barclays",
          wallet_address: "fake-wallet-address",
          physical_address: "438 Fake Ave",
          email: "hova@slashquo.com",
          encrypted_password: bcrypt.hashSync('password', 8),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          first_name: "Taylor",
          last_name: "Swift",
          institution: "Big Machine",
          wallet_address: "fake-wallet-address",
          physical_address: "438 Fake Ave",
          email: "tswift@slashquo.com",
          encrypted_password: bcrypt.hashSync('password', 8),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          first_name: "Casey",
          last_name: "Neistat",
          institution: "Chase",
          wallet_address: "fake-wallet-address",
          physical_address: "438 Fake Ave",
          email: "casey@slashquo.com",
          encrypted_password: bcrypt.hashSync('password', 8),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          first_name: "Elon",
          last_name: "Musk",
          institution: "Paypal",
          wallet_address: "fake-wallet-address",
          physical_address: "438 Fake Ave",
          email: "musk@everything.com",
          encrypted_password: bcrypt.hashSync('password', 8),
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ], {});
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('Users', null, {});
  }
};
