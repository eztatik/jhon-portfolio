const express = require('express');
const find = require('../models/find');
const add = require('../models/add');
const remove = require('../models/remove');

//const backend = require('./backend');



module.exports = function(app) {
//make sure to always include express as this was what was causing.. 
//errors in postman
app.use(express.json());
app.use('/api/add', add);
app.use('/api/find', find);
app.use('/api/remove', remove);

//app.use('/api/backend', backend);



};