var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (a, b) {
        if (typeof a === "number" && typeof b === "number") {
            return a + b;
        }
        else if (typeof a === "string" && typeof b === "string") {
            return a + b;
        }
    };
    return Calculator;
}());
var calc = new Calculator();
console.log(calc.add(10, 20));
console.log(calc.add("Hello, ", "World!"));
