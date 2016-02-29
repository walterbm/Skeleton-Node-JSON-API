'use strict';
const Schema = require('../validate/user');
const Controller = require('../controllers/user');

module.exports = [
  {
  	method: 'GET',
  	path: '/users/{user_id}',
    config: {
      auth: 'jwt',
      handler: Controller.show,
      description: 'Get one User',
      notes: 'Returns the information for the user with id in the route',
      tags: ['api'],
      validate: Schema.show
    }
  },
  {
  	method: 'GET',
  	path: '/users',
    config: {
      auth: 'jwt',
      handler: Controller.index,
      description: 'Get all Users',
      notes: 'Returns an index view of all users',
      tags: ['api'],
      validate: Schema.index
    }
  },
  {
  	method: 'POST',
  	path: '/users',
    config: {
      auth: 'jwt',
      handler: Controller.create,
      description: 'Create a new User',
      notes: 'Registers a new user',
      tags: ['api'],
      validate: Schema.create
    }
  },
  {
  	method: 'PUT',
  	path: '/users/{user_id}',
    config: {
      auth: 'jwt',
      handler:Controller.update,
      description: 'Updates a User',
      notes: 'Update a user\'s information',
      tags: ['api'],
      validate: Schema.update
    }
  },
  {
  	method: 'DELETE',
  	path: '/users/{user_id}',
    config: {
      auth: 'jwt',
      handler: Controller.destroy,
      description: 'Delete a User',
      notes: 'Remove a user from the database',
      tags: ['api'],
      validate: Schema.delete
    }
  }
];
