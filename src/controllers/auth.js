'use strict';
const models = require('../models');
const JWT = require('jsonwebtoken');

module.exports = {
  login: function(request, reply) {
    models.User.findOne({
      where: {
        email: request.payload.email
      }
    })
    .then(function(user) {
      let token = JWT.sign(user.id, process.env.SECRET_KEY);
      return reply({"Authorization": token}).code(200);
    });
  },
  logout: function(request, reply) {
    return reply(asset).code(200);
  }
};
