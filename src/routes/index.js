const user = require('./user');
const contract = require('./contract');
const bid = require('./bid');
const asset = require('./asset');

module.exports = [].concat(user, contract, bid, asset);
