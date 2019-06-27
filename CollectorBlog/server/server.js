// imports
const express = require("express");
const cors = require("cors");
var data = require("./data.js");

// Setup Server
var server = express();
var port = process.env.PORT || 3000;

// Middleware
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({extended: false}));

server.get("/posts", function(req, res) {
    var response = {
        posts: data.posts
    };
    res.json(response);
});

server.post("/posts", function(req, res) {
    var new_post = {
        title: req.body.title,
        author: req.body.author,
        category: req.body.category,
        date: req.body.date,
        image: req.body.image,
        text: req.body.text
    };
    data.posts.unshift(new_post);
    res.status(201);
    res.send();
});

server.listen(port, function() {
    console.log("Listening on " + port);
});