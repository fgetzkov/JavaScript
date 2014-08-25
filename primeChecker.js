var n = 254;
var bool = true;
if (n>=0 && n<=3) {
	bool=true;
};
if (n%2==0 ||n%3==0 ||n%5==0) {
	bool=false;
};
console.log(bool);