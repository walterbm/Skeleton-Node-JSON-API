const bid = require('./bid');
const user = require('./user');
const auth = require('./auth');
const asset = require('./asset');
const contract = require('./contract');

module.exports = [].concat(user, contract, bid, asset, auth);
