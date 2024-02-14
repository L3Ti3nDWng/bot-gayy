const Keyv = require('keyv');
const { mongodb } = require('./config.json');
const db = new Keyv(mongodb);

module.exports = db;