var closeModalTimeout = false;

function closeModal() {
    var theModal = document.getElementById('myModal');
    if (theModal.style.display != "none" && closeModalTimeout) {
        closeModalTimeout = false;
        theModal.classList.add("modal-hidden");
    }
}

addEvent(window, "click", closeModal); // If user clicks while modal is open, close it

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


    return node1;
}

var ModalEl = addModal();


var modal_images_HTMLCol = document.getElementsByClassName('popup-picture');


for (let i = 0; i < modal_images_HTMLCol.length; i++) {
    modal_images_HTMLCol[i].addEventListener('click', modalPopup);
}


function modalPopup(event) {
    // Get the image and insert it inside the modal
    var image_src;
    if (event.target.hasAttribute("data-HD-src")) {
        image_src = event.target.getAttribute("data-HD-src");
    } else {
        image_src = event.target.src;
    }
    ModalEl.childNodes[1].src = image_src;
    ModalEl.classList.remove("modal-hidden");

    // Prevent clicks from instantly closing the modal
    setTimeout(function () {
        closeModalTimeout = true;
    }, 100);
}
