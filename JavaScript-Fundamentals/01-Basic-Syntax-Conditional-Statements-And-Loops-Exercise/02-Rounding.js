function solve(number, precision) {
    let result = 0;
    if (precision > 15) {
        result = parseFloat(number.toFixed(15));  
    } else {
        result = parseFloat(number.toFixed(precision)); 
    }
    console.log(result);
}

solve(3.1415926535897932384626433832795, 2);