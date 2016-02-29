'use strict';
const Joi = require('joi');

module.exports = {
  index: {
    headers: Joi.object({
         authorization: Joi.string().required()
    }).unknown()
  },
  show: {
    params: {
      user_id: Joi.string().alphanum().required()
    },
    headers: Joi.object({
         authorization: Joi.string().required()
    }).unknown()
  },
  create: {
    params: {},
    headers: Joi.object({
         authorization: Joi.string().required()
    }).unknown(),
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
    headers: Joi.object({
         authorization: Joi.string().required()
    }).unknown(),
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
    },
    headers: Joi.object({
         authorization: Joi.string().required()
    }).unknown(),
  }
};
