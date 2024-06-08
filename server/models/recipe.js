//1. import mongoose
const mongoose = require("mongoose");

//2. create a schema for entity
const recipeSchema = new mongoose.Schema({
    title: {type: String, unique: true,
         required: true},
    date: {type: Date, required: true},
    description: {type: String, required: true},
    userId: {type: String, required: true}
});

//create model of schema
const Recipe = mongoose.model("Recipe", recipeSchema);

//4. create CRUD functions on 'Recipe' model

//CREATE recipe
async function createRecipe(title, description, userId) {
    const recipe = await getRecipe(title); 
    if(recipe) throw Error("That recipe already exists!");   

    const newRecipe = await Recipe.create({
        title: title,
        date: new Date(),
        description: description,
        userId: userId
    });
    
    return newRecipe;  //newRecipe created
}

//READ recipe
async function getAllRecipesByUser(userId)  {
    const recipes = await Recipe.find({"userId": userId});
    if(recipes.length === 0) console.log("No recipes found for this user :O");
    //if(!userId) throw Error("That user is not found");

    return recipes;     //the userId passed through returns all recipes to the client (grabbed from the client side)
}

//UPDATE recipe
async function updateRecipe(id, title, description) {  //what happens when title or description is changed?
 const recipe = await Recipe.updateOne({"_id": id}, {$set: {title: title, description: description}});

 return recipe;  //given the id, the recipe can be updated
}

//DELETE recipe
async function deleteRecipe(id) {
    await Recipe.deleteOne({"_id": id});
  };  

//utility function
async function getRecipe(title) {
    return await Recipe.findOne({"title": title});  //nased on title, returns entire recipe
}    

//export all functions we want to access in route files
module.exports = { 
    createRecipe, getAllRecipesByUser, updateRecipe, deleteRecipe 
};


