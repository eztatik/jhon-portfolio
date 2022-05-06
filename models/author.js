const Joi = require('joi');
const mongoose = require('mongoose');



const authorSchema = new mongoose.Schema({
    name: {   
        type: String,
        //required: true,
        minlength: 5,
        maxlength: 50
   }

});

const Author = mongoose.model('Author', authorSchema);

function validateAuthor(name) {
 
    const schema = Joi.object({ 
       // song: Joi.string() .min(6) .required(),
        name: Joi.string() .min(6) .required() });
        
        const validation = schema.validate(name);
        return validation;
  
};
  

exports.Author = Author;
exports.validate = validateAuthor;