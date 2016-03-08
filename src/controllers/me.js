const models = require('../models');

module.exports = {
  show: function(request, reply) {
    models.User.findById(request.auth.credentials, {
        include: [
          { model: models.Bid, as: 'bids' },
          { model: models.Contract, as: 'sell_contracts' },
          { model: models.Contract, as: 'buy_contracts' }
        ]
      })
      .then(function(user) {
        return reply(user).code(200);
      });
  }
};
