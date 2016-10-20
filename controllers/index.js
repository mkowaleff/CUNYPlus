var express = require('express');
var router = express.Router();


router.get('/', function (req, res) {
   res.render('homepage');
});

router.use('/discussions', require('./discussions'));
router.use('/posts', require('./posts'));
router.use('/signup', require('./signup'));
router.use('/login', require('./login'));
router.use('/logout', require('./logout'));
router.use('/profile', require('./profile'));

module.exports = router;
