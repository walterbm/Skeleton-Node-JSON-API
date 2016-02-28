'use strict';
module.exports = function(sequelize, DataTypes) {
  var Contract = sequelize.define('Contract', {
    buyer_id: DataTypes.INTEGER,
    seller_id: DataTypes.INTEGER,
    asset_id: DataTypes.INTEGER,
    address: DataTypes.STRING,
    premium: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    status: {
      type: DataTypes.STRING,
      defaultValue: 'Listed'
    },
    start_time: DataTypes.DATE,
    end_time: DataTypes.DATE,
    buyer_confimed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    full_text: DataTypes.TEXT,
    strike_price: DataTypes.INTEGER
  },
  {
    underscored: true
  },
  {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Contract;
};
