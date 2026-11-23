// Finding the Menu button and the links list so the code can use them
const button = document.querySelector(".menu-button");
const list = document.querySelector("#primary-nav");

// Adding "js" to <html> so the CSS knows JavaScript is working
document.documentElement.classList.add("js");

// Showing the Menu button, since it starts hidden in the HTML
button.hidden = false;

// Starting with the menu closed on small screens
list.dataset.open = "false";

// One function for opening or closing the menu.
// It changes what screen readers hear (aria-expanded) and what
// people see (data-open) together, so they never get out of sync.
function setMenu(open) {
  button.setAttribute("aria-expanded", String(open));
  list.dataset.open = String(open);
}

// When someone clicks the button (or presses Enter/Space),
// flip the menu: closed becomes open, open becomes closed
button.addEventListener("click", () => {
  setMenu(button.getAttribute("aria-expanded") !== "true");
});

// When Escape is pressed and the menu is open, close it
// and move focus back to the button so the keyboard user isn't lost
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" &&
      button.getAttribute("aria-expanded") === "true") {
    setMenu(false);
    button.focus();
  }
});
