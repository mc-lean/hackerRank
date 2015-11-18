var input = "3\n4 3\n-1 -3 4 2\n4 2\n0 -1 2 1\n3 4\n-3 -5 0";


function formatInput (input) {
	
	var i = input.split('\n');
	var T = parseInt(i.shift());
	var tCase = []; 
	var g = 0;

	for (g; g <= T * 2 - 1; g+=2) {

		var nk = i[g].split(' ');

		tCase.push({
			N: parseInt(nk[0]),
			K: parseInt(nk[1]),
			times: i[g + 1].split(' ')
		});

	}

	return tCase;

}

function holdClass (input) {
	
	var tCases = formatInput(input),
		holdingClass;

	tCases.forEach(function (v,i) {
		
		if(v.N > v.K) {

			var onTime = v.times.filter(function (v,i,a) {
				
				return parseInt(v) <= 0;
			
			});

			holdingClass = onTime.length >= v.K ? "NO" : "YES";

		} else {

			holdingClass = "YES";

		}

	
	});

}