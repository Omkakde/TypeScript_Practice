type GreetFunction = () => void;
const greet: GreetFunction = () => {
  console.log("Hello, welcome to TypeScript!");
};
greet();

type AddFunction = (a: number, b: number) => number;
const add: AddFunction = (a, b) => a + b;
let sum = add(5, 7);
console.log("Sum of 5 and 7:", sum);

type GreetPersonFunction = (name: string, age?: number) => void;
const greetPerson: GreetPersonFunction = (name, age) => {
  if (age) {
    console.log(`Hello, ${name}. You are ${age} years old.`);
  } else {
    console.log(`Hello, ${name}.`);
  }
};
greetPerson("Om");
greetPerson("Kiran", 25);

type MultiplyFunction = (a: number, b?: number) => number;
const multiply: MultiplyFunction = (a, b = 10) => a * b;
console.log("5 multiplied by 10:", multiply(5));
console.log("5 multiplied by 4:", multiply(5, 4));

type SubtractFunction = (a: number, b: number) => number;
const subtract: SubtractFunction = (a, b) => a - b;
console.log("10 minus 4:", subtract(10, 4));

type SumAllFunction = (...numbers: number[]) => number;
const sumAll: SumAllFunction = (...numbers) => numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum of numbers:", sumAll(1, 2, 3, 4, 5));

type DivideFunction = (a: number, b: number) => number;
const divide: DivideFunction = function (a, b) {
  return a / b;
};
console.log("10 divided by 2:", divide(10, 2));
