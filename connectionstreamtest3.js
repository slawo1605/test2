function connectionstreamtest3(user,pass) {

var request = require("request");

var mongo = require('mongodb');
var Server = mongo.Server;
var Db = mongo.Db;
var server = new Server('ds034198.mongolab.com', 34198, {auto_reconnect : true});
var db = new Db('slawo_mongo', server);


var jedziemy = function() {db.open(function(err, db) {

	db.authenticate(user, pass, function(err, success) {

	console.log("We are in");
    
	request("https://www.kimonolabs.com/api/4lbux8o4?apikey=6NLHkk5ziM7EUpOgeI1t0azYjqic2j73", function(err, response, body) {

	var info = JSON.parse(body);	
	var a = info.results.collection1[0].property1;
	var b = info.results.collection1[0].property2;
	var date = new Date();
	console.log(a);
	console.log(b);

	db.collection('test_collection', function(err, collection) {
        doc = {
            time : date,
	    prop1 : a,
            prop2 : b,
        };
        collection.insert(doc, function() {
	console.log("Done!");
	console.log(date);
            db.close();
        });
    		});
			});

				});
					 });
var minuta = 15
var czas = minuta * 60 * 1000

setTimeout(jedziemy,czas);};

jedziemy();

};


module.exports = connectionstreamtest3;
