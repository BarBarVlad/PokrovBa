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
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}

// Прокрутка при клике

const menuSubLinks = document.querySelectorAll('.menu__sub-link[data-goto]');
if (menuSubLinks.length > 0) {
	menuSubLinks.forEach(menuSubLink => {
		menuSubLink.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuSubLink = e.target;
		if (menuSubLink.dataset.goto && document.querySelector(menuSubLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuSubLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

			if (iconMenu.classList.contains('_active')) {
				document.body.classList.remove('_lock');
				iconMenu.classList.remove('_active');
				menuBody.classList.remove('_active');
			}

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
}
//прокрутка при переходе на другую страницу