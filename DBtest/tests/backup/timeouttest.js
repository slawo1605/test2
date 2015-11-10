var mega = function() {

var now = new Date();

console.log(now);

var dudi = function(a,b,c,d) {
  
	var now = new Date();
	var czas = new Date(now.getFullYear(), now.getMonth(), now.getDate(), a, b, c, d);
	return czas
};

var bb = now.getHours()
var cc = now.getMinutes() + 1
var dd = now.getSeconds()
var ee = 00

var target = dudi(bb,cc,dd,ee);

console.log(target);

var diff = target - now;

console.log(diff);

setTimeout(mega,diff);

};

mega();

