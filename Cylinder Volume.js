function calcCylinderVol (r,h) {
	var vol = Math.PI * (r*r)*h;
	console.log(vol.toFixed(3));
}
calcCylinderVol(2,4)