const UserController = require('../Controllers/UserController');
module.exports = (app) => {
   app.post('/users', UserController.post);
   app.put('/users/:id', UserController.put);
   app.delete('/users/:id', UserController.delete);
   app.get('/users', UserController.get);
   app.get('/users/:id?', UserController.getById);
}