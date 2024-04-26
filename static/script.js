// members/static/script.js
const navBar = document.querySelector(".navbar");
const menuBar = document.querySelector(".menu");
const menuLinks = document.querySelectorAll(".menu a");

// close menu when the navbar is clicked
navBar.addEventListener('click', () => {
  menuBar.classList.toggle('active');
})

// close menu when each menuLink is clicked
menuLinks.forEach(menuLink => {
  menuLink.addEventListener('click', () => {
    menuBar.classList.toggle('active');
  })
})
