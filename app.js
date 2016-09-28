var express = require('express');
var app = express();

app.get('/', function (req, res){
	res.send('Hello World!');
});

app.listen(3000, function(){
	console.log('Example app listening on port 3000!');
});

  "scripts": {
    "start": "node app.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  }