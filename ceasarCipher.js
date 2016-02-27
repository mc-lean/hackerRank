var input = "11\nmiddle-Outz\n80";
var values = input.split('\n');
var n = values.shift();
var aZ = "abcdefghijklmnopqrstuvwxyz".split("");
var alpha = /[a-zA-z]/;


var word	= values[0].split("");
var	key		= parseInt(values[1]) % 26;


var encrypted = word.map(applyCypher);

console.log( word.join("") );
console.log( encrypted.join("") );


// for (var i = 0; i <= 26; i++) {
// 	console.log( i % 26 );
// }

function applyCypher (v) {

	var i = aZ.indexOf(v.toLowerCase());
	var uC = v.toUpperCase() === v;


	if(i > -1) { 	// Is i a letter



		var newKey = i + key < 26 ? i + key : (i + key) - 26;

		return uC ? aZ[newKey].toUpperCase() : aZ[newKey];

	}

	else {

		return v;

	}

}

function findNewKey(index, key) {

	key = key % 26;
	
	return index + key < 26 ? index + key : (index + key) - 26;

}



