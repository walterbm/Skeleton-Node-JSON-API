'use strict';
const Schema = require('../validate/asset');
const Controller = require('../controllers/asset');

module.exports = [
  {
  	method: 'GET',
  	path: '/asset/{asset_id}',
    config: {
      handler: Controller.show,
      description: 'Get one Asset',
      notes: 'Returns the information for the asset matching the id in the route',
      tags: ['api'],
      validate: Schema.show
    }
  },
  {
  	method: 'GET',
  	path: '/asset',
    config: {
      handler: Controller.index,
      description: 'Get all Assets',
      notes: 'Returns an index view of all asset',
      tags: ['api'],
      validate: Schema.index
    }
  },
  {
  	method: 'POST',
  	path: '/asset',
    config: {
      handler: Controller.create,
      description: 'Create a new Asset',
      notes: 'Registers a new asset',
      tags: ['api'],
      validate: Schema.create
    }
  },
  {
  	method: 'PUT',
  	path: '/asset/{asset_id}',
    config: {
      handler: Controller.update,
      description: 'Updates a Asset',
      notes: 'Update a asset',
      tags: ['api'],
      validate: Schema.update
    }
  },
  {
  	method: 'DELETE',
  	path: '/asset/{asset_id}',
    config: {
      handler: Controller.destroy,
      description: 'Delete a Asset',
      notes: 'Remove a asset from the database',
      tags: ['api'],
      validate: Schema.delete
    }
  }
];
