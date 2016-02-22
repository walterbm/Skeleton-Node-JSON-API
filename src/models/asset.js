'use strict';
module.exports = function(sequelize, DataTypes) {
  var Asset = sequelize.define('Asset', {
    type: DataTypes.STRING,
    current_price: DataTypes.INTEGER
  },
  {
    underscore: true
  },
  {
    classMethods: {
      associate: function(models) {
        Asset.hasMany(models.Contract);
      }
    }
  });
  return Asset;
};
