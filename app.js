var express = require('express');
const exphbs = require('express-handlebars');
var app = express();
var router = express.Router();


app.use(require('./controllers'));
app.use(express.static('./public'));

app.engine('handlebars', exphbs({
  layoutsDir: './views/layouts',
  defaultLayout: 'main',
}));
app.set('view engine', 'handlebars');
app.set('views', `${__dirname}/views/`);


app.listen(3000, function () {
  console.log('CUNYPlus listening on port 3000!');
});
