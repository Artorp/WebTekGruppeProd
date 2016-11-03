/* Author: Andreas
When: November 2016
Filename: gallery.js*/

/*Javascript for gallery.html (bildegalleri)

*/
function getElementLeft(funk)
{
    var x = 0;

   
    x = funk.offsetLeft;

    
    funk = funk.offsetParent;
    

    while(funk != null)
    {
        x = parseInt(x) + parseInt(funk.offsetLeft);
        funk = funk.offsetParent;
    }
    return x;
}

function getElementTop(funk)
{
    var y = 0;


    y = funk.offsetTop;


    funk = funk.offsetParent;


    while(funk != null)
    {
        y = parseInt(y) + parseInt(funk.offsetTop);
        funk = funk.offsetParent;
    }

    return y;
}

function Large(obj)
{
    var bigimage=document.getElementById("bigimage");
    bigimage.style.visibility='visible';
    var img = document.createElement("img");

    img.src=obj.src;
    img.style.width='720px';
    img.style.height='480px';

    if(img.addEventListener){
        img.addEventListener('mouseout',Out,false);
    } else {
        img.attachEvent('onmouseout',Out);
    }

    bigimage.innerHTML='';
    bigimage.appendChild(img);
    bigimage.style.left=(getElementLeft(obj)-0) +'px';
    bigimage.style.top=(getElementTop(obj)-300) + 'px';
}

function Out()
{
    document.getElementById("bigimage").style.visibility='hidden';
}

// All code below this line is not working properly at the moment (buttons)
var knappebilder = new Array(5);
knappebilder[0] = "img/arkademaskiner.jpg";
knappebilder[1] = "img/cocktail_cab.jpg";
knappebilder[2] = "img/pinball.jpg";
knappebilder[3] = "img/kakerkaffe.jpg";
knappebilder[4] = "img/Spaceinvaders.jpg";


var antallbilder = 4;
var currentbilde= 1;

function  backwards() {
    var im=document.getElementById("bilde1");
    if(curimg>0)
    {
        im.src = images[curimg-1];
        curimg = curimg - 1;
    }else{
        alert("This is the first image");
    }


}

function gofwd(){
    var im=document.getElementById("image");
    if(curimg < numimg){
        im.src = images[curimg+1];
        curimg = curimg + 1;
    }else{
        alert("This is the last image");
    }


}