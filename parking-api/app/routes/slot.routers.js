const express = require('express');
const slot = require("../controllers/slot.controller"); 

const route = express.Router();

route
    .route('/api/slots')
    .post(slot.create)
    .get(slot.findAll);

route
    .route('/api/slots/:id')
    .get(slot.findOne)
    .put(slot.update)
    .delete(slot.delete);

module.exports = route;    