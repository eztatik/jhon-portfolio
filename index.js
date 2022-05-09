const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const bodyParser = require('body-parser');
var http = require('http');
const methodOverride = require('method-override');




const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/form')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

// require('./startup/logging')();
// require('./startup/routes')(app);
// require('./startup/db')();
// require('./startup/config')();
// require('./startup/validation')();
// require('./startup/prod')(app);


app.use(express.static(path.join(__dirname, 'public')));


router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
   
  });

  

  //router.get('/api/backend', backend);
  // router.get('/api/backend',function(req,res){
  //    res.sendFile(path.join(__dirname+'/js/backend.js'));
   
  //  });
  


  //router.get('/api/backend', backend);
  // router.get('/dev',function(req,res){
  //   res.sendFile(path.join(__dirname+'/dev.html'));
   
  // });
    
  router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/css/main.css'));
   
  });
  

  //app.use(express.bodyParser());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

//I had to move the routes below the bodyParser so body.name would be read by the form in the html page
router.get('/form',function(req,res){
  res.sendFile(path.join(__dirname+'/form.html'));
 
});


require('./startup/routes')(app);

app.use('/', router);

app.listen(process.env.port || 3000);

console.log('Running at Port 3000');




    
