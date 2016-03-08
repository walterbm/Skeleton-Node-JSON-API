const me = require('./me');
const bid = require('./bid');
const user = require('./user');
const auth = require('./auth');
const asset = require('./asset');
const contract = require('./contract');

module.exports = [].concat(me, user, contract, bid, asset, auth);
