var money= 1000;
var lower = 0;
var upper = 9;
function display(){
	document.getElementById('balance').innerHTML= "You have " +money+ " INR";
}
function game()
{
	money = money-100;
	if (money >= 100) {
		display();
		var arr = [];
		while(arr.length < 3){
			var randomnumber= Math.floor(Math.random() * (upper - lower + 1) + lower);
			arr[arr.length] = randomnumber;
		}
		document.getElementById('numbers').innerHTML= arr;
		document.getElementById('rewards').innerHTML= "You were not lucky this time";
		if (arr[0] == arr[1] && arr[0] == arr[2]) {
			document.getElementById('rewards').innerHTML= "All numbers are same, you earn 1000 INR";
			money= money+1000;
			display();
		}
		else if (arr[0]%2 != 0 && arr[1]%2 != 0 && arr[2]%2 != 0) {
			document.getElementById('rewards').innerHTML= "All numbers are odd, you earn 300 INR";
			money= money+300;
			display();
		}
		else if (arr[0]%2 == 0 && arr[1]%2 == 0 && arr[2]%2 == 0) {
			document.getElementById('rewards').innerHTML= "All numbers are even, you earn 300 INR";
			money= money+300;
			display();
		}
		if (arr[0] != arr[1] && arr[0] != arr[2] && arr[1] != arr[2]) {
			var max = arr[0];
			var min = arr[0];
			for (var i = 2; i >= 0; i--) {
				if (arr[i]>max) {max = arr[i];}
				else if(arr[i]<min) {min = arr[i];}
			}		
			if (max-min == 2) {
				document.getElementById('rewards').innerHTML= "The numbers are in sequence, you get 800 INR";
				money = money+800;
				display();
			}
		}
	}
	else {
		document.getElementById('game_over').innerHTML= "Game over";
	}
}
