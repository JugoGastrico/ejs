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
