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


let item = document.getElementById('item');
let item1 = document.getElementById('item1');
let item2 = document.getElementById('item2');
let item3 = document.getElementById('item3');
let item4 = document.getElementById('item4');
let width = window.innerWidth;
var height = window.innerHeight;
console.log(height)
var y = document.getElementById("me");
var xD = document.querySelector(".me__items");

function mostrar() {
  //Declaración de variables
  let x = document.getElementById('item');
  var width = window.innerWidth;
  var y = document.getElementById("me");
  const item1 = document.getElementById('item1');
  //Coding
  if (width <= 320) {
    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.height = "110vh";
    } else {
      x.style.display = "none";
      y.style.height = "100vh";
    }
  } else if (width <= 360) {
    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.height = "90vh";
    } else {
      x.style.display = "none";
      y.style.height = "78vh";
    }
  } else if ((width <= 375) && (height <= 667)) {
    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.height = "84vh";
    } else {
      x.style.display = "none";
      y.style.height = "75vh";
    }
  } else if (width <= 414) {
    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.height = "70vh";
    } else {
      x.style.display = "none";
      y.style.height = "65vh";
    }
  }
  if (item1.style.display = "block") {
    item1.style.display = "none";
  }
}


function mostrar1() {
  //Coding
  if (width <= 320) {
    if (item1.style.display === "none") {
      item1.style.display = "block";
      y.style.height = "130vh";
    } else {
      item1.style.display = "none";
      y.style.height = "90vh";
    }
  } else if (width <= 360) {
    if (item1.style.display === "none") {
      item1.style.display = "block";
      y.style.height = "105vh";
    } else {
      item1.style.display = "none";
      y.style.height = "78vh";
    }
  } else if ((width <= 375) && (height <= 667)) {
    if (item1.style.display === "none") {
      item1.style.display = "block";
      y.style.height = "100vh";
    } else {
      item1.style.display = "none";
      y.style.height = "75vh";
    }
  } else if (width <= 414) {
    if (item1.style.display === "none") {
      item1.style.display = "block";
      y.style.height = "84vh";
    } else {
      item1.style.display = "none";
      y.style.height = "65vh";
    }
  }
  if (item.style.display = "block") {
    item.style.display = "none";
  }
}

function mostrar2() {
  if (width <= 320) {
    if (item2.style.display === "none") {
      item2.style.display = "block";
      y.style.height = "130vh";
    } else {
      item2.style.display = "none";
      y.style.height = "90vh";
    }
  } else if (width <= 360) {
    if (item2.style.display === "none") {
      item2.style.display = "block";
      y.style.height = "105vh";
    } else {
      item2.style.display = "none";
      y.style.height = "78vh";
    }
  } else if ((width <= 375) && (height <= 667)) {
    if (item2.style.display === "none") {
      item2.style.display = "block";
      y.style.height = "100vh";
    } else {
      item2.style.display = "none";
      y.style.height = "75vh";
    }
  } else if (width <= 414) {
    if (item2.style.display === "none") {
      item2.style.display = "block";
      y.style.height = "84vh";
    } else {
      item2.style.display = "none";
      y.style.height = "65vh";
    }
  }
  if (item1.style.display = "block") {
    item1.style.display = "none";
  }
}

function mostrar3() {
  if (width <= 320) {
    if (item3.style.display === "none") {
      item3.style.display = "block";
      y.style.height = "125vh";
    } else {
      item3.style.display = "none";
      y.style.height = "93vh";
    }
  } else if (width <= 360) {
    if (item3.style.display === "none") {
      item3.style.display = "block";
      y.style.height = "105vh";
    } else {
      item3.style.display = "none";
      y.style.height = "78vh";
    }
  } else if ((width <= 375) && (height <= 667)) {
    if (item3.style.display === "none") {
      item3.style.display = "block";
      y.style.height = "100vh";
    } else {
      item3.style.display = "none";
      y.style.height = "75vh";
    }
  } else if ((width <= 375) && (height <= 900)) {
    if (item3.style.display === "none") {
      item3.style.display = "block";
      y.style.height = "80vh";
    } else {
      item3.style.display = "none";
      y.style.height = "65vh";
    }
  } else if (width <= 414) {
    if (item3.style.display === "none") {
      item3.style.display = "block";
      y.style.height = "84vh";
    } else {
      item3.style.display = "none";
      y.style.height = "65vh";
    }
  }
  if (item2.style.display = "block") {
    item2.style.display = "none";
  }
}

function mostrar4() {
  if (width <= 320) {
    if (item4.style.display === "none") {
      item4.style.display = "block";
      y.style.height = "100vh";
    } else {
      item4.style.display = "none";
      y.style.height = "93vh";
    }
  } else if (width <= 360) {
    if (item4.style.display === "none") {
      item4.style.display = "block";
      y.style.height = "85vh";
    } else {
      item4.style.display = "none";
      y.style.height = "78vh";
    }
  } else if ((width <= 375) && (height <= 667)) {
    if (item4.style.display === "none") {
      item4.style.display = "block";
      y.style.height = "85vh";
    } else {
      item4.style.display = "none";
      y.style.height = "75vh";
    }
  } else if ((width <= 375) && (height <= 900)) {
    if (item4.style.display === "none") {
      item4.style.display = "block";
      y.style.height = "70vh";
    } else {
      item4.style.display = "none";
      y.style.height = "65vh";
    }
  } else if (width <= 414) {
    if (item4.style.display === "none") {
      item4.style.display = "block";
      y.style.height = "74vh";
    } else {
      item4.style.display = "none";
      y.style.height = "65vh";
    }
  }
  if (item3.style.display = "block") {
    item3.style.display = "none";
  }
}

