var input = "25";

function factorial(number) {
	
	if(number < 1) {

		return 0;

	}


	return number + factorial(number -= 1);

}