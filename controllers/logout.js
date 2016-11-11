var express = require('express');
var router = express.Router();

router.get('/', function(req,res){
	res.render('logout');
 });

module.exports = router;


//return to homepage
// module.exports = {
//   registerRouter() {
//     var router = express.Router();
//
//     router.post('/', this.logout);
//
//     return router;
//   },
//   logout(req, res) {
//     req.logout();
//     res.redirect('/');
//   },
// };
