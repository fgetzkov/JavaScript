var d = new Date();
var d = d.getHours();;
var m=new Date();
var m=m.getMinutes();
if (m<11) {
	console.log(d +":"+"0"+m);
}
else {
console.log(d +":"+m); }