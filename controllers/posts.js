var express = require('express');
var router = express.Router();

router.get('/', function (req, res){
 	res.send('Groups');
});

router.post('/createPost', function (req, res){
 	res.send('Create a new post');
});

router.delete('/deletePost', function(req, res){
  res.send('Delete a post');
});

router.get('/:title', function(req, res){
  res.send('List a single post');
});

router.put('/:title', function(req, res){
  res.send('Add a single reply post');
});

module.exports = router; 
