const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".menu-links");
  const navLinks = document.querySelectorAll(".menu-links li");
  burger.addEventListener("click", () => {
    nav.classList.toggle("menu-active");
    //animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.3s ease forwards ${
          index / 7 + 0.4
        }s`;
        console.log(index / 7);
      }
    });
    //Burger animation
    burger.classList.toggle("toggle");
  });
};
navSlide();


let x = document.querySelector(".testeo");
let y = document.querySelector(".testeo2");

x.addEventListener("click", function(){
  console.log("te")
  if(y.style.display === "none"){
    y.style.display = "block"
  } else {
    y.style.display = "none"
  }
})

function mostrar(){
  let x = document.getElementById('item')
 
  if (x.style.display === "none"){
    x.style.display = "block"
  } else {
    x.style.display = "none"
  }
}
function mostrar1(){
  let x = document.getElementById('item1')
 
  if (x.style.display === "none"){
    x.style.display = "block"
  } else {
    x.style.display = "none"
  }
}