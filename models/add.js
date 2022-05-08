const express = require('express');
const router = express.Router();
const {Author, validate} = require('./author');



router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    //let songs = await Song.findById(req.params.name);
    let author = new Author({ name: req.body.name }); 
    
   author = await author.save();
    res.send(author);
  });
  router.get('/', async (req,res) => {
    const author = await Author.find().sort( 'name' );
    res.send(author);
  });
  router.get('/:id', async (req,res) => {
    const author = await Author.findById(req.params.id);
    if (!author) res.status(404).send('author with the given id was not found');
    res.send(author);
  });
  module.exports = router;
