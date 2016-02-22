'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    institution: DataTypes.STRING,
    physical_address: DataTypes.STRING,
    wallet_address: DataTypes.STRING,
    email: DataTypes.STRING,
    encrypted_password: DataTypes.STRING
  },
  {
    underscore: true
  },
  {
    classMethods: {
      associate: function(models) {
        User.hasMany(models.Contract, {foreignKey: 'seller_id', as: 'sell_contracts'});
        User.hasMany(models.Contract, {foreignKey: 'buyer_id', as: 'buy_contracts'});
        User.hasMany(models.Bid, {foreignKey: 'bidder_id'});
      }
    }
  });
  return User;
};
