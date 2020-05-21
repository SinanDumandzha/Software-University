function areaOfFigure (figureType, length1, length2) {

    length1 = Number(length1);
    length2 = Number(length2);

    let area = 0; 

    if (figureType === "square") {
        area = length1 * length1;
        
    } else if (figureType === "rectangle") {
        area = length1 * length2;

    } else if (figureType === "circle") {
        area = Math.PI * (length1 * length1);

    } else if (figureType === "triangle") {
        area = (length1 * length2) / 2;
    }
    console.log(area.toFixed(3));
 }

 areaOfFigure ("triangle", "4.5", "20");