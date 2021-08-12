const express = require('express');
const app = express(); 
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());

//CONNECT DB
mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser: true, useUnifiedTopology: true}, 
() => console.log('Conected to db')
);

//ROUTES IMPORTS
const postsRoute = require('./routes/posts');
app.use('/', postsRoute);

//SERVER & PORT CONFIG
const PORT = 3000;

app.listen(PORT, function() {
    console.log('Node server running on http://localhost:3000');
});
