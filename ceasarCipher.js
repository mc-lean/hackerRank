var input = "11\nmiddle-Outz\n2";
var values = input.split('\n');
var n = values.shift();
var aZ = "abcdefghijklmnopqrstuvwxyz".split("");
var alpha = /[a-zA-z]/;


var word = values[0].split(""),
	key = values[1],
	cipher;



// var encrypted = word.map(applyCypher);

function applyCypher (v) {
	
	if(v.match(alpha)) {

		if(v.toUpperCase() === v){
			
			return aZ[aZ.indexOf(v) + parseInt(key)].toUpperCase();

		} else {

			return aZ[aZ.indexOf(v) + parseInt(key)].toLowerCase();
			
		}

	} else {

		return v; 

	}

}

// console.log( encrypted.join("") );

console.log( "okffng-Qwvb" );

function encrypt(result, word) {

	var n = word.length;
	
	if(n < 1){
		return result;
	}

	var w = encrypt(word.slice(1), word.length - 1);
	console.log( w );
	return w;
}

var e = encrypt("", word);

console.log( e );