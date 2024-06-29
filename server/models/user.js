//1. import mongoose
const mongoose = require("mongoose");
//import bcrypt
const bcrypt = require("bcrypt");

//2. create a schema for entity
const userSchema = new mongoose.Schema({
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true},
    dob: {type: Date},
});

//create model of schema
const User = mongoose.model("User", userSchema);

//4. create CRUD functions on 'User' model

//CREATE user
async function register (username, password, email, dob) {
    const user = await getUser(username); 
    if(user) throw Error("Username already exists!");  //if user already exists, throw error

    const salt = await bcrypt.genSalt(10);             //generate salt for password hashing (10 rounds) 
    const hashed = await bcrypt.hash(password, salt);  //'password' + salt

    const newUser = await User.create({
        username: username,
        password: hashed,                           //hashed password stored in database
        email: email,
        dob: dob
    });
    
    return newUser._doc;                            //new user created
}

//READ user
async function login (username, password)  {
    const user = await getUser(username);
    if(!user) throw Error("User not found");
    //if(user.password != password) throw Error(":O Phooey! Incorrect Password, try again!!");

    const isMatched = await bcrypt.compare(password, user.password);        //compare the password entered by user with the hashed password in database
    if(!isMatched) throw Error("Wrong Password Entered. Try that again.");

    return user._doc;                                                       //return the user object
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

