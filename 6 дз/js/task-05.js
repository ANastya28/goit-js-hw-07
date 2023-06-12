const refs = {
    input: document.querySelector(`#name-input`),
    nameInput: document.querySelector(`#name-output`),
};

refs.input.addEventListener(`input`, (event) => {
    refs.nameInput.textContent = event.currentTarget.value;

    if (event.currentTarget.value === '') {
		refs.nameInput.textContent = 'Anonymous'
	}
});




