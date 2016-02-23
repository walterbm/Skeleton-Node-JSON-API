'use strict';

// *** main dependencies *** //
const Hapi = require('hapi');
const models = require('./src/models');
const routes = require('./src/routes');

// *** create server *** //
const server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 8000
});

// *** routes *** //
server.route(routes);

// *** sync the database and start the server *** //
models.sequelize.sync().then(function() {
  server.start((err) => {

      if (err) { throw err; }

      console.log('Server running at:', server.info.uri);
  });
});
