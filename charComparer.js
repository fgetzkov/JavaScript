function compareChars (arr1,arr2) {
	var isEqual=true;
	for (var i = 0; i < arr1.length; i++) {
		if (arr1[i]!=arr2[i]) {
           isEqual=false;

};
		};
		console.log(isEqual);
}
var arr1=['q', 'g', 'q', 'h', 'a', 'k', 'u', '8', '}', 'q', '.', 'h', '|', ';'];
var arr2=['6', 'f', 'w', 'q', ':', '”', 'd', '}', ']', 's', 'r'];
compareChars(arr1,arr2);
