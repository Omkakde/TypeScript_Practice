var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.DisplayInfo = function () {
        console.log("Hello, my name is ".concat(this.name, " and I am ").concat(this.age, " years old."));
    };
    return Person;
}());
var student1 = new Person('Om Kakde', 23);
student1.DisplayInfo();
