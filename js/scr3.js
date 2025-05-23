"use strict"

const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBarry: function () {
		return navigator.userAgent.match(/BlackBarry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMoble/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBarry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows());
	}
};

if (isMobile.any()) {
	document.body.classList.add('_touch');

	let MenuArrows = document.querySelectorAll('.menu__arrow');
	if (MenuArrows.length > 0) {
		for (let index = 0; index < MenuArrows.length; index++) {
			const MenuArrow = MenuArrows[index];
			MenuArrow.addEventListener("click", function (e) {
				MenuArrow.parentElement.classList.toggle('_active');
			})
		}
	}
} else {
	document.body.classList.add('_pc');
}


// Меню бургер
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
/*const pageMolitvs = document.querySelector('.page_molitvs');
*/if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
/*		pageMolitvs.classList.toggle('_lock');
*/	});
}

// Прокрутка при клике
// var help;
// console.log(help);
// if (help != 0 ) {
// 	console.log(help);
// 	window.scrollTo({
// 	top: help,
// 	behavior: "smooth"
// 	});
// 	help = 0;
// }
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		//console.log(window.location)
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
			// help = gotoBlockValue;
			//console.log(gotoBlockValue);
			if (iconMenu.classList.contains('_active')) {
				document.body.classList.remove('_lock');
				iconMenu.classList.remove('_active');
				menuBody.classList.remove('_active');
/*				pageMolitvs.classList.remove('_active');
*/			}

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
}