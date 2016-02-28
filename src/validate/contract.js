'use strict';
const Joi = require('joi');

module.exports = {
  index: {},
  show: {
    params: {
      contract_id: Joi.string().alphanum().required()
    }
  },
  create: {
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
      full_text: Joi.string()
    }
  },
  update: {
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
      full_text: Joi.string()
    }
  },
  delete: {
    params: {
      contract_id: Joi.string().alphanum().required()
    }
  }
};
