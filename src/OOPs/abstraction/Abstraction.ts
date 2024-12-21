interface Shape {
    calculateArea(): number;
  }
  
  class Rectangle implements Shape {
    constructor(private width: number, private height: number) {}
  
    calculateArea(): number {
      return this.width * this.height;
    }
  }
  
  class Circle implements Shape {
    constructor(private radius: number) {}
  
    calculateArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }
  
  const rectangle = new Rectangle(5, 10);
  const circle = new Circle(7);
  
  console.log(`Rectangle Area: ${rectangle.calculateArea()}`);
  console.log(`Circle Area: ${circle.calculateArea()}`);
  