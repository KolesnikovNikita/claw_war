// scroll up by click

document.getElementById('scroll-up-arrow').onclick = function scrollUpPage() {
	window.scrollTo(0, 0);
};

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

function initComponents() {
	initPasswordShow();
	initTabs();
}

initComponents();
