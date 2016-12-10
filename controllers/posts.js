var express = require('express');
var router = express.Router();

var Post = require('../models/post');

router.get('/', function (req, res){
 	res.render('posts');
});

router.post('/createPost', function (req, res){

  var newPost = new Post({
    title: req.body.title,
    link: req.body.link,
    description: req.body.description
  });

  Post.createPost(newPost, function(err, post){
    if(err) throw err;
    console.log(post);
  });

 	res.redirect('/discussions');
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
