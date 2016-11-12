/* Author: Hans, Thomas
Year: 2016
Purpose: JavaScript for the modal popup pictures
Filename: picturePopup.js */

/*Inspirasjon hentet fra W3-Schools sin tutorial om modale bilder.
http://www.w3schools.com/howto/howto_css_modal_images.asp

Koden er endret flere steder for å legge til funksjonalitet til å passe siden vår bedre. */ 

addEvent(window, "click", closeModal); 


//Funksjon som legger til HTML'en som er nødvendig for de modale bildene inn i det relavante dokumentet
function addModal() {
    let node1 = document.createElement('div');
    node1.setAttribute('id', 'myModal');
    node1.classList.add("modal");
    node1.classList.add("modal-hidden");

    let node2 = document.createElement('span');
    node2.setAttribute('class', 'close');

    let textnode = document.createTextNode('×');
    node2.appendChild(textnode);

    let node3 = document.createElement('img');
    node3.setAttribute('class', 'modal-image-element');

    node1.appendChild(node2);
    node1.appendChild(node3);

    document.body.appendChild(node1);


    return [node1, node3];
}

var ModalEl;
var ModalImgEl;
[ModalEl, ModalImgEl] = addModal();



var modal_images_HTMLCol = document.getElementsByClassName('popup-picture');


for (let i = 0; i < modal_images_HTMLCol.length; i++) {
    modal_images_HTMLCol[i].addEventListener('click', modalPopup);
}


var closeModalTimeout = false;


function modalPopup(event) {
    var image_src;
    if (event.target.hasAttribute("data-HD-src")) {
        image_src = event.target.getAttribute("data-HD-src");
    } else {
        image_src = event.target.src;
    }
    ModalEl.classList.remove("modal-hidden");
    ModalImgEl.src = image_src;

    ModalImgEl.classList.add("modal-animate");
    var newElement = ModalImgEl.cloneNode(true);
    ModalImgEl.parentNode.replaceChild(newElement, ModalImgEl);
    ModalImgEl = newElement;

    setTimeout(function () {
        closeModalTimeout = true;
    }, 100);
}


function closeModal() {
    if (!ModalEl.classList.contains("modal-hidden") && closeModalTimeout) {
        closeModalTimeout = false;
        ModalEl.classList.add("modal-hidden");
        ModalImgEl.classList.remove("modal-animate");
    }
}