'use strict';
const Joi = require('joi');

module.exports = {
  index: {
    params: {
      contract_id: Joi.string().alphanum().required()
    }
  },
  show: {
    params: {
      contract_id: Joi.string().alphanum().required(),
      bid_id: Joi.string().alphanum().required()
    }
  },
  create: {
    params: {
      contract_id: Joi.string().alphanum().required()
    },
    payload: {
      bidder_id: Joi.number(),
      seller_confirmed: Joi.boolean()
    }
  },
  update: {
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
    params: {
      contract_id: Joi.string().alphanum().required(),
      bid_id: Joi.string().alphanum().required()
    }
  }
};
