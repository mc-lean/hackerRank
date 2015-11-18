var input = "8\n1 2 3 4 3 3 2 1";
var d = input.replace('\n', ' ');
var values = d.split(' ');
var n = values.shift();
var results = [];



values.sort(sortFunction);

values.forEach(cutSticks);


function cutSticks(v, i, a) {
	var j = i;

	if(v > 0){

		var count = 0;

		for(j; j < n; j++){

			values[j] -= v;
			count++;

		}
		
		console.log( count );

	}

}


function sortFunction(a, b) {

	return a - b;

}