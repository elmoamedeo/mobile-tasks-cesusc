const express = require('express');
const parking = require("../controllers/parking.controller"); 

const route = express.Router();

route
    .route('/api/parkings')
    .post(parking.create)
    .get(parking.findAll);
    
route
    .route('/api/parkings/:id')
    .get(parking.findOne)
    .put(parking.update)
    .delete(parking.delete);

module.exports = route;    