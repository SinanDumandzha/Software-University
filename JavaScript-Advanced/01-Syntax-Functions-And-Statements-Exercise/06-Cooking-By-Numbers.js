function modifyNumber(dataList) {
    let list = dataList.slice();
    let number = Number(list.shift());


    while (list.length > 0) {
        let operation = list.shift();

        switch (operation) {
            case 'chop':
                number /= 2;
                break;

            case 'dice':
                number = Math.sqrt(number);
                break;

            case 'spice':
                number += 1;
                break;

            case 'bake':
                number *= 3;
                break;

            case 'fillet':
                number -= number * 0.20;
                break;
        }
        console.log(number);
    }
}

modifyNumber(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);