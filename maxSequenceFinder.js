function findMaxSequence (arr) {
	
	var endVal=0;
	var start = 0;
	var end = 0;
	var maxSeqArr=new Array();

	for (var i = 1; i < arr.length; i++) {
		if (arr[i-1]<arr[i]) {
			
			endVal++;
			if (endVal>end) {
				start=i-endVal;
				end=endVal;
			};
		}
		else
		{
			
			endVal=0;
		}


	};
	if (end===0) {
		console.log("no");
	}
	else {
	console.log(start);
	console.log(end);
	for (var i = 0; i <=end; i++) {
		maxSeqArr[i]=arr[start];
		start++;
	};
	console.log(maxSeqArr);
}
}

var arr = [3, 2, 1];
findMaxSequence(arr);