var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.sendFile(__dirname + "index.html");
});
app.get('/about',function(req, res) {
    res.sendFile(__dirname + "about.html");
});
app.listen(3002, function() {
    console.log("Listening on port 3002");
});