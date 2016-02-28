const models = require('../models');

module.exports = {
  index: function(request, reply) {
    models.User.findAll()
      .then(function(users) {
        return reply(users).code(200);
      });
  },
  show: function(request, reply) {
    models.User.findById(request.params.user_id)
      .then(function(user) {
        return reply(user).code(200);
      });
  },
  create: function(request, reply) {
    models.User.create(request.payload)
      .then(function(user) {
        return reply(user).code(200);
      });
  },
  update: function(request, reply) {
    models.User.update(request.payload, {
      where: { id: request.params.user_id }
     })
     .then(function() {
       return reply({updated: true}).code(200);
     });
  },
  destroy: function(request, reply) {
    models.User.destroy({
      where: { id: request.params.user_id }
     })
     .then(function() {
       return reply({deleted: true}).code(200);
     });
  }
};
