class Animal {
    constructor(name, sound) {
      this.name = name;
      this.sound = sound;
    }
  
    makeSound() {
      console.log(`${this.name} აკეთებს ${this.sound}`);
    }
  }
  
  class Dog extends Animal {
    constructor(name, breed) {
      super(name, "Woof");
      this.breed = breed;
    }
  
    bark() {
      console.log(`${this.name} ყეფს ხმამაღლა!`);
    }
  }
  
  class Cat extends Animal {
    constructor(name, color) {
      super(name, "Meow");
      this.color = color;
    }
  
    purr() {
      console.log(`${this.name} კნავის სასიამოვნოდ.`);
    }
  }
  
  class Bird extends Animal {
    constructor(name, species) {
      super(name, "Tweet");
      this.species = species;
    }
  
    fly() {
      console.log(`${this.name} დაფრინავს მაღლა.`);
    }
  }
  
  const dog = new Dog("Pitbull", "Golden Retriever");
  const cat = new Cat("Abyssinian", "Bengal");
  const bird = new Bird("Robin", "European Robin");
  
  dog.makeSound();
  dog.bark(); 
  
  cat.makeSound(); 
  cat.purr(); 

  bird.makeSound(); 
  bird.fly(); 
  