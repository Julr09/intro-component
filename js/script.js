const form = document.getElementById('form');
const input = document.getElementsByClassName('input');

form.addEventListener('submit', (e) => {
	for (let i = 0; i < input.length; i++) {
		if (input[i].value === '') {
			input[i].parentElement.classList.add('error');
			e.preventDefault();
		} else {
			input[i].parentElement.classList.remove('error');
			if (input[i].type === 'email') {
				if (validateEmail(input[i].value)) {
					input[i].parentElement.classList.remove('error');
				} else {
					input[i].parentElement.classList.add('error');
					e.preventDefault();
				}
			}
		}
	}
})

const validateEmail = (email) => {
	const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (!regex.test(email)) {
		return false;
	}
	return regex.test(email);
}