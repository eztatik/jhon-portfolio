//const { link } = require('joi');
const Joi = require('joi');
const mongoose = require('mongoose');



const authorSchema = new mongoose.Schema({
    id: {
        type: String
        
    },
    name: {   
        type: String,
        //required: true,
        minlength: 2,
        maxlength: 50
   }
   
   
});

const Author = mongoose.model('Author', authorSchema);

function validateAuthor(id, name) {
 
    const schema = Joi.object({ 
       // song: Joi.string() .min(6) .required(),
       id: Joi.string() .min(1) .required(),
        name: Joi.string() .min(2) .required()
         });
        
        const validation = schema.validate(id, name);
        return validation;
  
};
  

exports.Author = Author;
exports.validate = validateAuthor;