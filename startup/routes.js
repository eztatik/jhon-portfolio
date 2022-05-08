const express = require('express');
const add = require('../models/add');
//const backend = require('./backend');



module.exports = function(app) {
//make sure to always include express as this was what was causing.. 
//errors in postman
app.use(express.json());
app.use('/api/add', add);
//app.use('/api/backend', backend);



};