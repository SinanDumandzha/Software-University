function lockedProfile() {
    let buttons = document.querySelectorAll('button');

    Array.from(buttons).forEach(button => {
        button.addEventListener('click', function (e) {
            let lockStatus = e.target.parentElement.children[2];

            if (lockStatus.checked) {
                return;
            };

            let actionButton = e.target.parentElement.children[10];
            let hiddenInformationDiv = e.target.parentElement.children[9];

            if (actionButton.innerText === 'Show more') {
                actionButton.innerText = 'Hide it';
                hiddenInformationDiv.style.display = 'block';
            } else {
                actionButton.innerText = 'Show more';
                hiddenInformationDiv.style.display = 'none';
            }
        })
    });
}