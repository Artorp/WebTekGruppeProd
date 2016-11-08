var closeModalTimeout = false;

function closeModal() {
	var theModal = document.getElementById('myModal');
	if (theModal.style.display != "none" && closeModalTimeout) {
		closeModalTimeout = false;
		theModal.style.display = "none";
	}
}

addEvent(window, "click", closeModal);

function addModal() {
	let node1 = document.createElement('div');
	node1.setAttribute('id','myModal');
	node1.setAttribute('class','modal');
	
	let node2 = document.createElement('span');
	node2.setAttribute('class', 'close');
	
	let textnode = document.createTextNode('×');
	node2.appendChild(textnode);
	
	let node3 = document.createElement('img');
	node3.setAttribute('class','modal-content');
	node3.setAttribute('id', 'img01');
	
	node1.appendChild(node2);
	node1.appendChild(node3);
	
	document.body.appendChild(node1);
	
	
	return node1;
}

var ModalEl = addModal();


classname = document.getElementsByClassName('popup-picture');



for (let i = 0; i < classname.length; i++) {
	classname[i].addEventListener('click', getID)
}


function modalPopup (id){
	// Get the modal
	var modal = document.getElementById('myModal');

	// Get the image and insert it inside the modal
	var img = document.getElementById(id);
	var modalImg = document.getElementById("img01");
	modal.style.display = "block";
	modalImg.src = document.getElementById(id).src;

}

function getID () {
	 id = this.id;
	 modalPopup(id);
	setTimeout(function () { closeModalTimeout = true; },100);
}
