/*Author: Andreas
 When: November 2016
 Filename: gallery.js
 Purpose: Javascript for "Bildegalleri".
 */

function Large(obj) { // Purpose: Create a big image that serve as the currently viewed picture.
    var bigimage = document.getElementById("bigimage");
    var img = document.createElement("img");
    img.src = obj.src;



    bigimage.innerHTML = '';
    bigimage.appendChild(img);

}

function Out() {
    document.getElementById("bigimage").style.visibility = 'hidden';
}

// Set up default picture ("0" is the first picture. Could also use number between 1-4)
Large(document.getElementsByClassName("picelement")[0].childNodes[1]);

