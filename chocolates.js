var input = "3\n10 2 5\n12 4 4\n6 2 2";
var values = input.split('\n');
var n = values.shift();

values.forEach(visitStore);

function visitStore (v, i, a) {

	var d = v.split(' '),
		n = +d[0],	// Dollars he has
		c = +d[1],	// Price of each chocolate
		m = +d[2],	// Number of wrappers needed for exchange 
		candies, total;


	// able to by x candies
	boughtCandies = Math.floor(n / c);

	total = boughtCandies + (boughtCandies - 1) / (m - 1);
	

	console.log( Math.floor(total) );
	

}