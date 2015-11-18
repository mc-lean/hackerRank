var input = "3\n10 2 5\n12 4 4\n6 2 2";
var values = input.split('\n');
var n = values.shift();

values.forEach(visitStore);

function visitStore (v, i, a) {

	var d = v.split(' '),
		n = +d[0],
		c = +d[1],
		m = +d[2],
		candies, r;


	// able to by x candies
	candies = Math.floor(n / c);
	r = candies / m;
	
	console.log( "-----" );
	console.log( m );
	console.log( r );

	if (r > 1) {

		console.log( 'greater' );

	}

	candies += Math.floor(candies / m);

	console.log( candies + " candies" );

}