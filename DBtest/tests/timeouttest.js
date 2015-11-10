var request = require("request");

var mega = function() {

request("https://www.kimonolabs.com/api/4lbux8o4?apikey=6NLHkk5ziM7EUpOgeI1t0azYjqic2j73", function(err, response, body) {
	
	var info = JSON.parse(body);
	console.log(info);	
	var nextrun = info.nextrun;
	var nextruntime = new Date(nextrun)
	
	var now = new Date();	
	console.log(now);

var dudi = function(a,b,c,d) {
  
	var now = new Date();
	var czas = new Date(now.getFullYear(), now.getMonth(), now.getDate(), a, b, c, d);
	return czas
};

var bb = nextruntime.getHours();
var cc = nextruntime.getMinutes() + 1;
var dd = nextruntime.getSeconds();
var ee = 00;

var target = dudi(bb,cc,dd,ee);

console.log(target);

var diff = target - now;

console.log(diff);

setTimeout(mega,diff);

	
});

};

mega();
