'use strict';
const Schema = require('../validate/bid');
const Controller = require('../controllers/bid');

module.exports = [
  {
  	method: 'GET',
  	path: '/contracts/{contract_id}/bids/{bid_id}',
    config: {
      handler: Controller.show,
      description: 'Get one Bid',
      notes: 'Returns the bid for matching contract_id and bid_id',
      tags: ['api'],
      validate: Schema.show
    }
  },
  {
  	method: 'GET',
  	path: '/contracts/{contract_id}/bids',
    config: {
      handler: Controller.index,
      description: 'Get all Bids for a contract',
      notes: 'Returns an all the bids on a particular contract',
      tags: ['api'],
      validate: Schema.index
    }
  },
  {
  	method: 'POST',
  	path: '/contracts/{contract_id}/bids',
    config: {
      handler: Controller.create,
      description: 'Create a new Bid on the contract',
      notes: 'Adds a new Bid for the matching contract_id',
      tags: ['api'],
      validate: Schema.create
    }
  },
  {
  	method: 'PUT',
  	path: '/contracts/{contract_id}/bids/{bid_id}',
    config: {
      handler:Controller.update,
      description: 'Updates a Bid on the contract',
      notes: 'Update a Bid for the matching contract_id',
      tags: ['api'],
      validate: Schema.update
    }
  },
  {
  	method: 'DELETE',
  	path: '/contracts/{contract_id}/bids/{bid_id}',
    config: {
      handler: Controller.destroy,
      description: 'Delete a Bid on the contract',
      notes: 'Remove a Bid from the matching contract_id',
      tags: ['api'],
      validate: Schema.delete
    }
  }
];
