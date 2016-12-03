var express = require('express');
var router = express.Router();

// Get Homepage
router.get('/', function(req, res){
	res.render('homepage');
});

router.use('/login', require('./login'));
router.use('/signup', require('./signup'));
router.use('/posts', require('./posts'));
router.use('/logout', require('./logout'));
router.use('/profile', require('./profile'));
router.use('/discussions', require('./discussions'));
router.use('/posts', require('./posts'));


module.exports = router;