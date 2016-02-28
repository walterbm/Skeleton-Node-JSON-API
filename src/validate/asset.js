'use strict';
const Joi = require('joi');

module.exports = {
  index: {},
  show: {
    params: {
      asset_id: Joi.string().alphanum().required()
    }
  },
  create: {
    params: {},
    payload: {
      type: Joi.string(),
      current_price: Joi.number()
    }
  },
  update: {
    params: {
      asset_id: Joi.string().alphanum().required()
    },
    payload: {
      type: Joi.string(),
      current_price: Joi.number()
    }
  },
  delete: {
    params: {
      asset_id: Joi.string().alphanum().required()
    }
  }
};
