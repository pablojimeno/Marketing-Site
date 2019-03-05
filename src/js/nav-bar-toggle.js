let navBar = document.querySelector(".doc-nav");
let navButton = document.getElementById("features-nav-button");

if (document.body.classList.contains("feature-nav-open")) {
    navButton.classList.add("arrow-up");
}

function open() {
    document.body.classList.add("feature-nav-open");
    navButton.classList.add("arrow-up");
}

function close() {
    document.body.classList.remove("feature-nav-open");
    navButton.classList.remove("arrow-up");
}

navButton.addEventListener("click", function (event) {
    if (window.innerWidth > 930) {
        if (document.body.classList.contains("feature-nav-open")) {
            close();
        } else {
            open();
        }

        event.preventDefault();
        return false;
    }
});