// class A {
//     name: string = "";
  
//     display() {
//       console.log(this.name);
//     }
//   }
  
//   class B extends A {
//     display(): void {
//       console.log("Inside B class", this.name);
//     }
//   }
  
//   let object1 = new B();
//   object1.name = "Om Kakde"; 
//   object1.display(); // Output: Inside B class Om Kakde
  

class A {
    static names: string = "";
  
    static display() {
      console.log(A.names);
    }
  }
  
  class B extends A {
    static display(): void {
      console.log("Inside B class", B.names);
    }
  }
  
  B.names = "Om Kakde"; // Set the static name property
  B.display(); // Output: Inside B class Om Kakde
  