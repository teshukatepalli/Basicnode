var express = require('express');
var router = express.Router();

router.get('/', function(req,res){
    res.send('GET route on things.');
});
router.get('/:name', function(req,res){
    res.send('get request with name ' + req.params.name);
});

router.post('/', function(req,res){
    res.send('POST route on things');
});
//Simple request time logger
module.exports = router;