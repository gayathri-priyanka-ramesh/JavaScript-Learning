/* Encapsulation -> Concept of bundling data (properties) and methods (functions) together within an object
                    Allows object to control access to its internal data and behaviour
                    Hide implementaion details and expose only necessary interfaces to interact with objects
   JavaScript -> Encapsulation is achieved using Closure, Symbol, Naming conventions to simulate private members and expose public interfaces */
class Counter {
  constructor() {
    // Private Variable ('_' prefix is just naming convention)
    // It is of function scope and cannot be accessed directly outside the function, though it is 'var'
    var _count = 0;
    // Public Method -> access and modify private variable
    this.increment = function () {
      _count++;
      return `Incremented`;
    };
    this.decrement = function () {
      _count--;
      return `Decremented`;
    };
    this.getCount = function () {
      return _count;
    };
  }
}

const counter = new Counter();
console.log(
  "'_count' implementation detail is hidden and cannot be accessed directlty as it shows  ---> ",
  counter._count,
  " outside the class definition"
);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

console.log("Counter Initial Value  ---> ", counter.getCount());
console.log("Counter Increment 1  ---> ", counter.increment());
console.log("Counter Increment 2  ---> ", counter.increment());
console.log("Counter Increment 3  ---> ", counter.increment());
console.log("Counter Current Value  ---> ", counter.getCount());
console.log("Counter Decrement 1  ---> ", counter.decrement());
console.log("Counter Decrement 2  ---> ", counter.decrement());
console.log("Counter Decrement 3  ---> ", counter.decrement());
console.log("Counter Decrement 4  ---> ", counter.decrement());
console.log("Counter Final Value  ---> ", counter.getCount());
console.log(
  "Only the necessary interfaces to interact with the object can be worked with"
);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/* Abstraction -> Process of simplifying complex systems by breaking them down into smaller manageble parts
                  Allow to focus on essential features of an object and hide unnecessary details
   JavaScript -> Abstract classes are used to define abstact structures and then implementing them in concrete objects */

// Abstract Class (provides blueprint for subclasses)
class Parent {
  constructor(propertyCommon) {
    this.propertyCommon = propertyCommon;
  }
  // Abstract Method (to be implemented by subclasses)
  abstractMethod() {
    // return `Abstract Method of Parent must be implemented in Subclass`;
    throw new Error("Abstract Method must be implemented by Subclass");
  }
}

const parent = new Parent("ValueCommon");
console.log("Parent  ---> ", parent);
console.log("Parent  ---  PropertyCommon ->", parent.propertyCommon);
// console.log("Parent  ---  AbstractMethod  ---> ", parent.abstractMethod());
console.log(
  "Parent  ---  AbstractMethod throws error as 'Abstract Method must be implemented by Subclass'"
);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// Concrete Subclass 1
class ConcreteChild extends Parent {
  constructor(propertyCommon, propertyConcreteChild) {
    super(propertyCommon);
    this.propertyConcreteChild = propertyConcreteChild;
  }
  // Implementing the Abstract Method (Polymorphism - Overriding Method)
  abstractMethod() {
    return `Abstract Method implemented in 'ConcreteChild ' Class with Properties  ---  PropertyCommon -> ${this.propertyCommon},  PropertyConcreteChild -> ${this.propertyConcreteChild}`;
  }
}
const concreteChild = new ConcreteChild(
  "ValueCommonConcreteChild",
  "ValueConcreteChild"
);
console.log("Concrete Child  ---> ", concreteChild);
console.log(
  "Concrete Child  ---> \nPropertyCommon ->",
  concreteChild.propertyCommon,
  "\nPropertyConcreteChild ->",
  concreteChild.propertyConcreteChild
);
console.log(
  "Concrete Child  ---  AbstractMethod ->",
  concreteChild.abstractMethod()
);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// Concrete Subclass 2
class Child extends Parent {
  constructor(propertyCommon, propertyChild) {
    super(propertyCommon);
    this.propertyChild = propertyChild;
  }
  // Implementing the Abstract Method (Polymorphism - Overriding Method)
  abstractMethod() {
    return `Abstract Method implemented in 'Child ' Class with Properties  ---  PropertyCommon -> ${this.propertyCommon},  PropertyChild -> ${this.propertyChild}`;
  }
}
const child = new Child("ValueCommonChild", "ValueChild");
console.log("Child  ---> ", child);
console.log(
  "Child  ---> \nPropertyCommon ->",
  child.propertyCommon,
  "\nPropertyChild ->",
  child.propertyChild
);
console.log("Child  ---  AbstractMethod ->", child.abstractMethod());
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/* Inheritance -> Allows a Class (Subclass) to inherit properties and methods from another Class (SuperClass)
                  Enables code reuse and creation of hierarchical relationships between classes
   JavaScript -> Inheritance is achieved through prototype-based inheritance (before ES6) or using ES6 classes with 'extends' keyword */
class Pizza {
  constructor(size, crust, sauce) {
    this.size = size;
    this.crust = crust;
    this.sauce = sauce;
    this.toppings = [];
    console.log(
      `Pizza with Size ${this.size}, Crust ${this.crust}, Sauce ${this.sauce}, Toppings ${this.toppings}`
    );
  }
  prepare() {
    console.log(`Preparing...`);
  }
  bake() {
    console.log(
      `Baking... Pizza with Size ${this.size}, Crust ${this.crust}, Sauce ${this.sauce}, Toppings ${this.toppings}`
    );
  }
  ready() {
    console.log(`Ready!!!`);
  }
}
// Problem with Repeating Methods (Not DRY - Don't Repeat Yourself)
class Salad {
  constructor(size, dressing) {
    this.size = size;
    this.dressing = dressing;
    console.log(`Salad with Size ${this.size}, Dressing ${this.dressing}`);
  }
  prepare() {
    console.log(`Preparing...`);
  }
  toss() {
    console.log(
      `Tossing... Salad with Size ${this.size}, Dressing ${this.dressing}`
    );
  }
  ready() {
    console.log(`Ready!!!`);
  }
}
class stuffedCrustPizza extends Pizza {
  stuff() {
    console.log(`Stuffing the crust`);
  }
}
class butteredCrustPizza extends Pizza {
  butter() {
    console.log(`Buttering the crust`);
  }
}
// Not Dry with Inheritance
class stuffedButteredCrustPizza extends Pizza {
  stuff() {
    console.log(`Stuffing the crust...`);
  }
  butter() {
    console.log(`Buttering the crust...`);
  }
}
// This doesn't make the code DRY
const pizzaStuffedButteredCrustInheritance = new stuffedButteredCrustPizza(
  4,
  "Chicken",
  "Chilly"
);
console.log(
  "pizzaStuffedButteredCrustInheritance  ---> ",
  pizzaStuffedButteredCrustInheritance
);
pizzaStuffedButteredCrustInheritance.prepare();
pizzaStuffedButteredCrustInheritance.bake();
pizzaStuffedButteredCrustInheritance.stuff();
pizzaStuffedButteredCrustInheritance.butter();
pizzaStuffedButteredCrustInheritance.ready();
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/* Polymorphism -> Allows objects to be treated as instances of their parent class, even if they are instances of subclass.
                   Facilitates writing code that works with different types of objects in a generic way
   JavaScript -> Polymorphism is achieved through Method Overriding where a subclass provides its own implementation of a method that is already defined in the parent class
                 Code can then use the same method to work with both parent and subclass instances */
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
