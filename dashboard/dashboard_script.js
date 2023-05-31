const menu = document.querySelector("#menu");
const main_left = document.querySelector("#main_left");
const main_right = document.querySelector("#main_right");

function toggleMenu() {
  main_left.style.display = "none";
  main_right.style.width = "100%";
  main_right.style.gridColumn = "1 / span 2"; // this sets the right element to take up the whole width of the page after the side bar has been removed
}

menu.addEventListener("click", toggleMenu);
