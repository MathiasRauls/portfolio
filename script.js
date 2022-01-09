const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar-menu')
const navLogo = document.querySelector('#navbar-logo')

// Display Mobile Menu

const moblieMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}

menu.addEventListener('click', moblieMenu);

// Show active menu when scrolling
const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-pg');
    const aboutMenu = document.querySelector('#about-pg');
    const projMenu = document.querySelector('#proj-pg');
    const contMenu = document.querySelector('#cont-pg');
    let scrollPos = window.scrollY;
    let siteHeight = document.documentElement.scrollHeight;

    // Adds highlights class to menu items

    if (window.innerWidth > 960 && scrollPos < 600) {
        homeMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return
    } else if (window.innerWidth > 960 && scrollPos < 2000) {
        aboutMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        projMenu.classList.remove('highlight');
        return
    } else if (window.innerWidth > 960 && scrollPos > 2100 && scrollPos < 3000) {
        projMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        contMenu.classList.remove('highlight');
        return
    } else if (window.innerWidth > 960 && scrollPos > 3000) {
        contMenu.classList.add('highlight');
        projMenu.classList.remove('highlight');
        return
    }
    
    

    if ((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
        elem.classList.remove('highlight');
        return
    }
}

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

// Close Mobile Menu When Selection Clicked

const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if(window.innerWidth <= 940 && menuBars){
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    }
}

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);