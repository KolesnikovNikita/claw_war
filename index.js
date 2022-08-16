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

function initComponents() {
	initPasswordShow();
}

initComponents();
