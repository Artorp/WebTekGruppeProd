// Author: Tor Niklas
// Year: 2016
// Purpose: Form validation for jobs_application.html
// Filename: FormVal.js
// Modification history:

// Variabler
var name 	= document.getElementById("navn");
var adress 	= document.getElementById("adresse");
var email 	= document.getElementById("epost");
var interests = document.getElementById("interesser");
var exp 	= document.getElementById("erfaring");
var whyW 	= document.getElementById("hvorforJobb");
var whyB 	= document.getElementById("hvorforBedre");
var knapp 	= document.getElementById("knapp");

// Sjekker om alle feltene er fylt inn og hvis de er det
// kjører funksjonen allFilled(), ellers ber den brukeren
// om å fylle inn alle feltene.
function mcheck(event){
	// Sjekker om alt er fylt ut
	a = name.value		!= "";
	b = adress.value 	!= "";
	c = email.value		!= "";
	d = interests.value	!= "";
	e = exp.value		!= "";
	f = whyW.value		!= "";
	g = whyB.value		!= "";
	if((a)&&(b)&&(c)&&(d)&&(e)&&(f)&&(g)){
		allFilled(event);
	}
	else{
		knapp.innerHTML = "Du må fylle inn alle feltene.";
		knapp.style.visibility = "visible";
	}
}

// Noterer brukeren om at skjemaet er fylt inn og sender inn
// skjemaet
function allFilled(event){
	// Slik som det er nå vil brukeren få beskjed om at dette er en demoside som ikke har serverkapasitet
	// til å ta i mot søknaden. Dersom websiden var ekte ville søknaden bli sendt til en server.

	alert("Takk for din søknad. Dessverre er dette en demoside som ikke mottar søknader. Ta kontakt med Arkaden Kafé dersom du tror dette er den ekte siden til Arkaden Kafé. Ønsker deg en fin dag videre!");
	if (event) {
		event.preventDefault();
	}
	/*document.getElementById("myFormId").submit();*/
};

addEvent(document.getElementById("myFormId"), "submit", mcheck);
