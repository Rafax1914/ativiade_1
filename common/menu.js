const hamburguer = document.querySelector(".hamburguer");
const navMenu= document.querySelector(".nav-menu");
const navLink=document.querySelector(".nav-link");
const acesso= document.querySelector(".acesso");
const poster= document.querySelector(".poster");

hamburguer.addEventListener("click",()=>{
    hamburguer.classList.toggle('active');
    navMenu.classList.toggle('active');
    navLink.classList.toggle('active');
    acesso.classList.toggle('active');
    poster.classList.toggle('active');
})