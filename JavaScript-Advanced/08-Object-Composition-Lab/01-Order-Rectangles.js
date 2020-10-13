function orderRectangles(input) {
    let rectangles = [];

    input.map(([width, height]) => {
        let rectangle = {
            width,
            height,
            area: function () {
                return this.width * this.height;
            },
            compareTo: function (other) {
                return other.area() - this.area() || other.width - this.width;
            },
        };
        rectangles.push(rectangle);
    });
    
    rectangles = rectangles.sort((a, b) => {
        return a.compareTo(b);
    });

    return rectangles;
}

console.log(orderRectangles([
    [10, 5],
    [3, 20],
    [5, 12]
]));