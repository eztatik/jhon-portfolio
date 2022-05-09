const express = require('express');
const router = express.Router();
const {Author, validate} = require('./author');



router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    //let songs = await Song.findById(req.params.name);
    let author = new Author({ id: req.body.id, name: req.body.name }); 
    
   author = await author.save();
    res.send(author);
  });
  
  module.exports = router;
