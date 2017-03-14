var money= 1000;
var lower = 0;
var upper = 9;
var arr = [];
function numberGenerator() {
	while(arr.length < 3){
		var random_num = Math.floor(Math.random() * (upper - lower + 1) + lower);
		arr[arr.length] = random_num;
	}
	document.getElementById('numbers').innerHTML= arr;
}
function isValuesSame(temp_arr) {
	for (var i = temp_arr.length - 1; i >= 1; i--) {
		if(temp_arr[i] != temp_arr[0]){
			return false;
		}
	}
	return true;
}
function isOddOrEven() {
	var mod_arr = [];
	for (var i = arr.length - 1; i >= 0; i--) {
		mod_arr[i] = arr[i]%2;
	}
	if(isValuesSame(mod_arr)) {
		if (mod_arr[0]==0) {
			return 'even';
		}
		else {
			return 'odd';
		}
	}
	return false;
}
function isSequence() {
	var diff_arr = [];
	for (var i = arr.length - 1; i >= 0; i--) {
		var max = arr[i];
		var loc = i;
		for (var j = i-1; j >= 0; j--) {
			if (arr[j] > max) {
				max = arr[j];
				loc = j;
			}
			else if (arr[j] == max) {
				return false;
			}
		}
		arr[loc] = arr[i];
		arr[i] = max;
		if (i < arr.length - 1) {
			diff_arr[i] = arr[i+1] - arr[i];
		}
	}
	if (isValuesSame(diff_arr)) {
		return true;
	}
	return false;
}
function display() {
	document.getElementById('balance').innerHTML= "You have " +money+ " INR";
}
function game() {
	money-=100;
	numberGenerator();
	if (money >= 100) {
		if (isValuesSame(arr)) {
			document.getElementById('rewards').innerHTML= "All numbers are same, you earn 1000 INR";
			money+=1000;
		}
		else if (result=isOddOrEven()) {
			if (result == 'odd') {
				document.getElementById('rewards').innerHTML= "All numbers are odd, you earn 300 INR";
			}
			else {
				document.getElementById('rewards').innerHTML= "All numbers are even, you earn 300 INR";
			}
			money+=300;
		}
		else if (isSequence()) {
			document.getElementById('rewards').innerHTML= "The numbers are in sequence, you get 800 INR";
			money = money+800;
		}
		else {
			document.getElementById('rewards').innerHTML= "You were not lucky this time";
		}
		display();
		arr = [];
	}
	else {
		document.getElementById('game_over').innerHTML= "Game over";
	}
}
