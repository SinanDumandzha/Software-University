function solve() {
    let addButton = document.querySelector('#container button');

    addButton.addEventListener('click', (event) => {
        event.preventDefault();

        let inputs = Array.from(document.querySelectorAll('#container input'));
        let [name, age, kind, currentOwner] = inputs;

        let checkValue = name.value && Number(age.value) && kind.value && currentOwner.value;

        if (!checkValue) {
            return;
        }

        let li = document.createElement('li');
        let p = document.createElement('p');
        let span = document.createElement('span');
        let addButton = document.createElement('button');

        p.innerHTML = `<strong>${name.value}</strong> is a <strong>${age.value}</strong> year old <strong>${kind.value}</strong>`;
        span.innerText = `Owner: ${currentOwner.value}`;
        addButton.innerText = `Contact with owner`;

        li.appendChild(p);
        li.appendChild(span);
        li.appendChild(addButton);

        let adoptionSection = document.querySelector('#adoption ul');
        adoptionSection.appendChild(li);

        name.value = '';
        age.value = '';
        kind.value = '';
        currentOwner.value = '';

        addButton.addEventListener('click', (event) => {
            let parent = event.currentTarget.parentElement;

            event.currentTarget.remove();

            let div = document.createElement('div');
            let newOwnerInput = document.createElement('input');
            let takeItButton = document.createElement('button');

            newOwnerInput.setAttribute('placeholder', 'Enter your names');
            takeItButton.innerText = 'Yes! I take it!';

            div.appendChild(newOwnerInput);
            div.appendChild(takeItButton);

            parent.appendChild(div);

            takeItButton.addEventListener('click', (event) => {
                let parentButton = event.currentTarget.parentElement
                let li = parentButton.parentElement;

                let newOwnerInputArea = li.querySelector('input');
                let ownerNameSpan = li.querySelector('span');

                let newOwnerName = newOwnerInputArea.value;

                if (!newOwnerName) {
                    return;
                }

                ownerNameSpan.innerText = `New Owner: ${newOwnerName}`;

                let adoptedSection = document.querySelector('#adopted ul');
                adoptedSection.appendChild(li);

                parentButton.remove();

                let checkedButton = document.createElement('button');
                checkedButton.innerText = 'Checked';

                li.appendChild(checkedButton);

                checkedButton.addEventListener('click', (event) => {
                    event.currentTarget.parentElement.remove();
                });
            });
        });
    });
}