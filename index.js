// scroll up by click

function scrollUpPage() {
	var scrollUp = document.getElementById('scroll-up-arrow');
	if (!scrollUp) return;
	scrollUp.addEventListener('click', function () {
		window.scrollTo(0, 0);
	});
}

// show / hide password

function initPasswordShow() {
	const passwordInputEyes = document.querySelectorAll(
		'[data-component=PasswordInputEye]'
	);
	passwordInputEyes.forEach(function (eyeButton) {
		eyeButton.addEventListener('click', function () {
			const passwordInputId = eyeButton.dataset.passwordInputId;

			const passwordInput = document.getElementById(passwordInputId);

			if (passwordInput.getAttribute('type') === 'password') {
				passwordInput.setAttribute('type', 'text');
			} else {
				passwordInput.setAttribute('type', 'password');
			}
		});
	});
}

function initTabs() {
	const tabContainers = document.querySelectorAll('.tabs');
	tabContainers.forEach(function (tabContainer) {
		function switchTab(newIndex) {
			tabContent.forEach(function (tabPanel, index) {
				tabPanel.hidden = !(index === newIndex);
			});

			tabLinks.forEach(function (tabLink, index) {
				if (index === newIndex) {
					tabLink.classList.add('active');
				} else {
					tabLink.classList.remove('active');
				}
			});
		}

		const tabLinks = tabContainer.querySelectorAll('.tab-links');
		const tabContent = tabContainer.querySelectorAll('.tab-content');

		switchTab(0);

		tabLinks.forEach(function (tabItem, index) {
			tabItem.addEventListener('click', function (event) {
				event.preventDefault();
				switchTab(index);
			});
		});
	});
}

function initGameSelector() {
	const links = document.querySelectorAll('[data-component=GameSelectorItem]');

	function switchGame(gameIndex) {
		links.forEach(function (link, index) {
			const gameSection = document.getElementById(link.dataset.show);
			if (gameIndex === index) {
				links[gameIndex].classList.add('game-selector-item-active');
				gameSection.hidden = false;
			} else {
				link.classList.remove('game-selector-item-active');
				gameSection.hidden = true;
			}
		});
	}

	links.forEach(function (link, index) {
		link.addEventListener('click', function (event) {
			event.preventDefault();

			switchGame(index);
		});
	});

	switchGame(0);
}

function initInvitePlayerSelect() {
	var modalLinks = document.querySelectorAll('.dropdown-item');

	modalLinks.forEach(function (modalLink) {
		modalLink.addEventListener('click', function (event) {
			event.preventDefault();
			var modalNode = document.getElementById(modalLink.dataset.value);
			var modalComponent = new bootstrap.Modal(modalNode);
			modalComponent.show();
		});
	});
}

function initAdminSections() {
	var adminButtons = document.querySelectorAll('.admin-tab-link');
	function setAdminLinks(sectionIndex) {
		adminButtons.forEach(function (adminButton, index) {
			var activeSection = document.getElementById(
				adminButton.dataset.adminPage
			);
			if (sectionIndex === index) {
				activeSection.hidden = false;
			} else {
				activeSection.hidden = true;
			}
		});
	}
	adminButtons.forEach(function (adminButton, index) {
		adminButton.addEventListener('click', function () {
			setAdminLinks(index);
		});
	});
	setAdminLinks(0);
}

function initChatSearchInput() {
	var searchButton = document.querySelector('.search-button');
	var chatHeader = document.querySelector('.chat-title-container');
	var searchInput = document.querySelector('.input-search-container');
	function setChatItemsVisibility() {
		if (!searchInput) return;
		searchButton.addEventListener('click', function () {
			if (searchInput.hidden == false) {
				searchInput.hidden = true;
				chatHeader.hidden = false;
			} else {
				chatHeader.hidden = true;
				searchInput.hidden = false;
			}
		});
	}

	setChatItemsVisibility();
}

function initTabLinkStyle() {
	var links = document.querySelectorAll('.admin-tab-link');
	function changeLinkStyle() {
		for (let index = 0; index < links.length; index++) {
			links[index].addEventListener('click', function () {
				var current = document.getElementsByClassName('link-active');
				current[0].className = current[0].className.replace(' link-active', '');
				this.className += ' link-active';
			});
		}
	}
	changeLinkStyle();
}

function selectImage() {
	const navItems = document.querySelectorAll('.slider-nav-item');
	const mainImage = document.querySelector('.slider-main-image');

	navItems.forEach(item => {
		item.addEventListener('click', () => {
			navItems.forEach(navItem => {
				navItem.classList.remove('selected-background');
			});
			item.classList.add('selected-background');
			mainImage.src = item.src;
		});
	});
}

function dropDownMenu() {
	const dropdownBtn = document.querySelector('.edit-album');

	dropdownBtn.addEventListener('click', () => {
		const dropdownContent = document.querySelector('.dropdown-content');
		dropdownContent.classList.toggle('show-menu');
	});
}

function initComponents() {
	scrollUpPage();
	initPasswordShow();
	initTabs();
	initGameSelector();
	initInvitePlayerSelect();
	initAdminSections();
	initChatSearchInput();
	initTabLinkStyle();
	selectImage();
	dropDownMenu();
}

initComponents();
