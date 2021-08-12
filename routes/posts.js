const { Router } = require('express');
const express = require('express');
const router = express.Router();
const Post = require('../models/Post');





//GET BACK ALL USERS
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);

    } catch (err) {
        res.json({ message: err })
    }
});


//SUBMIT USERS
router.post('/', async (req, res) => {
    const post = new Post({
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        age: req.body.age
    });


    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (err) {
        res.json({ message: err });
    }


});


//SPECIFIC POST GET
router.get('/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post)
    }catch(err){
        res.json({message:err})

    }
    
});

//DELETE POST
router.delete('/:postId', async (req, res) => {
    try {
        const removedPost = await Post.remove({ _id: req.params.postId });
        res.json(removedPost);
    }catch(err){
        res.json({message:err})
    }    
});


//UPDATE POST
router.patch('/:postId', async (req, res) => {
    try {
        const updatedPost = await Post.updateOne(
            { _id: req.params.postId }, 
            { $set: {name: req.body.name, surname: req.body.surname, email: req.body.email, age: req.body.age}},   
        );
        res.json(updatedPost);
    }
    catch(err){
        res.json({message:err})
    }    
});

module.exports = router;