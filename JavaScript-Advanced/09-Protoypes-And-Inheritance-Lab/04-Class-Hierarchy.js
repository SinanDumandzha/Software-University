function classHierarchy() {
    class Figure {
        constructor(units = 'cm') {
            this.units = units;
        }

        changeUnits(newUnits) {
            this.units = newUnits;
        }

        get area() {
            return NaN;
        }

        convertCm(valueCm) {
            return this.units === 'm' ?
                valueCm / 100 : this.units === 'mm' ? valueCm * 10 : valueCm;
        }

    }

    class Circle extends Figure {
        constructor(radius, units) {
            super(units);
            this.radius = radius;
        }

        get area() {
            let radius = this.convertCm(this.radius);
            return Math.PI * radius * radius;
        }

        toString() {
            let r = this.convertCm(this.radius);
            return `Figures units: ${this.units} Area: ${this.area} - radius: ${r}`;
        }
    }

    class Rectangle extends Figure {
        constructor(width, height, units) {
            super(units);
            this.width = width;
            this.height = height;
        }

        get area() {
            let width = this.convertCm(this.width);
            let height = this.convertCm(this.height);
            return width * height;
        }

        toString() {
            let w = this.convertCm(this.width);
            let h = this.convertCm(this.height);
            return `Figures units: ${this.units} Area: ${this.area} - width: ${w}, height: ${h}`;
        }
    }

    return {
        Figure,
        Circle,
        Rectangle,
    };
}