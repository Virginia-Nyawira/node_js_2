var express = require('express');
var app = express();

app.set('view engine', 'ejs');

//app.use(express.static('public'));
app.get('/', function(req, res) {
    res.sendFile(__dirname + "/index.html");
});
app.get('/about_me',function(req, res) {
    res.sendFile(__dirname + "/about.html");
});
app.listen(3002, function() {
    console.log("Listening on port 3002, not any other");
});