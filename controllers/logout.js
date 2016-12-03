var express = require('express');
var router = express.Router();


router.get('/', function(req, res){
	req.logout();

	req.flash('success_msg', 'You are logged out');

	res.redirect('/login');
});


module.exports = router;
