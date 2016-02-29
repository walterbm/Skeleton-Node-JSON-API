'use strict';

// *** main dependencies *** //
const Hapi = require('hapi');
const models = require('./src/models');
const routes = require('./src/routes');

// *** authentication dependencies *** //
const AuthJWT = require('hapi-auth-jwt2');
const AuthValidate = require('./src/middleware/auth_jwt_validate');

// *** documentation dependencies *** //
const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');
const Good = require('good');
const GoodConsole = require('good-console');

// *** create server *** //
const server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 4000
});

// *** register main plugins *** //
server.register(
  [
    {
      register: AuthJWT
    },
    {
      register: Good,
      options: {
        reporters: [{
          reporter: GoodConsole,
          events: { log: '*', response: '*' }
        }]
      }
    }
  ], function (err) {
      if (err) { console.error(err); }

  }
);

// *** authentication *** //
server.auth.strategy('jwt', 'jwt', 'required',  {
  key: '315CC30C9184E744791DBA566A38950F8064275FF233776DB27DDAE0D1F96395',
  validateFunc: AuthValidate,
  verifyOptions: { algorithms: [ 'HS256' ] }
});

// *** register documentation plugins *** //
server.register(
  [
    Inert,
    Vision,
    {
      register: HapiSwagger,
      options:  {
        info: {
            title: 'SlashQuo API Documentation',
            version: '1.0'
        },
        auth: false
      }
    }
  ], function (err) {
      if (err) { console.error(err); }

  }
);

// *** load routes *** //
server.route(routes);

// *** sync the database and start the server *** //
models.sequelize.sync().then(function() {
  server.start((err) => {

      if (err) { throw err; }

      console.log('Server running at:', server.info.uri);
  });
});
