var express = require('express');
var app = express();
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//var = require('./routes/get-data');
var http = require('http');

var mongo = require('mongodb');
var monk = require('monk');
var db = monk('mongodb://lab_test:pusia44@ds034198.mongolab.com:34198/slawo_mongo');

var routes = require('./routes/index');
var users = require('./routes/users');

var connectionstreamtest3 = require("./connectionstreamtest3");


app.use(function(req,res,next){
    req.db = db;
    next();
});

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'views')));


app.use('/', routes);
app.use('/users', users); 

// added on 201511 works with the input form in index.html
app.post('/login', function(req, res) { 
	var a = (req.body.user);
	var b = (req.body.pass);
	console.log(a);
 	console.log(b);
  res.redirect("http://localhost:3000/userlist");
});

// view engine setup - uzywam dwoch wiec jest pytanie czy to dziala

app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


//should be index
//app.get('/views', function (req, res)
//{
//    res.render('index.html');
//});
//
//app.get('/get-data', data.get_data);

module.exports = app;

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

connectionstreamtest3();
