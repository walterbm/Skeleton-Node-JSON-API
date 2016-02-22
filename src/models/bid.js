'use strict';
module.exports = function(sequelize, DataTypes) {
  var Bid = sequelize.define('Bid', {
    bidder_id: DataTypes.INTEGER,
    contract_id: DataTypes.INTEGER,
    seller_confirmed: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Bid;
};