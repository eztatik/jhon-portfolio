const express = require('express');
const router = express.Router();
const {Author, validate} = require('./author');

router.put('/author', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const author = await Author.findByIdAndUpdate(req.body.id, { name: req.body.name }, 
        { new: true }
    )
    // if (!author) return res.status(404).send('author with given id was not found');

    return res.send(author);
});

module.exports = router;