// Get references to the toggle button and the navigation links
var togglebtn = document.querySelector(".togglebtn");
var nav = document.querySelector(".navlinks");

// Toggle the "open" class to show/hide the mobile navigation menu
togglebtn.addEventListener("click", function() {
    this.classList.toggle("click");
    nav.classList.toggle("open");
});


