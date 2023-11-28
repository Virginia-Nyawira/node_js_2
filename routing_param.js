var express= require('express');
var app= express();
var students = {
    1 : 'Jane',
    2 : 'Johncena',
    3 : 'John Kilo',
    4 : 'John Maits',
    5 : 'Johnathani'
};

// students.forEach(function(student) {
//     app.get('/students/' + student.id, function(req, res) {
//         res.send('Name: ' + student.name);
//     });
// });

app.get('/',function(req,res){
    res.send('Hello World');
});
app.get('/view',function(req,res){
    res.sendFile(__dirname+'/index.html');
});
app.get('/contact',function(req,res){
    res.send('Contact us');
});
app.get('/contact/:id',function(req,res){
    res.send('Contact at a requested name '+ students[req.params.id]);
});
app.get('/about',function(req,res){
    res.send('About us');
});


app.listen(3000,function(){
    console.log('Server started on port 3000');
});