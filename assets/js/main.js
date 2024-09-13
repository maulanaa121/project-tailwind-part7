// toggle button

const navMenu = document.getElementById('nav-menu')
const navLink = document.querySelectorAll('.nav-link')
const hamburger = document.getElementById('hamburger')
const btnBTT = document.querySelector('.ri-arrow-up-circle-line');


hamburger.addEventListener('click',()=>{
    navMenu.classList.toggle("nav-is-open")
    hamburger.classList.toggle("ri-close-large-line")
})

navLink.forEach(link => {
    link.addEventListener("click",()=> {
        navMenu.classList.toggle("nav-is-open")
        hamburger.classList.toggle("ri-close-large-line")
    })
})

window.addEventListener('scroll',()=>{
    windowPosition = window.scrollY > 300;
    btnBTT.classList.toggle('.btn-is-active',windowPosition)
})