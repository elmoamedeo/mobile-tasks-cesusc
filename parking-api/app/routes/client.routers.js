const express = require('express');
const client = require("../controllers/client.controller"); 

const route = express.Router();

route
    .route('/api/clients')
    .post(client.create)
    .get(client.findAll);

route
    .route('/api/clients/:id')
    .get(client.findOne)
    .put(client.update)
    .delete(client.delete);

module.exports = route;    