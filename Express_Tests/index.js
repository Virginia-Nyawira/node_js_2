var express = require ("express");

var app = express();
//Express Methods
//Get
//Post
//Put
//Delete
app.get("/", function(req, res){
    res.send("Hello World");
});

app.get("/contact", function(req, res){
    res.send("Contact Page");
});

app.get("/about", function(req, res){
    res.send("About Page");
});

app.get("/weather", function(req, res){
    res.send("Weather Page");
});

app.get("/help", function(req, res){
    res.send("Help is Here");
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});

