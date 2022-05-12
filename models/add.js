const express = require('express');
const router = express.Router();
const {Author, validate} = require('./author');


//Currently working correctly
router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    //let songs = await Song.findById(req.params.name);
    let author = new Author({ name: req.body.name, id: req.params.id }); 
    
   author = await author.save();
    res.send(author);
  });
  
  module.exports = router;
