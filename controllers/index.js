var express = require('express');
var router = express.Router();


router.get('/', function (req, res) {
   res.send('Home Page');
});

router.use('/activities', require('./activities'));
router.use('/major', require('./major'));
router.use('/groups', require('./groups'));
router.use('/signup', require('./signup'));
router.use('/login', require('./login'));

module.exports = router; 