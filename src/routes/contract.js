'use strict';
const Schema = require('../validate/contract');
const Controller = require('../controllers/contract');

module.exports = [
  {
  	method: 'GET',
  	path: '/contracts/{contract_id}',
    config: {
      auth: 'jwt',
      handler: Controller.show,
      description: 'Get one Contract',
      notes: 'Returns the information for the contract matching the id in the route',
      tags: ['api'],
      validate: Schema.show
    }
  },
  {
  	method: 'GET',
  	path: '/contracts',
    config: {
      auth: 'jwt',
      handler: Controller.index,
      description: 'Get all Contracts',
      notes: 'Returns an index view of all contracts',
      tags: ['api'],
      validate: Schema.index
    }
  },
  {
  	method: 'POST',
  	path: '/contracts',
    config: {
      auth: 'jwt',
      handler: Controller.create,
      description: 'Create a new Contract',
      notes: 'Registers a new contract',
      tags: ['api'],
      validate: Schema.create
    }
  },
  {
  	method: 'PUT',
  	path: '/contracts/{contract_id}',
    config: {
      auth: 'jwt',
      handler: Controller.update,
      description: 'Updates a Contract',
      notes: 'Update a contract',
      tags: ['api'],
      validate: Schema.update
    }
  },
  {
  	method: 'DELETE',
  	path: '/contracts/{contract_id}',
    config: {
      auth: 'jwt',
      handler: Controller.destroy,
      description: 'Delete a Contract',
      notes: 'Remove a contract from the database',
      tags: ['api'],
      validate: Schema.delete
    }
  }
];
