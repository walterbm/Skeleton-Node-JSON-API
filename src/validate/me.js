'use strict';
const Joi = require('joi');

module.exports = {
  show: {
    params: {},
    headers: Joi.object({
         authorization: Joi.string().required()
    }).unknown()
  }
};
