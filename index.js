/*var x=require('./test.js');

import {student,x} from './es6.js';

x.callMe();

console.log(x.student);

x("Ravi");

var p = new student(12,"Krishna");
p.display();*/

var express = require('express');
var app = express();
var path = require("path");

var server = app.listen(5000, function(){

    var port = server.address().port;

    console.log("Example App Listening at" + port);

});

app.get('/', function(req, res){
    res.send('First Response from the server');
});

app.get('/home', function(req,res){
res.sendFile(path.join(__dirname+ '/public/index.html'));
});

app.use(express.static(path.join(__dirname,'/public')));
app.use(express.static(path.join(__dirname,'/bower_components')));