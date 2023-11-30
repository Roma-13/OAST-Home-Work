class Calculator {
    constructor() {
        this.result = 0;
    }

    add (x, y) {
        this.result = x + y;
        return this.result;
    }

    substract (x, y) {
        this.result = x - y;
        return this.result;
    }

    multiply (x, y) {
        this.result = x * y;
        return this.result;
    }

    divide (x, y) {
        this.result = x / y;
        return this.result;
    }
}

var calculator = new Calculator();

console.log (calculator.add(10, 5));
console.log (calculator.substract(10, 5));
console.log (calculator.multiply(10, 5));
console.log (calculator.divide(10,5));