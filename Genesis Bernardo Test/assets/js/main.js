// Select DOM Items
const menuBtn = document.querySelector('.burger-btn');
const sideNav = document.querySelector('.side-nav');
const navItems = document.querySelectorAll('.nav-item');

// Set Initial State of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
	if(!showMenu) {
		menuBtn.classList.add('close');
        sideNav.classList.add('show');
		// Set Menu State
		showMenu = true;
	} else {
		menuBtn.classList.remove('close');
        sideNav.classList.remove('show');
		//Set Menu State
		showMenu = false;
	}
}



