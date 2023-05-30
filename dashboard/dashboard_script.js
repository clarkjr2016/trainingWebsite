const menu = document.querySelector("#menu");
const main_left = document.querySelector("#main_left");
const main_right = document.querySelector("#main_right");

function toggleMenu() {
  main_left.style.display = "none";
  main_right.style.width = "100%";
}

menu.addEventListener("click", toggleMenu);
