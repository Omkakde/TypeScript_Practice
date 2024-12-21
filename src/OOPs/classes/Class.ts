class Person {
    name: string;
    age: number;

    constructor(name:string, age:number){
        this.name=name;
        this.age=age;
    }

   DisplayInfo ():void{
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
   }
}

let student1 = new Person('Om Kakde', 23);

student1.DisplayInfo();