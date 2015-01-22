function tripleFive (input){
	for (var i=0; i<3; i++){
 		console.log("Five!");
 	}
};

tripleFive(3);

////////////////////////////////////////////////////////

function lastLetter (str){
	return str.substring(str.length-1, str.length);
}

console.log(lastLetter("bark"));

///////////////////////////////////////////////////////

function square (num){
	return num * num;
}

console.log(square(4));

///////////////////////////////////////////////////////

function negate(num){
	return num * -1;
}

console.log(negate(5));

//////////////////////////////////////////////////////

function toArray(arg1, arg2, arg3){
	var argArray = [arg1, arg2, arg3];
	return argArray; 
};

console.log(toArray(11,12,13)); 

/////////////////////////////////////////////////////

function startsWithA(str){
	if (str.charAt(0) === "A" || str.charAt(0) === "a") {
		return true;
	} else {
		return false; 
	}

};

console.log(startsWithA("Alligator"));

////////////////////////////////////////////////////

function excite(str){
	return str + "!!!";
};

console.log(excite("dog"));

///////////////////////////////////////////////////

function sun(str){
	if (str.indexOf("sun") > -1) {
		return true;
	} else {
		return false;
	}
}

console.log(sun("sunnysideup"));

//////////////////////////////////////////////////

function tiny(num){
	if (num > 0 && num < 1) {
		return true;
	} else {
		return false; 
	}

}

console.log(tiny(0.99));

/////////////////////////////////////////////////

function getSeconds(str){
	x = str.split(":");
	y = parseFloat(x[1]); 
	return x[0] * 60 + y;
}
var x = [];
var y = [];
console.log(getSeconds("10:25")); 
console.log(x);

console.log(x[1]);

/////////////////////////////////////////////////