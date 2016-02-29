const models = require('../models');

module.exports = function (decoded, request, callback) {
  if (!models.User.findById(decoded.id)) {
    return callback(null, false);
  }
  else {
    return callback(null, true);
  }
};
