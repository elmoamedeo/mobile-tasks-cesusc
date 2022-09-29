const execSQLQuery = require('../../create-table');

exports.post = (req, res) => {
   execSQLQuery(`INSERT INTO users (NAME) VALUES('${req.body.name}');`, res.status(201));
 };
  
 exports.put = (req, res) => {
    const id = parseInt(req.params.id);
    const name = req.body.name.substring(0, 150);
    execSQLQuery(`UPDATE users SET NAME = '${name}' WHERE ID = ${id}` , res.status(201));
 };
  
 exports.delete = (req, res, next) => {
    execSQLQuery(`DELETE FROM users where ID = ` + parseInt(req.params.id), res.status(200));
 };
  
 exports.get = (req, res) => {
    execSQLQuery(`SELECT * FROM users;`, res.status(200));
 };
  
 exports.getById = (req, res) => {
    let filter = '';
    if(req.params.id) filter = ` WHERE ID = ` + parseInt(req.params.id);
    execSQLQuery(`SELECT * FROM users` + filter, res.status(200));
 };