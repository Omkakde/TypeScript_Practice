var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.calculateArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.calculateArea = function () {
        return Math.PI * this.radius * this.radius;
    };
    return Circle;
}());
var rectangle = new Rectangle(5, 10);
var circle = new Circle(7);
console.log("Rectangle Area: ".concat(rectangle.calculateArea()));
console.log("Circle Area: ".concat(circle.calculateArea()));
