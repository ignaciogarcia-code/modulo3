const mongoose = require('mongoose');


const PostSchema = mongoose.Schema({
    name:String,
    surname:String,
    email:String,
    age:String    
});

module.exports = mongoose.model('Usuarios', PostSchema);