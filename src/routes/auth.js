'use strict';
const Schema = require('../validate/auth');
const Controller = require('../controllers/auth');

module.exports = [
  {
  	method: 'POST',
  	path: '/login',
    config: {
      auth: false,
      handler: Controller.login,
      description: 'Login a user',
      notes: 'Returns a JWT Bearer authentication token',
      tags: ['api'],
      validate: Schema.login
    }
  },
  {
  	method: 'POST',
  	path: '/logout',
    config: {
      auth: false,
      handler: Controller.logout,
      description: 'Log out a user',
      notes: 'Deletes the user\'s JWT authentication token',
      tags: ['api'],
      validate: Schema.logout
    }
  },
];
