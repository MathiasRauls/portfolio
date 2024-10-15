const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar-menu')
const navLogo = document.querySelector('#navbar-logo')


// Loader

var preload = document.createElement('div');

preload.className = "preloader";
preload.innerHTML = '<div class="b-ico-preloader"></div><div class="spinner"></div>';
document.body.appendChild(preload);

window.addEventListener('load', function() {
    // Uncomment to fade preloader after document load
    preload.className +=  ' fade';
    setTimeout(function(){
        preload.style.display = 'none';
    },600);
})


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


// // Proj Sizes

// function equalizeHeight() {
//     const container = document.querySelector('.proj-cont');
//     const items = container.querySelectorAll('.proj');
//     let rowHeight = 0;
//     let rowItems = [];

//     items.forEach((item, index) => {
//         item.style.height = 'auto'; // Reset the height
//         rowHeight = Math.max(rowHeight, item.offsetHeight);
//         rowItems.push(item);

//         const isLastItem = index === items.length - 1;
//         const isNewRow = container.clientWidth - item.offsetLeft - item.offsetWidth < 1;

//         if (isNewRow || isLastItem) {
//             rowItems.forEach((rowItem) => (rowItem.style.height = `${rowHeight}px`));
//             rowHeight = 0;
//             rowItems = [];
//         }
//     });
// }

// // Run the function on initial load and on window resize
// window.addEventListener('load', equalizeHeight);
// window.addEventListener('resize', equalizeHeight);


// Make Skills Move
// document.addEventListener("DOMContentLoaded", function () {
// 	const skillElements = document.querySelectorAll(".skill");
// 	const moveAwayDistance = 200;

// 	document.addEventListener("mousemove", function (event) {
// 		const mouseX = event.clientX;
// 		const mouseY = event.clientY;

// 		skillElements.forEach((skillElement) => {
// 		const skillRect = skillElement.getBoundingClientRect();
// 		const skillX = skillRect.left + skillRect.width / 2;
// 		const skillY = skillRect.top + skillRect.height / 2;

// 		const dx = mouseX - skillX;
// 		const dy = mouseY - skillY;
// 		const distance = Math.sqrt(dx * dx + dy * dy);

// 		if (distance < moveAwayDistance) {
// 			const moveX = (moveAwayDistance - distance) * (dx / distance);
// 			const moveY = (moveAwayDistance - distance) * (dy / distance);

// 			skillElement.style.transform = `translate(${-moveX}px, ${-moveY}px)`;
// 		} else {
// 			skillElement.style.transform = "translate(0, 0)"; // Update this line
// 		}
// 		});
// 	});
// });


