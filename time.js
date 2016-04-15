var i = "7\n29".split("\n");

var hours = i[0];
var minutes = i[1];


var stringTime = (function () {
	
	var numbers = [
		[0,""],
		[1,"one"], 
		[2,"two"], 
		[3,"three"], 
		[4,"four"], 
		[5,"five"], 
		[6,"six"], 
		[7,"seven"], 
		[8,"eight"], 
		[9,"nine"], 
		[10,"ten"], 
		[11,"eleven"], 
		[12,"twelve"], 
		[13,"thirteen"],
		[14,"fourteen"],
		[15,"fiveteen"], 
		[16,"sixteen"], 
		[17,"seventeen"], 
		[18,"eighteen"], 
		[19,"nineteen"], 
		[20,"twenty"],
		[30,"thrity"],
		[40,"fourty"],
		[50,"fifty"],
	];
	var map = new Map(numbers);
	var _hrs, _mins;

	function convert(hours, minutes) {
		
		var adj = "";	
		_set(hours, minutes);


		var m = _minutes();
		var a = _adjective()
		var h = _hours();

		var result = `${m} ${a} ${h}`;

		return result.replace('  ', ' ').trim();

	}

	function _adjective() {
			
		return _mins === 0 ? "" : (_mins <= 30 ? "past" : "to");

	}

	function _minutes() {

		var minutes = _numberToString(_mins > 30 ? 60 - _mins : _mins);

		switch (_mins) {
			case 0: 
				var plural = "";
				break;
			case 30:
				var plural = "";
				minutes = "half";
				break;
			case 15:
			case 45: 
				var plural = "";
				minutes = "quarter"
			break;
			
			case 1: 
			case 59: 
				var plural = "minute"; 
			break;

			default: 
				var plural = "minutes";

		}

		return `${minutes} ${plural}`;
		
	}

	function _hours() {
		var h = _numberToString(_mins > 30 ? _hrs + 1 : _hrs);
		return _mins > 0 ? h : `${h} o'clock`;

	}

	function _set(hours, minutes) {

		_mins = parseInt(minutes);
		_hrs = parseInt(hours);

	}

	function _numberToString(number) {

		if(number <= 20){

			return map.get(number);
			
		}

		number = String(number);

		var tens = parseInt(number.slice(0,1) * 10);
		var ones = parseInt(number.slice(1,2));
			
		return `${ map.get(tens) } ${ map.get(ones) }`;

	}

	return Object.freeze({
		convert
	});
	
}());

// for (var i = 0; i < 60; i++) {
	
// 	console.log( stringTime.convert(hours, i) );
// }

var time = stringTime.convert(hours, minutes);

console.log( time );

// formatSting(hours, minutes);


// convertMinutes(minutes);