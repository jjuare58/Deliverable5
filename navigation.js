const button = document.querySelector(".menu-button");
const list = document.querySelector("#primary-nav");


// Add the "js" class to <html> so the CSS knows JavaScript is working
document.documentElement.classList.add("js");

// Show the Menu button (it starts hidden in the HTML)
button.hidden = false;

// Start with the menu closed on small screens
list.dataset.open = "false";