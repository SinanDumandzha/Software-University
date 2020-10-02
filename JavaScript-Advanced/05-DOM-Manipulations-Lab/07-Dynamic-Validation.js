function validate() {
    let emailInput = document.getElementById('email');

    emailInput.addEventListener('change', (e) => {
        let value = emailInput.value;

        if (value.match(/^[a-z-\.\-\_]+@[a-z-\.]+\.[a-z]{2,4}/)) {
            emailInput.classList.remove('error');
        } else {
            emailInput.classList.add('error');
        }
    });
}