function findMinAndMax (arr) {
	var min=2000000000000;
	var max=0;
	for (var i = 0; i < arr.length; i++) {
		if (min>arr[i]) {
			min=arr[i];
		};
		if (max<arr[i]) {
			max=arr[i];
		};
	};
	console.log("min="+min);
	console.log("max="+max);

}
var arr = [2, 2, 2,2,-300];
findMinAndMax(arr);