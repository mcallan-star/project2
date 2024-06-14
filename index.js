require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require('path');

//connect the routers
const userRoutes = require('./server/routes/user');
const recipeRoutes = require('./server/routes/recipe');
const commentRoutes = require('./server/routes/comments');

mongoose.connect(process.env.dbURL)
  .then(console.log("DB Connected!! :)"))  //no semicolon to chain the next catch block
  .catch(error => console.log(error));


app.use(express.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});

app.use('/user', userRoutes);
app.use('/recipe', recipeRoutes);
app.use('/comments', commentRoutes);

app.use(express.static(__dirname + "/public"));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public', 'index.html')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}/ !!! <3 <3 <3`));

