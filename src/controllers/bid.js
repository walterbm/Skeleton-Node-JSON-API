const models = require('../models');
const _ = require('lodash');

module.exports = {
  index: function(request, reply) {
    models.Bid.findAll({ where: { contract_id: request.params.contract_id } })
      .then(function(bids) {
        return reply(bids).code(200);
      });
  },
  show: function(request, reply) {
    models.Bid.findOne({
        where: {
          id: request.params.bid_id,
          contract_id: request.params.contract_id
        },
        include: [ ]
      })
      .then(function(contract) {
        return reply(contract).code(200);
      });
  },
  create: function(request, reply) {
    models.Bid.create(_.merge({buyer_id: request.auth.credentials}, request.payload))
      .then(function(contract) {
        return reply(true).code(200);
      });
  },
  update: function(request, reply) {
    models.Bid.update(request.payload, {
      where: {
        id: request.params.bid_id,
        contract_id: request.params.contract_id
      }
     })
     .then(function() {
       return reply({updated: true}).code(200);
     });
  },
  destroy: function(request, reply) {
    models.Bid.destroy({
      where: {
        id: request.params.bid_id,
        contract_id: request.params.contract_id
      }
     })
     .then(function() {
       return reply({deleted: true}).code(200);
     });
  }
};
