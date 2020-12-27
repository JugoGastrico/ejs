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
