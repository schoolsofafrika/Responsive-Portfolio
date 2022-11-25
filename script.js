const navLink = document.querySelectorAll('.nav-link');
const menuButton = document.querySelector('.menu-button');
const navbarLinks = document.querySelector('.navbar-links');
const bodyContainer = document.querySelector('.container');
function navSlide() {
  navbarLinks.classList.toggle('active');
  bodyContainer.style.filter = 'blur(7px)';
}
function close() {
  navbarLinks.classList.remove('active');
  bodyContainer.style.filter = 'blur(0px)';
}
menuButton.addEventListener('click', navSlide);
navLink.forEach((n) => n.addEventListener('click', close));