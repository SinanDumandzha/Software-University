function getFirstAndLastKNumbers(array) {
   
    let k = array.shift();

    let firstKNumbers = array.slice(0, k).join(' ');
    let lastKNumbers = array.slice(array.length - k).join(' ');

    console.log(firstKNumbers);
    console.log(lastKNumbers);
}

getFirstAndLastKNumbers([3, 6, 7, 8, 9]);