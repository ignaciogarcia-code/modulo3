const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', (req, res) => {
    res.send("POST ROUTE");
});

router.post('/', (req, res) => {
    const post = new Post({
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        age: req.body.age
    });


    post.save()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json({ message: err })
        })

});

module.exports = router;