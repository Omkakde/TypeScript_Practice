var greet = function () {
    console.log("Hello, welcome to TypeScript!");
};
greet();
var add = function (a, b) { return a + b; };
var sum = add(5, 7);
console.log("Sum of 5 and 7:", sum);
var greetPerson = function (name, age) {
    if (age) {
        console.log("Hello, ".concat(name, ". You are ").concat(age, " years old."));
    }
    else {
        console.log("Hello, ".concat(name, "."));
    }
};
greetPerson("Om");
greetPerson("Kiran", 25);
var multiply = function (a, b) {
    if (b === void 0) { b = 10; }
    return a * b;
};
console.log("5 multiplied by 10:", multiply(5));
console.log("5 multiplied by 4:", multiply(5, 4));
var subtract = function (a, b) { return a - b; };
console.log("10 minus 4:", subtract(10, 4));
var sumAll = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (acc, num) { return acc + num; }, 0);
};
console.log("Sum of numbers:", sumAll(1, 2, 3, 4, 5));
var divide = function (a, b) {
    return a / b;
};
console.log("10 divided by 2:", divide(10, 2));
