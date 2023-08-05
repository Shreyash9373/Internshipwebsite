const btn=document.getElementById("btn");
const menu=document.getElementById("hamburgermenu");
// const ion=document.createElement("ion-icon");
btn.addEventListener('click',()=>{
    if (menu.style.visibility=="hidden") {
        menu.style.visibility="visible";
    }
    else{
        menu.style.visibility="hidden";
    }
})

// btn.addEventListener('click',()=>{
//     menu.classList.toggle("hidden");
// })

// // Wait for the DOM to be fully loaded
// document.addEventListener("DOMContentLoaded", function () {
//     // Get the hamburger_menu div
//     const hamburgerMenu = document.querySelector(".hamburger_menu");
  
//     // Hide the hamburger_menu div by adding the "hidden" class
//     hamburgerMenu.classList.add("hidden");
//   });
  