/**
 * Created by Thomas on 2016-10-18.
 * NOTE! Loading modular content with javascript is generally bad practice
 * This is only done as a proof-of-concept, and with lack of access to server-side software
 * A proper way to implement this is to use server-side rendering for the initial view
 * Instead of using client-side rendering for the initial view
 *
 * Purpose: Load in navbar_part.html and footer_part.html into #navbar-wrap and #footer-wrap
 *
 * This script is loaded at the end of <body>, and will therefore load after the document has been parsed
 */

var xhr_navbar = new XMLHttpRequest();
xhr_navbar.open("get", "modularity/navbar_part.html", true);
xhr_navbar.onreadystatechange = function () {
    if (xhr_navbar.readyState != XMLHttpRequest.DONE) return;
    document.getElementById("navbar-wrap").innerHTML = xhr_navbar.responseText;
    // Set active navbar item class
    let myURL = window.location.pathname; // IE /main/contact.html
    let myFilename = myURL.substring(myURL.lastIndexOf("/")+1); // IE contact.html
    let navbar_items = document.getElementsByClassName("navbar_item");
    for (let i = 0; i < navbar_items.length; i++) {
        if (myFilename == navbar_items[i].getAttribute("href")) {
            navbar_items[i].className = "active";
            break;
        }
    }
};
xhr_navbar.send();


var xhr_footer = new XMLHttpRequest();
xhr_footer.open("get", "modularity/footer_part.html", true);
xhr_footer.onreadystatechange = function () {
    if (xhr_footer.readyState != XMLHttpRequest.DONE) return;
    document.getElementById("footer-wrap").innerHTML = xhr_footer.responseText;
};
xhr_footer.send();
