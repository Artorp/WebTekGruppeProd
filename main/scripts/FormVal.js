// Author: Tor Niklas
// Year: 2016
// Purpose: Form validation for jobs_application.html
// Filename: FormVal.js
// Modification history:

// Variabler
let name 	= document.getElementById("navn");
let adress 	= document.getElementById("adresse");
let email 	= document.getElementById("epost");
let interests = document.getElementById("interesser");
let exp 	= document.getElementById("erfaring");
let whyW 	= document.getElementById("hvorforJobb");
let whyB 	= document.getElementById("hvorforBedre");
let knapp 	= document.getElementById("knapp");

// Sjekker om alle feltene er fylt inn og hvis de er det
// kjører funksjonen allFilled(), ellers ber den brukeren
// om å fylle inn alle feltene.
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

// Noterer brukeren om at skjemaet er fylt inn og sender inn
// skjemaet
function allFilled(){
	// Slik som det er nå vil blukeren nå beskjed om
	// at skjemaet er sendt inn før det blir det.
	// Hvis brukeren for eksempel skrir av PC'en før 
	// han/hun trykker OK, vil ikke skjemaet bli sendt 
	// inn. Siden vi ikke har en server til å behandle
	// skjemaene, var dette den letteste måten å gjøre
	// det på.
	alert("Skjemaet er sendt inn");
	document.getElementById("myFormId").submit();
};