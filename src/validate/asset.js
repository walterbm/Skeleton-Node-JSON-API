'use strict';
const Joi = require('joi');

module.exports = {
  index: {
    headers: Joi.object({
         authorization: Joi.string().required()
    }).unknown()
  },
  show: {
    headers: Joi.object({
         authorization: Joi.string().required()
    }).unknown(),
    params: {
      asset_id: Joi.string().alphanum().required()
    }
  },
  create: {
    headers: Joi.object({
         authorization: Joi.string().required()
    }).unknown(),
    params: {},
    payload: {
      type: Joi.string(),
      current_price: Joi.number()
    }
  },
  update: {
    headers: Joi.object({
         authorization: Joi.string().required()
    }).unknown(),
    params: {
      asset_id: Joi.string().alphanum().required()
    },
    payload: {
      type: Joi.string(),
      current_price: Joi.number()
    }
  },
  delete: {
    headers: Joi.object({
         authorization: Joi.string().required()
    }).unknown(),
    params: {
      asset_id: Joi.string().alphanum().required()
    }
  }
};
