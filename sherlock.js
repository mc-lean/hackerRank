var input = "4\n1\n3\n5\n11\n13";
var inputArray = input.split('\n');
var n = parseInt(inputArray.shift());


for (var i = 0; i <= inputArray.length - 1; i++) {

	var value = +inputArray[i];

	
	console.log( decent(value) );


}


function decent (number) {
	var result = "";

	while(number % 3 !== 0){
		result +="33333";
		number -= 5;

		if(number < 0) {
			return -1;
		}
	}

	return "5".repeat(number) + result;
}








