
class Grandparent {
    greet() {
      console.log("Hello from Grandparent!");
    }
  }
  
  
  class Parent extends Grandparent {
    greetParent() {
      console.log("Hello from Parent!");
    }
    greet() {
        console.log("Hello from Parent!");
      }
  }
  
  
  class Child extends Parent {
    greetChild() {
      console.log("Hello from Child!");
    }
    greet() {
        console.log("Hello from Child!");
      }
  }
  
  const child = new Child();
  child.greet();       // Output: Hello from Grandparent!
  child.greet();       // child class ouput
  child.greetParent(); // Output: Hello from Parent!
  child.greetChild();  // Output: Hello from Child!
  