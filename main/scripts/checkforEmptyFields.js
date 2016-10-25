let name = document.getElementById("navn");
let adress = document.getElementById("adresse");
let interests = document.getElementById("interesser");
let exp = document.getElementById("erfaring");
let whyW = document.getElementById("hvorforJobb");
let whyB = document.getElementById("hvorforBedre");


function mcheck(){
	console.log("ME")
	a = name.innerHTML 		!= "";
	b = adress.innerHTML 	!= "";
	c = interests.innerHTML	!= "";
	d = exp.innerHTML		!= "";
	e = whyW.innerHTML		!= "";
	f = whyB.innerHTML		!= "";
	g = (a && b);
	if((a) && (b) && (c) && (d) && (e) && (f)){
		console.log("YEY");
	}
	else{
		console.log("NAY");
	}
}

console.log("HI")