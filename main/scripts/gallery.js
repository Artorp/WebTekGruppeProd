/* Author: Andreas
 When: November 2016
 Filename: gallery.js*/
/*Author: Andreas
 When: November 2016
 Filename: gallery.js
 Purpose: Javascript for "Bildegalleri".
 */



function Large(obj) {
    var bigimage = document.getElementById("bigimage");
    var img = document.createElement("img");
    img.src = obj.src;

    // img.style.maxHeight = '480px' Decided to style this with the CSS (gallery.css) instead;
    //max-width: 100% is also styled in CSS;

    bigimage.innerHTML = '';
    bigimage.appendChild(img);
    //bigimage.style.left = (getElementLeft(obj) - 0) + 'px'; (See CSS)
    //bigimage.style.top = (getElementTop(obj) - 300) + 'px'; (See CSS)
}

function Out() {
    document.getElementById("bigimage").style.visibility = 'hidden';
}

// Set up default picture ("0" is the first picture)
console.log(document.getElementsByClassName("picelement")[0].childNodes[1]);
Large(document.getElementsByClassName("picelement")[0].childNodes[1]);

