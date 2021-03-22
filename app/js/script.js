const menuIcon = document.querySelector('#menu-icon');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const mobileMenu = document.querySelector('.mobile-menu');
const body = document.querySelector('body');

function changeMenu() {

    if (header.classList.contains('open')) { // close menu
        header.classList.remove('open');
        overlay.classList.remove('fade-in');
        overlay.classList.add('fade-out');
        mobileMenu.classList.remove('fade-in');
        mobileMenu.classList.add('fade-out');
        body.classList.remove('noscroll');
    } else { // open menu
        header.classList.add('open');
        overlay.classList.remove('fade-out');
        overlay.classList.add('fade-in');
        mobileMenu.classList.remove('fade-out');
        mobileMenu.classList.add('fade-in');
        body.classList.add('noscroll');
    }
}

// when menuIcon is clicked, run the changeMenu function
menuIcon.addEventListener('click', changeMenu);