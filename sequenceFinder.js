function findMaxSequence (arr) {
	
	var currentSequence=1;
	var longestSequence=1;
	var maxSeqNum=arr[0];	
	for (var i = 1; i < arr.length; i++) {
		if (arr[i-1]===arr[i]) {
           currentSequence++;
           if (currentSequence>=longestSequence) {
           longestSequence=currentSequence;
           maxSeqNum=arr[i];
			};
		}
		else {
			currentSequence=1;
		}
	};
	
var finalArr=new Array(longestSequence);
for (var i = 0; i < finalArr.length; i++) {
	finalArr[i]=maxSeqNum;

};

 	console.log(finalArr)


}
var arr = [2, 'qwe', 'qwe', 3, 3, '3']
findMaxSequence(arr);