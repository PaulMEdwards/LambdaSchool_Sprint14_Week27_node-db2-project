const express = require('express');

const server = express();
server.use(express.json());

const logger = require('./middleware/logger');
server.use(logger);

const vehiclesRouter = require('./data/helpers/vehiclesRouter.js');
server.use('/api/vehicles', vehiclesRouter);

module.exports = server;
