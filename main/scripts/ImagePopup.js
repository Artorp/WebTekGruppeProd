
function addModal() {
	let node1 = document.createElement('div');
	node1.setAttribute('id','myModal')
	node1.setAttribute('class','modal')
	
	let node2 = document.createElement('span');
	node2.setAttribute('class', 'close');
	node2.setAttribute('onclick', "document.getElementById('myModal').style.display='none'");
	
	let textnode = document.createTextNode('×');
	node2.appendChild(textnode);
	
	let node3 = document.createElement('img');
	node3.setAttribute('class','modal-content')
	node3.setAttribute('id', 'img01')
	
	node1.appendChild(node2);
	node1.appendChild(node3);
	
	document.body.appendChild(node1)
	
	
	return node1;
}

var ModalEl = addModal();


classname = document.getElementsByClassName('img');



for (let i = 0; i < classname.length; i++) {
	classname[i].addEventListener('click', getID)
}


function modalPopup (id){
	// Get the modal
	console.log('hei')
	var modal = document.getElementById('myModal');

	// Get the image and insert it inside the modal
	var img = document.getElementById(id);
	console.log(img)
	var modalImg = document.getElementById("img01");
	modal.style.display = "block";
	modalImg.src = document.getElementById(id).src;

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() { 
	  modal.style.display = "none";
	}

}

function getID () {
	 id = this.id
	 modalPopup(id)
}
