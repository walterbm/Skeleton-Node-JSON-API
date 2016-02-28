const models = require('../models');

module.exports = {
  index: function(request, reply) {
    models.Contract.findAll()
      .then(function(contracts) {
        return reply(contracts).code(200);
      });
  },
  show: function(request, reply) {
    models.Contract.findById(request.params.contract_id, {
        include: [ ]
      })
      .then(function(contract) {
        return reply(contract).code(200);
      });
  },
  create: function(request, reply) {
    models.Contract.create(request.payload)
      .then(function(contract) {
        return reply(contract).code(200);
      });
  },
  update: function(request, reply) {
    models.Contract.update(request.payload, {
      where: { id: request.params.contract_id }
     })
     .then(function() {
       return reply({updated: true}).code(200);
     });
  },
  destroy: function(request, reply) {
    models.Contract.destroy({
      where: { id: request.params.contract_id }
     })
     .then(function() {
       return reply({deleted: true}).code(200);
     });
  }
};
