const express = require('express');

const db = require('./data/db-config.js')
const router = require('./cars/cars-router.js')

const server = express();
server.use(express.json());
server.use('/api/cars', router);

module.exports = server;