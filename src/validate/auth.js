'use strict';
const Joi = require('joi');

module.exports = {
  login: {
    payload: {
      email: Joi.string().email(),
      password: Joi.string()
    }
  },
  logout: {}
};
