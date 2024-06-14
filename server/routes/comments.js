const express = require("express");
const Comment = require("../models/comments");  //accesses functions in comments model
const router = express.Router();

// 2. create the HTTP methods, create all routes to access the database
router
    //createComment will use POST since we are creating a new comment
    .post('/createComment', async (req, res) => {
        try {
            const comment = await Comment.createComment(req.body.commentBody, req.body.userId, req.body.recipeId);
            res.send(comment);  //send comment to client
        } catch (error) {
            res.status(401).send({message: error.message});
        }
    })

    //getComment will use GET since we are retrieving a comment
    .get('/getComment', async (req, res) => {
        try {
            const comment = await Comment.getComment(req.body.id);
            res.send(comment);  //send comment to client
        } catch (error) {
            res.status(401).send({message: error.message});
        }
    })

    //updateComment will use PUT since we are updating the comment
    .put('/updateComment', async (req, res) => {
        try {
            const comment = await Comment.updateComment(req.body.id, req.body.commentBody);
            res.send(comment);  //send updated comment to client
        } catch (error) {
            res.status(401).send({message: error.message});
        }
    })
    
    //deleteComment will use DELETE since we are deleting the comment
    .delete('/deleteComment', async (req, res) => {
        try {
            await Comment.deleteComment(req.body.id);
            res.send({success: "Your comment has been deleted! Goodbye! <3"});
        } catch (error) {
            res.status(401).send({message: error.message});
        }
    });

// 3. export the router
module.exports = router;  //export router to be used in index.js