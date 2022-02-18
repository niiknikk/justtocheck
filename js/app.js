// Dynamic Footer Year
let year = document.getElementById('year');
let date = new Date().getFullYear();
year.innerText = date;

// Mobile Navigation Toggle
const nav = document.querySelector('nav')
const hamburger = document.querySelector('.hamburger')

hamburger.addEventListener('click', () => {
        console.log(nav)
        nav.classList.toggle('active')
})