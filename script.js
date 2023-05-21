const hamburgerIcon = document.createElement("img"); //creating an image element
hamburgerIcon.src = "menu.svg"; //setting the source of the image
hamburgerIcon.alt = "menu icon"; //setting the alt text of the image
hamburgerIcon.classList.add("hamburger-icon"); //adding a class to the image

const navBar = document.querySelector(".nav-bar-links"); //selecting the nav element
navBar.appendChild(hamburgerIcon); //appending the image to the nav element

const navBarLinks = document.querySelectorAll(".nav-link"); //selecting all the nav links

hamburgerIcon.addEventListener("click", () => {
  for (let i = 0; i < navBarLinks.length; i++) {
    //looping through all the nav links
    navBarLinks[i].classList.toggle("active"); //toggling the active class of all the nav links
  }
});
