var express = require('express');
var router = express.Router();


router.get('/', function (req, res) {
   res.send('Home Page');
});

router.use('/discussions', require('./discussions'));
router.use('/signup', require('./signup'));
router.use('/login', require('./login'));

module.exports = router; 