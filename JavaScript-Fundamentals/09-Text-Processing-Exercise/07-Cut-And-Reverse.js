function cutAndReverseText(text) {
    let halfLength = text.length / 2;
    let leftPart = text.substring(0, halfLength).split("").reverse().join("");
    let rightPart = text.substring(halfLength).split("").reverse().join("");
    
    console.log(leftPart);
    console.log(rightPart);
}

cutAndReverseText("tluciffiDsIsihTgnizamAoSsIsihT");
