function sortAnArray(array) {

    array.sort(customSort);

    console.log(array.join('\n'));

    function customSort(a, b) {
        if (a.length > b.length) {
            return 1;
        } else if (a.length < b.length) {
            return -1;
        } else {
            return a.localeCompare(b);
        }
    }
}

sortAnArray(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);