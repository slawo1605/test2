var request = require("request");



var jedziemy = function () {
	request("https://www.kimonolabs.com/api/axxp7v4c?apikey=6NLHkk5ziM7EUpOgeI1t0azYjqic2j73", function(err, response, body) {

	var info = JSON.parse(body);
	var a = info.results.collection1[0].property1.text;
	var b = info.results.collection1[0].property2.text;
	console.log(a);
	console.log(b);
});


setTimeout(jedziemy,10000);}

jedziemy();
