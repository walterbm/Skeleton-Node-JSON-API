'use strict';
module.exports = function(sequelize, DataTypes) {
  var Asset = sequelize.define('Asset', {
    type: DataTypes.STRING,
    current_price: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Asset;
};