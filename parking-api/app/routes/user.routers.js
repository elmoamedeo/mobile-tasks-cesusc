const express = require('express');
const user = require("../controllers/user.controller"); 

const route = express.Router();

route
    .route('/api/users')
    .post(user.create)
    .get(user.findAll);

route
    .route('/api/users/:id')
    .get(user.findOne)
    .put(user.update)
    .delete(user.delete);

module.exports = route;    