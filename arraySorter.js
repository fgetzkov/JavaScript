function sortArray (arr) {
	
	arr.sort(function(a, b){return a-b});;
	console.log(arr);
}

var arr = [12, 12, 50, 2, 6, 22, 51, 712, 6, 3, 3];
sortArray(arr);