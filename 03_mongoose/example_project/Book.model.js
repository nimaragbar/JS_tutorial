// import mongoose module and create new Schema object
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

// define our schema in BookSchema
let BookSchema = new Schema({
   title: String,
   author: String,
   category: String
});

// export our Schema to use on other files
module.exports = mongoose.model('Book', BookSchema);

