// members/static/script.js
const navBar = document.querySelector(".navbar");
const menuBar = document.querySelector(".menu");

navBar.addEventListener('click', () => {
  menuBar.classList.toggle('active');
})