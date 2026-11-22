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

// TODO 4: close on Escape when open, then return focus to the button.

// Add a comment above every logical step explaining what it does and why it is needed.
