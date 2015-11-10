var express = require('express');
var router = express.Router();
var basicAuth = require('basic-auth');


var auth = function (req, res, next) {
  function unauthorized(res) {
    res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
    return res.send(401);
  };

  var user = basicAuth(req);

  if (!user || !user.name || !user.pass) {
    return unauthorized(res);
  };

  if (user.name === 'foo' && user.pass === 'bar') {
    return next();
  } else {
    return unauthorized(res);
  };
};


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Expressik' });
});

/* GET Hello World page. */
router.get('/helloworld', function(req, res) {
    res.render('helloworld', { title: 'Hello, World!' });
});

/* GET Userlist page. */
router.get('/userlist', auth, function(req, res) {
    var db = req.db;    
    var collection = db.get('test_collection');
    console.log("collection loaded");
    var dateFrom = new Date(Date.parse(new Date()) - 1000 * 60 * 120);
      collection.find({time: {'$gt': dateFrom}},{},function(e,docs){
        res.render('userlist', {
        "userlist" : docs });
    });
});

module.exports = router;
