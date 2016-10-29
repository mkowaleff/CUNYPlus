var express = require('express');
var router = express.Router();

router.get('/', function (req, res){
 	res.render("discussions");
});

router.get('/activities', function (req, res){
 	res.send("Activities");
});

router.get('/internship', function (req, res){
 	res.send('Internship');
});

router.get('/General', function (req, res){
 	res.send('General');
});

router.get('/groups', function (req, res){
 	res.send('Groups');
});

router.use('/posts', require('./posts'));

module.exports = router;
