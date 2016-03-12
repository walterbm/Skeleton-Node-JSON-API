'use strict';
const models = require('../models');
const JWT = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = {
  login: function(request, reply) {
    models.User.findOne({
      where: {
        email: request.payload.email,
      }
    })
    .then(function(user) {
      if (bcrypt.compareSync(request.payload.password, user.encrypted_password)) {
        let token = JWT.sign(user.id, process.env.SECRET_KEY);
        return reply({"Authorization": token}).code(200);
      } else {
        throw true;
      }
    })
    .catch(function(e){
      return reply({"Error": "Incorrect credentials"}).code(401);
    });
  },
  logout: function(request, reply) {
    return reply(asset).code(200);
  }
};
