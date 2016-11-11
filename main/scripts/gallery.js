/* Author: Andreas
 When: November 2016
 Filename: gallery.js*/
/*Author: Andreas
 When: November 2016
 Filename: gallery.js
 Purpose: Javascript for "Bildegalleri".
 */

function getElementLeft(funk) {
    var x = 0;
    x = funk.offsetLeft;
    funk = funk.offsetParent;
    while (funk !== null) {
        x = parseInt(x) + parseInt(funk.offsetLeft);
        funk = funk.offsetParent;
    }
    return x;
}

function getElementTop(funk) {
    var y = 0;
    y = funk.offsetTop;
    funk = funk.offsetParent;
    while (funk != null) {
        y = parseInt(y) + parseInt(funk.offsetTop);
        funk = funk.offsetParent;
    }
    return y;
}

function Large(obj) {
    var bigimage = document.getElementById("bigimage");
    var img = document.createElement("img");
    img.src = obj.src;
    // img.style.maxWidth = '720px';
    // img.style.maxHeight = '480px';

    
    bigimage.innerHTML = '';
    bigimage.appendChild(img);
    //bigimage.style.left = (getElementLeft(obj) - 0) + 'px';
    //bigimage.style.top = (getElementTop(obj) - 300) + 'px';
}

function Out() {
    document.getElementById("bigimage").style.visibility = 'hidden';
}

// Set up default picture
console.log(document.getElementsByClassName("picelement")[0].childNodes[1]);
Large(document.getElementsByClassName("picelement")[0].childNodes[1]);

