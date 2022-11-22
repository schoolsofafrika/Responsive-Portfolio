const navSlide = () => {
    const menuButton = document.querySelector('.menu-button');
    const navbarLinks = document.querySelector('.navbar-links');

    menuButton.addEventListener('click', () => {
        navbarLinks.classList.toggle('active')
    })
}
navSlide();