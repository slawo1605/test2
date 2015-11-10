var request = require("request");
var mongo = require('mongodb');
var host = 'localhost';
var port = 27017;

var db = new mongo.Db('naglowki', new mongo.Server(host, port, {}), {});

var request = require("request");


db.open(function(err, db) {
    db.collection('naglowki_collection', function(err, collection) {
        doc = {
            "prop1" : "c",
            "prop2" : "d",
        };
        collection.insert(doc, function() {
	console.log("Done!");
            db.close();
        });
    });
});
