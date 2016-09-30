var express = require('express');
var router = express.Router();

router.get('/', function (req, res){
 	res.send('Major');
});

router.post('/createPost', function (req, res){
 	res.send('Create a new post');
});

module.exports = router; 
