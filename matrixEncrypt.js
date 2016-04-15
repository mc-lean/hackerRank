var test 		= "ifmanwasmeanttostayonthegroundgodwouldhavegivenusroots";
var testI		= "haveaniceday";
var testII		= "feedthedog";
var testIII		= "chillout";


function crypto(input) {
	
	var columns = slice(input.length);
	var crypt = [];
	
	var matrix = input.match(new RegExp('.{1,'+ columns +'}', 'g'));
	var matrixArray = matrix.map(function (v) {
		
		return v.split("");
	
	});

	return matrixArray[0].map(function (col, i) {

		return matrixArray.map(function (row) {

			return row[i];
		
		}).join("");
	
	});

}

function slice(l) {

	var floor = Math.floor(Math.sqrt(l));
	var ceil = Math.ceil(Math.sqrt(l));

	return Math.pow(floor, 2) >= l ? floor : ceil;

}




var cryptArray = crypto(test);

console.log( 'result', cryptArray.join(" ") );

console.log(  );

// imtgdvs
// fearwer
// mayoogo
// anouuio
// ntnnlvt
// wttddes
// aohghn
// sseoau

// [0,1,2]
// [0,1,2]
// [0,1]
