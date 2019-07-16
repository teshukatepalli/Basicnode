var express = require('express');
var app = express();

var things = require('./things.js');
app.use('/things', things);
app.use(function(req,res,next){
    console.log("Start");
});
app.use('/', function(req,res,next){
    res.send("Middle");
    next();
});
app.use(function(req,res,){
    console.log('END');
});
app.listen(3000);