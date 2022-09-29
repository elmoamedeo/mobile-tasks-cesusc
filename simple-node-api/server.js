const express = require('express');
const cors = require('cors');
const app = express();
require('./src/Routes/index')(app);
var bodyParser = require('body-parser');

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json());
app.listen(3333);