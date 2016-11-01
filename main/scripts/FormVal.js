let name 	= document.getElementById("navn");
let adress 	= document.getElementById("adresse");
let email 	= document.getElementById("epost");
let interests = document.getElementById("interesser");
let exp 	= document.getElementById("erfaring");
let whyW 	= document.getElementById("hvorforJobb");
let whyB 	= document.getElementById("hvorforBedre");


function mcheck(){
	// console.log("ME")
	a = name.value		!= "";
	b = adress.value 	!= "";
	c = email.value		!= "";
	d = interests.value	!= "";
	e = exp.value		!= "";
	f = whyW.value		!= "";
	g = whyB.value		!= "";
	if((a)&&(b)&&(c)&&(d)&&(e)&&(f)&&(g)){
		allFilled();
	}
	else{
		console.log("NAY");
	};
};
function allFilled(){
	console.log("Information sent to server:");
	console.log("Name: " + name.value);
	console.log("Adress: " + adress.value);
	console.log("Email: " + email.value);
	console.log("Interests: " + interests.value);
	console.log("Experience: " + exp.value);
	console.log("Why work here: " + whyW.value);
	console.log("Why better: " + whyB.value);
	alert("Skjemaet er senndt inn")
};