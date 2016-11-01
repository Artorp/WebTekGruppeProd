/**
 * Created by Thomas on 2016-10-13.
 */
var addEvent = function (object, type, callback) {
    if (object == null || typeof(object) == 'undefined') return;
    if (object.addEventListener) {
        object.addEventListener(type, callback, false);
    } else if (object.attachEvent) {
        object.attachEvent("on" + type, callback);
    } else {
        object["on" + type] = callback;
    }
};

function onlyLi(someEl) {
    return (someEl.tagName == "LI");
}

function getListNavbarChildren() {
    let navbarEl = document.getElementById("navbar");
    if (navbarEl) {
        // Convert nodeList to array
        let childrenArray = Array.prototype.slice.call(navbarEl.childNodes);
        return childrenArray.filter(onlyLi);
    }
}

function showDropdown(menu) {
    console.log("Clicked the menu icon");
    let children = getListNavbarChildren();
    for (let i=0; i<children.length; i++) {
        children[i].firstChild.classList.toggle("show");
    }
    menu.preventDefault(); // Prevent ontouchstart event from triggering onclick
}

// If the user clicks outside the dropdown menu, close the menu
function closeDropdownMenu(event) {
    if (typeof event.target.matches != "function") {return} // Is matches() allowed?
    // Did user click the menu icon? If so, ignore.
    if (event.target.matches("#navbar-menu-icon") || event.target.matches("#navbar-menu-icon *")) {return}
    if (!event.target.matches("#navbar *")) { // Did the user click outside the navigation menu?
        let navbarChildren = getListNavbarChildren();
        if (navbarChildren[0].firstChild.classList.contains("show")) {
            event.preventDefault();
            for (let i=0; i<navbarChildren.length; i++) {
                navbarChildren[i].firstChild.classList.remove("show");
            }
        }
    }
}

function resizePushEl() {
    let height = document.getElementById("navbar").getBoundingClientRect().height;
    document.getElementById("navbar-push").style.height = height + "px";
}

addEvent(window, "resize", resizePushEl);
addEvent(window, "click", closeDropdownMenu);
