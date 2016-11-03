// Author: Tor Niklas
// Year: 2016
// Purpose: Form validation for jobs_application.html
// Filename: FormVal.js
// Modification history:


let name 	= document.getElementById("navn");
let adress 	= document.getElementById("adresse");
let email 	= document.getElementById("epost");
let interests = document.getElementById("interesser");
let exp 	= document.getElementById("erfaring");
let whyW 	= document.getElementById("hvorforJobb");
let whyB 	= document.getElementById("hvorforBedre");
let knapp =document.getElementById("knapp");

function mcheck(){
	// Sjekker om alt er fylt ut
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
		knapp.innerHTML = "Du må fylle inn alle feltene.";
		knapp.style.visibility = "visible"
	};
};

//Printer ut ting i konsollen i stede for å sende det inn til en server
function allFilled(){
	console.log("Information sent to server:");
	console.log("Name: " + name.value);
	console.log("Adress: " + adress.value);
	console.log("Email: " + email.value);
	console.log("Interests: " + interests.value);
	console.log("Experience: " + exp.value);
	console.log("Why work here: " + whyW.value);
	console.log("Why better: " + whyB.value);
	document.getElementById("myFormId").submit();
	alert("Skjemaet er senndt inn");
};