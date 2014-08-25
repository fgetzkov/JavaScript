function printNumbers (n) {
	if (n<0) {
		console.log("no");
		return;
	};
  for (var i = 0; i < n; i++) {
  		if (i%4!=0 && i % 5!=0) {
  			console.log(i);
  		}
  		
  	
  	};
  	
}
printNumbers(13);