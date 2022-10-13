const express = require('express');
const model = require("../controllers/model.controller"); 

const route = express.Router();

route
    .route('/api/models')
    .post(model.create)
    .get(model.findAll);

route
    .route('/api/models/:id')
    .get(model.findOne)
    .put(model.update)
    .delete(model.delete);

module.exports = route;    