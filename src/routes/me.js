'use strict';
const Schema = require('../validate/me');
const Controller = require('../controllers/me');

module.exports = [
  {
  	method: 'GET',
  	path: '/me',
    config: {
      auth: 'jwt',
      handler: Controller.show,
      description: 'Get current User',
      notes: 'Returns the information for the currently signed-in user',
      tags: ['api'],
      validate: Schema.show
    }
  }
];
