const btn=document.getElementById("btn");
const menu=document.getElementById("hamburgermenu");
btn.addEventListener('click',()=>{
    if (menu.style.visibility=="hidden") {
        menu.style.visibility="visible";
    }
    else{
        menu.style.visibility="hidden";
    }
})

