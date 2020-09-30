function solve() {
    let numberInput = document.querySelector('#input');
    let selectMenuTo = document.querySelector('#selectMenuTo');
    let convertItButton = document.querySelector('button');
    let resultOutput = document.querySelector('#result');

    let binaryOption = document.createElement('option');
    binaryOption.value = 'binary';
    binaryOption.textContent = 'Binary';
    selectMenuTo.appendChild(binaryOption);

    let hexadecimalOption = document.createElement('option');
    hexadecimalOption.value = 'hexadecimal';
    hexadecimalOption.textContent = 'Hexadecimal'
    selectMenuTo.appendChild(hexadecimalOption);

    convertItButton.addEventListener('click', function () {
        let number = Number(numberInput.value);
        let toOption = selectMenuTo.options[selectMenuTo.selectedIndex].text;

        if (number && toOption) {
            let result = '';

            switch (toOption) {
                case 'Binary':
                    result = (number >>> 0).toString(2);
                    break;

                case 'Hexadecimal':
                    console.log('hex')
                    result = number.toString(16).toUpperCase();
                    break;
            }

            resultOutput.value = result;
        }
    });
}