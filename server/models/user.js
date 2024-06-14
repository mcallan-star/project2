//1. import mongoose
const mongoose = require("mongoose");

//2. create a schema for entity
const userSchema = new mongoose.Schema({
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true},
    dob: {type: Date, required: true},
});

//create model of schema
const User = mongoose.model("User", userSchema);

//4. create CRUD functions on 'User' model

//CREATE user
async function register (username, password, email, dob) {
    const user = await getUser(username); 
    if(user) throw Error("Username already exists!");  //if user already exists, throw error

    const newUser = await User.create({
        username: username,
        password: password,
        email: email,
        dob: dob
    });
    
    return newUser;  //new user created
}

//READ user
async function login (username, password)  {
    const user = await getUser(username);
    if(!user) throw Error("User not found");
    if(user.password != password) throw Error(":O Phooey! Incorrect Password, try again!!");

    return user;  //the specific username and password passed through can be returned to the client (grabbed from the client side)
}

//UPDATE user
async function updatePassword(id, password) {
 const user = await User.updateOne({"_id": id}, {$set: { password: password}});

 return user;  //given the id, the password can be updated
}

//DELETE user
async function deleteUser(id) {
    await User.deleteOne({"_id": id});
  };  //no return value for deletion

//utility functions
async function getUser(username) {
    return await User.findOne({"username": username});
}    

//export all functions we want to access in route files
module.exports = { 
    register, login, updatePassword, deleteUser 
};

