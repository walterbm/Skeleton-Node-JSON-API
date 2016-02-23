'use strict';

module.exports = [
  {
  	method: 'GET',
  	path: '/users/{user_id}',
		handler: function (request, reply) {
      return reply('user#show');
    }
  },
  {
  	method: 'GET',
  	path: '/users',
		handler: function (request, reply) {
      return reply('user#index');
    }
  },
  {
  	method: 'POST',
  	path: '/users',
    handler: function (request, reply) {
      return reply('user#new');
    }
  },
  {
  	method: 'PUT',
  	path: '/users/{user_id}',
    handler: function (request, reply) {
      return reply('user#update');
    }
  },
  {
  	method: 'DELETE',
  	path: '/users/{user_id}',
    handler: function (request, reply) {
      return reply('user#destroy');
    }
  }
];
