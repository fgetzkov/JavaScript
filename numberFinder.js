function findMostFreqNum (arr) {
var counterVal = 0;
var numberVal = 0;
var counter=0;
var number=0;

// neshto ne smqta vqrno i ne znam kude e greshkata.
// shte se radvam ako q namerite.

for (var i = 0; i < arr.length; i++) {
	for (var j = i; j < arr.length; j++) {

		if (arr[i]===arr[j]) {
			
			counterVal++;
			
			numberVal=arr[i];
			if (counterVal>counter) {
				counter=counterVal;
				number=numberVal;
			};

		}
		else {
		counterVal=0;
		numberVal=0; }	
		
	};
};
console.log(number + "("+counter+" times)")
	
}

var arr = [4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3];
findMostFreqNum(arr);
