document.getElementById("icon").addEventListener('click',() => {    
     navToggle();
     alert();    
});


let navToggle = () => {
    let x = document.getElementById("nav-bar-links");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  let alert = () => {
    // var x = document.getElementById("myDIV");
    // if (window.getComputedStyle(x).visibility === "hidden") {
    //   // Do something..
    // }
        alert("I am an alert box!");
  }
