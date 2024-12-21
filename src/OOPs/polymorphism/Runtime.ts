class Animal {
    speak(): void {
      console.log("The animal makes a sound.");
    }
  }
  
  class Dog extends Animal {
    speak(): void {
      console.log("The dog barks.");
    }
  }
  
  class Cat extends Animal {
    speak(): void {
      console.log("The cat meows.");
    }
  }
  
  function makeAnimalSpeak(animal: Animal): void {
    animal.speak();
  }
  
  const dog = new Dog();
  const cat = new Cat();
  const genericAnimal = new Animal();
  
  makeAnimalSpeak(dog);           // Output: The dog barks.
  makeAnimalSpeak(cat);           // Output: The cat meows.
  makeAnimalSpeak(genericAnimal); // Output: The animal makes a sound.
  