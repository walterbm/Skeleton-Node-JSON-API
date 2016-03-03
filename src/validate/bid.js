'use strict';
const Joi = require('joi');

module.exports = {
  index: {
    headers: Joi.object({
         authorization: Joi.string().required()
    }).unknown(),
    params: {
      contract_id: Joi.string().alphanum().required()
    }
  },
  show: {
    headers: Joi.object({
         authorization: Joi.string().required()
    }).unknown(),
    params: {
      contract_id: Joi.string().alphanum().required(),
      bid_id: Joi.string().alphanum().required()
    }
  },
  create: {
    headers: Joi.object({
         authorization: Joi.string().required()
    }).unknown(),
    params: {
      contract_id: Joi.string().alphanum().required()
    },
    payload: {
      bidder_id: Joi.number(),
      seller_confirmed: Joi.boolean()
    }
  },
  update: {
    headers: Joi.object({
         authorization: Joi.string().required()
    }).unknown(),
    params: {
      contract_id: Joi.string().alphanum().required(),
      bid_id: Joi.string().alphanum().required()
    },
    payload: {
      bidder_id: Joi.number(),
      seller_confirmed: Joi.boolean()
    }
  },
  delete: {
    headers: Joi.object({
         authorization: Joi.string().required()
    }).unknown(),
    params: {
      contract_id: Joi.string().alphanum().required(),
      bid_id: Joi.string().alphanum().required()
    }
  }
};
