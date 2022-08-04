// При нажатии стрелки вверх скролл в начало страницы

document.getElementById('scroll-up-arrow').onclick = function scrollUpPage() {
	window.scrollTo(0, 0);
};

// Показать / скрыть пароль

let btnPassword = document.getElementById('js-button-password'),
	inputPass = document.querySelector('.password-input');

btnPassword.onclick = function () {
	if (inputPass.getAttribute('type') === 'password') {
		inputPass.setAttribute('type', 'text');
	} else {
		inputPass.setAttribute('type', 'password');
	}
};

let confirmBtnPassword = document.getElementById('js-button-confirm-password'),
	confirmInputPass = document.querySelector('.confirm-password-input');

confirmBtnPassword.onclick = function () {
	if (confirmInputPass.getAttribute('type') === 'password') {
		confirmInputPass.setAttribute('type', 'text');
	} else {
		confirmInputPass.setAttribute('type', 'password');
	}
};
