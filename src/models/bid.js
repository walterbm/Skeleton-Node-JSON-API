'use strict';
module.exports = function(sequelize, DataTypes) {
  var Bid = sequelize.define('Bid', {
    bidder_id: DataTypes.INTEGER,
    contract_id: DataTypes.INTEGER,
    seller_confirmed: DataTypes.BOOLEAN
  },
  {
    underscore: true
  },
  {
    classMethods: {
      associate: function(models) {
        Bid.belongsTo(models.User,{foreignKey: 'bidder_id', as: 'bidder'});
        Bid.belongsTo(models.Contract);
      }
    }
  });
  return Bid;
};
