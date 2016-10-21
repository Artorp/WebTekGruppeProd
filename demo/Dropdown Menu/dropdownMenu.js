/**
 * Created by Thomas on 2016-10-21.
 */

function showDropdown(menu) {
    if (menu.parentNode.parentNode.hasChildNodes()) {
        let children = menu.parentNode.parentNode.childNodes;
        for (let i = 0; i < children.length; i++) {
            if (children[i].tagName == "LI") {
                children[i].firstChild.classList.toggle("show");
            }
        }
    }
}

function closeDropdownMenu(event) {
    if (typeof event.target.matches != "function") {return}
    if (!event.target.matches("#navigation *")) { // Did the user click outside the navigation menu?
        document.getElementById("navbar-menu-icon").firstChild.click();
    }
}

window.addEventListener("click", closeDropdownMenu, false);

