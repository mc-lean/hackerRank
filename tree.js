var input = "3\n0\n1\n4";
var values = input.split('\n');
var n = values.shift();

values.forEach(function (v,i,a) {
	
	console.log(growth(+v));

});

function growth (cycles) {
	var height = 1;


	for(var i = 0; i < cycles; i++) {

		height += i % 2 ? 1 : height;

	}

	return height;

}