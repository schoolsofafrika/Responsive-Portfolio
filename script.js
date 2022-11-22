const navLink = document.querySelectorAll('.nav-link');
const menuButton = document.querySelector('.menu-button');
const navbarLinks = document.querySelector('.navbar-links');
function navSlide() {
  navbarLinks.classList.toggle('active');
}
function close() {
  navbarLinks.classList.remove('active');
}
menuButton.addEventListener('click', navSlide);
navLink.forEach((n) => n.addEventListener('click', close));
