const btn=document.getElementById("btn");
const menu=document.getElementById("hamburgermenu");
// const ion=document.createElement("ion-icon");
// btn.addEventListener('click',()=>{
//     if (menu.style.display=="none") {
//         menu.style.display="block"
//     //     ion.name='close-outline';
//     //    btn.appendChild(ion);
//     }
//     else{
//         menu.style.display="none";
//     }
// })

btn.addEventListener('click',()=>{
    menu.classList.toggle("hidden");
})