/**
 * Created by Thomas on 2016-10-13.
 */


/*
* Generic function for addEventListener
* Note: Is also used by other scripts
* */
var addEvent = function (object, type, callback) {
    if (object == null || typeof(object) == 'undefined') { return false; }
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
    var navbarEl = document.getElementById("navbar");
    if (navbarEl) {
        // Convert nodeList to array
        let childrenArray = Array.prototype.slice.call(navbarEl.childNodes);
        return childrenArray.filter(onlyLi);
    }
}

/*
* Function: showDropdown
* Purpose: Show dropdown menu of collapsed navbar (mobile view)
* */
function showDropdown(event) {
    var children = getListNavbarChildren();
    for (let i=0; i<children.length; i++) {
        children[i].firstChild.classList.toggle("show");
    }
    let navbarChildren = getListNavbarChildren();
    // Is the page a main element?
    if (!document.getElementsByClassName("active").length) {
        navbarChildren[0].firstChild.classList.add("show");
    }
    event.preventDefault(); // Prevent ontouchstart event from triggering onclick
}

/*
* Function: scrollToTop
* Purpose: Scroll user to top of document
* */
function scrollToTop(event) {
    event.preventDefault();
    window.scrollTo(0,0);
    return false;
}

/*
* Function: closeDropdownMenu
* Purpose: Close the dropdown menu when user clicks on menu icon or outside the menu
* */
function closeDropdownMenu(event) {
    if (typeof event.target.matches != "function") {return false;} // Is matches() allowed?
    // Did user click the menu icon? If so, ignore.
    if (event.target.matches("#navbar-menu-icon") || event.target.matches("#navbar-menu-icon *")) {return}
    if (!event.target.matches("#navbar *")) { // Did the user click outside the navigation menu?
        let navbarChildren = getListNavbarChildren();
        if (!navbarChildren.length) {return false;}
        if (navbarChildren[0].firstChild.classList.contains("show")) {
            event.preventDefault();
            for (let i=0; i<navbarChildren.length; i++) {
                navbarChildren[i].firstChild.classList.remove("show");
            }
        }
        // Is this page linked and navbar has an "active" class? If not, display menu.
        if (!document.getElementsByClassName("active").length) {
            navbarChildren[0].firstChild.classList.add("show");
        }
    }
}

/*
* Function: resizePushEl
* Purpose: Set the #navbar-push element height to #navbar height
* */
function resizePushEl() {
    var height = 10;
    if (document.getElementsByClassName("active").length) {
        height = document.getElementsByClassName("active")[0].getBoundingClientRect().height;
        document.getElementById("navbar-menu-icon").style.height = height + "px";
    } else {
        let navbarChildren = getListNavbarChildren();
        navbarChildren[0].firstChild.classList.add("show");
        height = navbarChildren[0].firstChild.getBoundingClientRect().height;
        document.getElementById("navbar-menu-icon").style.height = height + "px";
    }
    height = document.getElementById("navbar").getBoundingClientRect().height;
    document.getElementById("navbar-push").style.height = height + "px";
}


// Attach event listeners
addEvent(window, "resize", resizePushEl);
addEvent(window, "click", closeDropdownMenu);
