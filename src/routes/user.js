'use strict';

module.exports = [
  {
  	method: 'GET',
  	path: '/users/{user_id}',
    config: {
      handler: function (request, reply) {
        return reply('user#show');
      },
      description: 'Get one Users',
      notes: 'Returns the information for the user with id in the route',
      tags: ['api'],
      validate: {}
    }
  },
  {
  	method: 'GET',
  	path: '/users',
    config: {
      handler: function (request, reply) {
        return reply('user#index');
      },
      description: 'Get all Users',
      notes: 'Returns an index view of all users',
      tags: ['api'],
      validate: {}
    }
  },
  {
  	method: 'POST',
  	path: '/users',
    config: {
      handler: function (request, reply) {
        return reply('user#new');
      },
      description: 'Create a new User',
      notes: 'Registers a new user',
      tags: ['api'],
      validate: {}
    }
  },
  {
  	method: 'PUT',
  	path: '/users/{user_id}',
    config: {
      handler: function (request, reply) {
        return reply('user#update');
      },
      description: 'Updates a User',
      notes: 'Update user information',
      tags: ['api'],
      validate: {}
    }
  },
  {
  	method: 'DELETE',
  	path: '/users/{user_id}',
    config: {
      handler: function (request, reply) {
        return reply('user#destroy');
      },
      description: 'Delete a User',
      notes: 'Remove a user from the database',
      tags: ['api'],
      validate: {}
    }
  }
];
