var express = require('express');
var router = express.Router();

router.get('/', function (req, res){
 	res.send('Groups');
});

router.get('/createPost', function (req, res){
 	res.send('Create a new post');
});

module.exports = router; 