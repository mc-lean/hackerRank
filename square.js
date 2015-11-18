var input = "2\n3 9\n17 24";
var values = input.split('\n');
var n = values.shift();


values.forEach(square);



function square (values) {
	values = values.split(" ");

	var start = +values[0],
		stop = +values[1];
	
	var count = Math.floor(Math.sqrt(stop)) - Math.ceil(Math.sqrt(start)) + 1; 

	console.log( count );

}

function nextSquare (number) {
	
	return number * 2 + 1;

}