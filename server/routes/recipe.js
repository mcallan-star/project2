// 1. import any needed libraries
const express = require("express");
const Recipe = require("../models/recipe");  //accesses functions in recipe model
const router = express.Router();


//2. create the HTTP methods, create all routes to access the database
router  //createRecipe, getAllRecipesByUser, updateRecipe, deleteRecipe 

    //createRecipe will use POST since we are creating a new recipe
    .post('/createRecipe', async (req, res) => {
        try {
            const recipe = await Recipe.createRecipe(req.body.title, req.body.time, req.body.description, req.body.userId);
            res.send(recipe);  //send over the recipe
        } catch (error) {
            res.status(401).send({message: error.message});
        }
    })

    .get('/getAllRecipesByUser', async (req, res) => {
        try {
            const recipes = await Recipe.getAllRecipesByUser(req.body.userId);
            res.send(recipes);  //send over the recipes to the client side 
        } catch (error) {
            res.status(401).send({message: error.message});
        }
    })

    .put('/updateRecipe', async (req, res) => {
        try {
            const updatedRecipe = await Recipe.updateRecipe(req.body.id, req.body.title, req.body.description);
            res.send(updatedRecipe);  //send updated recipe to client
        } catch (error) {
            res.status(401).send({message: error.message});
        }
    })

    .delete('/deleteRecipe', async (req, res) => {
        try{
            await Recipe.deleteRecipe(req.body.id);
            res.send({success: "You've just deleted a recipe! :O"});
        } catch (error) {
            res.status(401).send({message: error.message});
        }

    });

    //3. export the router
    module.exports = router;  //export router to be used in index.js
