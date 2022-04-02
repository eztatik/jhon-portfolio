const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

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
  router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/css/main.css'));
   
  });
  
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');




    
