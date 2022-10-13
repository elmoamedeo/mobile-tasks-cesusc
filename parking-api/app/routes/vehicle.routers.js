const express = require('express');
const vehicle = require("../controllers/vehicle.controller"); 

const route = express.Router();

route
    .route('/api/vehicles')
    .post(vehicle.create)
    .get(vehicle.findAll);

route
    .route('/api/vehicles/:id')
    .get(vehicle.findOne)
    .put(vehicle.update)
    .delete(vehicle.delete);

module.exports = route;    