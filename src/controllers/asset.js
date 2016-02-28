const models = require('../models');

module.exports = {
  index: function(request, reply) {
    models.Asset.findAll()
      .then(function(assets) {
        return reply(assets).code(200);
      });
  },
  show: function(request, reply) {
    models.Asset.findById(request.params.asset_id, {
        include: [ ]
      })
      .then(function(asset) {
        return reply(asset).code(200);
      });
  },
  create: function(request, reply) {
    models.Asset.create(request.payload)
      .then(function(asset) {
        return reply(asset).code(200);
      });
  },
  update: function(request, reply) {
    models.Asset.update(request.payload, {
      where: { id: request.params.asset_id }
     })
     .then(function() {
       return reply({updated: true}).code(200);
     });
  },
  destroy: function(request, reply) {
    models.Asset.destroy({
      where: { id: request.params.asset_id }
     })
     .then(function() {
       return reply({deleted: true}).code(200);
     });
  }
};
