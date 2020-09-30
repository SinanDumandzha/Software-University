function solve() {
    let products = [];

    Array.from(document.querySelectorAll('.add-product'))
        .forEach(element => {
            element.addEventListener('click', addToCart);
        });

    let checkoutButton = document.querySelector('.checkout');
    checkoutButton.addEventListener('click', checkout);

    let textDiv = document.getElementsByTagName('textarea')[0];

    function addToCart(item) {
        let targetProduct = item.target;
        let productDiv = targetProduct.parentNode;
        let parentProductDiv = productDiv.parentNode
        let price = Number(parentProductDiv.children[3].innerText);
        let name = parentProductDiv.children[1].children[0].innerText;
        let product = {
            'Name': name,
            'Price': price
        }
        products.push(product);

        let addedProduct = `Added ${product.Name} for ${product.Price.toFixed(2)} to the cart.\n`;
        textDiv.value += addedProduct;
    }

    function checkout() {
        let productNames = products.map(x => x.Name);
        let uniqueNames = [...new Set(productNames)];
        let sum = products.map(x => x.Price).reduce((a, b) => {
            return a + b;
        }, 0).toFixed(2);

        let shoppingList = `You bought ${uniqueNames.join(', ')} for ${sum}.\n`;
        textDiv.value += shoppingList;

        disableButtons();
    }

    function disableButtons() {
        let buttons = Array.from(document.querySelectorAll('button'));
        buttons.forEach(button => button.disabled = true);
    }
}