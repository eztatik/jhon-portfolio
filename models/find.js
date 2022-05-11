const express = require('express');
const router = express.Router();
const {Author, validate} = require('./author');

//Currently working correctly
router.get('/', async (req,res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const author = await Author.find().sort( 'name' );
    res.send(author);
  });
  router.post('/view', async (req,res) => {
    const author = await Author.findById(req.body.id);
    if (!author) return res.status(404).send('author with the given id was not found');
    res.send(author);
  });


  module.exports = router;
