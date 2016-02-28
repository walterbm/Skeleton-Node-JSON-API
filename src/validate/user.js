'use strict';
const Joi = require('joi');

module.exports = {
  index: {},
  show: {
    params: {
      user_id: Joi.string().alphanum().required()
    }
  },
  create: {
    params: {},
    payload: {
      first_name: Joi.string(),
      last_name: Joi.string(),
      institution: Joi.string(),
      wallet_address: Joi.string(),
      physical_address: Joi.string(),
      email: Joi.string().email()
    }
  },
  update: {
    params: {
      user_id: Joi.string().alphanum().required()
    },
    payload: {
      first_name: Joi.string(),
      last_name: Joi.string(),
      institution: Joi.string(),
      wallet_address: Joi.string(),
      physical_address: Joi.string(),
      email: Joi.string().email()
    }
  },
  delete: {
    params: {
      user_id: Joi.string().alphanum().required()
    }
  }
};
