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



addEvent(window, "resize", function (event) {
    let height = document.getElementsByClassName("navbar")[0].offsetHeight;
    document.getElementsByClassName("navbar-push")[0].style.height = (height - 1) + "px";
});