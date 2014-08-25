function checkDigit (n) {
	var thirdNum = (Math.floor(n/100))%10;
	if (thirdNum==3) {
		console.log(true);
	}
	else {
		console.log(false);
	}
}
checkDigit(25368);