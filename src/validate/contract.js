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
      contract_id: Joi.string().alphanum().required()
    }
  },
  create: {
    headers: Joi.object({
         authorization: Joi.string().required()
    }).unknown(),
    params: {},
    payload: {
      address: Joi.string(),
      premium: Joi.number(),
      strike_price: Joi.number(),
      quantity: Joi.number(),
      status: Joi.string(),
      start_time: Joi.date(),
      end_time: Joi.date(),
      buyer_confirmed: Joi.boolean(),
      full_text: Joi.string(),
      buyer_id: Joi.number(),
      seller_id: Joi.number(),
      asset_id: Joi.number(),
    }
  },
  update: {
    headers: Joi.object({
         authorization: Joi.string().required()
    }).unknown(),
    params: {
      contract_id: Joi.string().alphanum().required()
    },
    payload: {
      address: Joi.string(),
      premium: Joi.number(),
      strike_price: Joi.number(),
      quantity: Joi.number(),
      status: Joi.string(),
      start_time: Joi.date(),
      end_time: Joi.date(),
      buyer_confirmed: Joi.boolean(),
      full_text: Joi.string(),
      buyer_id: Joi.number(),
      seller_id: Joi.number(),
      asset_id: Joi.number(),
    }
  },
  delete: {
    headers: Joi.object({
         authorization: Joi.string().required()
    }).unknown(),
    params: {
      contract_id: Joi.string().alphanum().required()
    }
  }
};
