// BABY STEPS
// Exercise 2 of 13

var n = process.argv.length;
var i = 2, res = 0;

for (i; i < n; i++) {
	res += Number(process.argv[i]);
}

console.log(res);
