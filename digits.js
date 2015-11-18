var input = "2\n12\n1012";
var values = input.split('\n');
var n = values.shift();

values.forEach(digits);

function digits (value) {
	var count = 0;
	

	for(var i = 0; i < value.length; i++) {

		if(+value % +value[i] === 0) {
			count++;
		}
	}
	
	console.log( count );
	return count;

}