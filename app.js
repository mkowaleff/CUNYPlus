var express = require('express');
var app = express();
var router = express.Router();


app.use(require('./controllers'));


app.listen(1337, function () {
  console.log('CUNYPlus listening on port 1337!');
});
