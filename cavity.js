var m = "1112\n1912\n1892\n1234";

m = m.split('\n');


for (var z = 1; z < m.length - 1 ; z++) {
	
	var row = m[z].split("");
	var rowAbove = m[z - 1].split("");
	var rowBelow = m[z + 1].split("");

	for (var i = 1; i < row.length - 1; i++) {
		
		var val = row[i]

		if( val > row[i - 1] && val > row[i + 1] && rowAbove[i] < val && rowBelow[i] < val ){

			row[i] = "X";

		}

	}
	m[z] = row.join("");
	
}

console.log( m.join("\n") );