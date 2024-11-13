const express = require('express');
const routeCNCampuchia = require('./route_chinhngach_campuchia');
const routes = express.Router();

routes.use('/cn-campuchia', routeCNCampuchia)
module.exports = routes