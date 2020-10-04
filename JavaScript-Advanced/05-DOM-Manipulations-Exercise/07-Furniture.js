function solve() {
    let inputText = document.querySelectorAll('textarea')[0];
    let generateBtn = document.querySelectorAll('button')[0];
    let outputTextArea = document.querySelectorAll('textarea')[1];
    let buyBtn = document.querySelectorAll('button')[1];

    generateBtn.addEventListener('click', () => {
        let products = JSON.parse(inputText.value);

        products.forEach((product) => {
            let {
                name,
                img,
                price,
                decFactor
            } = product;

            let htmlString = `<tr>\n
            <td><img src='${img}'></td>\n
            <td><p>${name}</p></td>\n
            <td><p>${price}</p></td>\n
            <td><p>${decFactor}</p></td>\n
            <td><input type='checkbox' /></td>\n
            </tr>`;

            document
                .querySelector('tbody')
                .insertAdjacentHTML('beforeEnd', htmlString);
        });

        input.value = '';
    });

    buyBtn.addEventListener('click', () => {
        let boughtProducts = [];
        let totalPrice = 0;
        let totalDecFactor = 0;

        Array.from(document.querySelectorAll('tbody tr')).forEach(tr => {
            if (tr.querySelectorAll('input')[0].checked) {
                let productInfo = tr.querySelectorAll('p');

                boughtProducts.push(productInfo[0].textContent);
                totalPrice += Number(productInfo[1].textContent);
                totalDecFactor += Number((productInfo[2].textContent));
            }
        });

        let decFactorAverage = totalDecFactor / boughtProducts.length;
        outputTextArea.textContent = `Bought furniture: ${boughtProducts.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${decFactorAverage}`;
    });
}