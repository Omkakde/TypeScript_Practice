class Calculator {
    
    add(a: number, b: number): number;
    add(a: string, b: string): string;
  
    
    add(a: any, b: any): any {


      if (typeof a === "number" && typeof b === "number") 
        {
        return a + b;

       }
       else if (typeof a === "string" && typeof b === "string") 
        {
        return a + b;
       }
    }
  }
  
  const calc = new Calculator();
  console.log(calc.add(10, 20)); 
  console.log(calc.add("Hello, ", "World!")); 
  