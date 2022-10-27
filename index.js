// scroll up by click

// document.getElementById('scroll-up-arrow').onclick = function scrollUpPage() {
// 	window.scrollTo(0, 0);
// };

// 	show / hide password

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
	setAdminLinks(3);
}

function initComponents() {
	initPasswordShow();
	initTabs();
	initGameSelector();
	initInvitePlayerSelect();
	initAdminSections();
}

initComponents();
