function calcSupply (age,maxAge,dayFood) {
	
	var allFood = ((maxAge-age)*365)*dayFood;
	console.log(allFood+" of chocolate would be enough until I am " +maxAge+ " years old.");
}
calcSupply(38,118,0.5);