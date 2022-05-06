const express = require('express');
const router = express.Router();
const {Author, validate} = require('../models/author');

  
  // const Song = mongoose.model('Song', new mongoose.Schema({
  //   name: String,
  //   author: String
  // }));
  
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

  // async function updateAuthor(id) {
  //   const author = await Author.findByIdAndUpdate(id, {
  //     $set: {
  //       author: 'jhon'
  //     }
  //     });
  //   console.log(author);
  // }

  // updateAuthor('6271f0ae5d7b4715373ce073', '6271f0ae5d7b4715373ce074');
  
  router.put('/:id', async (req, res) => {
    const author = await Author.findByIdAndUpdate(req.params.id, {
      name: req.body.name
    });
    res.send(author);
  });
router.delete('/:id', async (req, res) => {
  const author = await Author.findByIdAndRemove(req.params.id);

  res.send(author);
});
// async function removeSong(songId) {
//   const song = await Song.findById(songId);

//   song.remove(songId);
// }

router.get('/:id', async (req,res) => {
  const author = await Author.findById(req.params.id);
  if (!author) res.status(404).send('author with the given id was not found');
  res.send(author);
})

  //removeSong('626a15c454bda93f6441af4d');



  // async function updateSong(songId, authors) {
  //   const song = await Song.findByIdAndUpdate(songId, authors);

  //   song.update(authors);
  // }

  // updateSong('626a15c454bda93f6441af4d', 'evermore');
















  // async function removeSong(songId) {
  //   const song = await Song.findById(songId);
  //   song.remove();
  // }

  // removeSong('626a0a28989c2c569556225d');

  
// const genreSchema = new mongoose.Schema({

//     name: {
//         type: String,
//         required: true,
//         minlength: 5,
//         maxlength: 50
//     }
// });

// const Genre = mongoose.model('Genre', genreSchema);

// router.post('/api/backend', async (req, res)  => {
//     const { error } = validate(req.body);
//     if(error) return res.status(400).send(error.details[0].message);
//     const genre = await Genre.findById(req.body.genreId);
//     if(!genre) return res.status(400).send('invalid genre');
    
//     const movie = new Movie({ 
//         title: req.body.title, 
//         genre: {
//             _id: genre._id,
//             name: genre.name
//         },
//         numberInStock: req.body.numberInStock, 
//         dailyRentalRate: req.body.dailyRentalRate});
//     await movie.save();
//     res.send(movie);
// });

// router.get('/api/backend', async (req, res) => {
//     const movie = await Movie.find().sort('title');
//     res.send(movie);
// });

// router.put('/:id', async (req, res) => {
//     const movie = await Movie.findByIdAndUpdate(req.params.id, { title: req.body.title }, { new: true });
//     res.send(movie);
// });

// router.delete('/:id', async (req, res) => {
//     const movie = await Movie.findByIdAndRemove(req.params.id);
//     res.send(movie);
// });

// router.get('/:id', async (req, res) =>  {
//     const movie = Movie.findById(req.params.id);
//     const genre = Genre.findById(req.params.id);
//      /*find in an array*/ //const genre = genres.find(c => c.id === parseInt(req.params.id));
//      if (!genre) res.status(404).send('genre with given id was not found');
//      res.send(genre);
//      if (!movie) res.status(404).send('genre with given id was not found');
//      res.send(movie);
//    });
module.exports = router;

