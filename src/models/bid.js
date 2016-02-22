'use strict';
module.exports = function(sequelize, DataTypes) {
  var Bid = sequelize.define('Bid', {
    bidder_id: DataTypes.INTEGER,
    contract_id: DataTypes.INTEGER,
    seller_confirmed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  },
  {
    indexes: [{
      unique: true, fields: ['bidder_id,','contract_id']
    }]
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
