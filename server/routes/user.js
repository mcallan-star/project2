// 1. import any needed libraries
const express = require("express");
const User = require("../models/user");  //accesses functions in user model
const router = express.Router();


// 2. create the HTTP methods, create all routes to access the database
router  
    //login will use POST since we are sending sensitive data 
    .post('/login', async (req, res) => {
        try {
            const user = await User.login(req.body.username, req.body.password);
            res.send({...user, password: undefined});  //send user (except the password) to client
        } catch (error) {
            res.status(401).send({message: error.message});
        }
    })
//register will use POST since we are creating a new user
    .post('/register', async (req, res) => {
        try{

            const user = await User.register(req.body.username, req.body.password, req.body.email, req.body.dob); 
            res.send({...user, password: undefined});  //we send over the user without the password   
        }
        catch (error) {
            res.status(401).send({message: error.message});
        }
    })
    //updatePassword will use PUT since we are updating the password
    .put('/updatePassword', async (req, res) => {
        try {
            const user = await User.updatePassword(req.body.id, req.body.password);
            res.send({...user, password: undefined});  //send updated user w/o password to client
        } catch (error) {
            res.status(401).send({message: error.message});
        }
    })

    //deleteUser will use DELETE since we are deleting the user
    .delete('/deleteUser', async (req, res) => {
        try {
            await User.deleteUser(req.body.id);
            res.send({success: "Your account has been deleted! Awww, we'll miss you! Goodbye! <3"});
        }
        catch (error) {
            res.status(401).send({message: error.message});
        }

    });

// 3. export the router
module.exports = router;  //export router to be used in index.js