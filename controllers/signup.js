var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var User = require('../models/user');

// Register
router.get('/', function(req, res){
	res.render('signup');
});



// Register User
router.post('/', function(req, res){
	 var username=req.body.username;
	 var school=req.body.school;
	 var gender= req.body.gender;
	 var email=req.body.email;
	 var password= req.body.password;
	 var password2=req.body.password2;
	 var major=req.body.major;
	 var minor=req.body.minor;
	 var intro=req.body.intro;

	// Validation
	 req.checkBody('username', 'Name is required').notEmpty();
	 req.checkBody('email', 'Email is required').notEmpty();
	 req.checkBody('email', 'Email is not valid').isEmail();
	 req.checkBody('major', 'Major is required').notEmpty();
	//  delete select to fix the bug
	 req.checkBody('school', 'School is required').notEmpty();
	 req.checkBody('password', 'Password is required').notEmpty();
	 req.checkBody('password2', 'Passwords do not match').equals(req.body.password);

	var errors = req.validationErrors();

	if(errors){
		res.render('register',{
			errors:errors
		});
	} else {
		 		var newUser = new User({
					username:username,
				  school:school,
					gender:gender,
					email:email,
					password:password,
					password2:password2,
					major:major,
					minor:minor,
					intro:intro
		});

		User.createUser(newUser, function(err, user){
			if(err) throw err;
			console.log(user);
		});

		req.flash('success_msg', 'You are registered and can now login');

		res.redirect('/login');
	}
});



module.exports = router;
