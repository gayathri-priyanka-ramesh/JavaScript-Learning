/* Classes -> Blueprint (Sketch or Prototype) of an object
              Many objects can be created from a same class */

// Class Declaration -> 'ClassName' starts with uppercase by convention
// SuperClass
class Person {
  constructor(name, age, city) {
    console.log(
      "Person Constructor Function called when object is created --- This  ---> ",
      this
    );
    // Instance Members
    this.name = name;
    this.age = age;
    this.city = city;
    this.greet = function (friend) {
      return `Hello ${friend}, I am ${this.name} from ${city} and I am ${this.age} years old.`;
    };
    this.appreciate = (friend) => {
      return `Very Good ${friend}!`;
    };
  }
  // Prototype Members
  wish(friend) {
    return `All the best ${friend}, I am ${this.name} from ${this.city} and I am ${this.age} years old.`;
  }
  // Arrow Function acts as Instance Members
  assertion = (friend) => {
    return `Everything will be alright soon ${friend}`;
  };
}
const userA = new Person("AAA", 15, "XXX");
console.log("UserA  ---> ", userA);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
const userB = new Person("BBB", 19, "YYY");
console.log("UserB  ---> ", userB);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("Instance Member Method 'Greet'  ---> ", userB.greet("CCC"));
console.log(
  "Instance Arrow Member Method 'Appreciate'  ---> ",
  userB.appreciate("DDD")
);
console.log("Prototypal Member Method 'Wish'  ---> ", userB.wish("EEE"));
console.log(
  "Prototypal Arrow Member Method 'Assertion'  ---> ",
  userB.assertion("FFF")
);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// Inheritance
// SubClass inheriting from SuperClass
class Programmer extends Person {
  constructor(name, age, city, favProgLang, experience) {
    super(name, age, city);
    console.log(
      "Programmer Constructor Function called when object is created --- This  ---> ",
      this
    ); // Calls the parent class constructor
    this.favProgLang = favProgLang;
    this.experience = experience;
    this.fav = function () {
      return `I am ${this.name} and my favorite programming laguage is ${this.favProgLang}`;
    };
    // Polymorphism - Overriding (Modifying) Method of 'Person' in 'Programmer'
    this.greet = function (friend) {
      return `Hello ${friend}, I am ${this.name} from ${city} and I am ${this.age} years old and my favorite programming laguage is ${this.favProgLang} and I have ${this.experience} year experience`;
    };
  }

  // Polymorphism - Overriding (Modifying) Method of 'Person' in 'Programmer'
  wish(friend) {
    return `All the best ${friend}, I am ${this.name} from ${this.city} and I am ${this.age} years old and my favorite programming laguage is ${this.favProgLang} and I have ${this.experience} year experience`;
  }
  // Arrow Function acts as Instance Members
  exp = () => {
    return `My favorite programming laguage is ${this.favProgLang} and I have ${this.experience} year experience`;
  };
  assertion = (friend) => {
    return `Everything will be alright soon ${friend} (Overwritten in Programmer)`;
  };
}
const programmerA = new Programmer("ProgAAA", 20, "PXXX", "Python", 2);
console.log("programmerA  ---> ", programmerA);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
const programmerB = new Programmer("ProgBBB", 21, "PYYY", "Java", 1);
console.log("programmerB  ---> ", programmerB);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log(
  "Instance Member Method 'Greet' of 'Person()' Overrided and accessed from 'Programmer()'  ---> ",
  programmerB.greet("ProgCCC")
);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log(
  "Prototypal Member Method 'Wish' of 'Person()' Overrided and accessed from 'Programmer()'  ---> ",
  programmerB.wish("ProgDDD")
);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log(
  "Instance Arrow Member Method 'Appreciate' of 'Person()' accessed from 'Programmer()'  ---> ",
  programmerB.appreciate("ProgEEE")
);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log(
  "Prototypal Arrow Member Method 'Assertion' of 'Person()' accessed from 'Programmer()'  ---> ",
  programmerB.assertion()
);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log(
  "Instance Member Method 'Fav' of 'Programmer()' accessed from 'Programmer()'  ---> ",
  programmerB.fav()
);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log(
  "Prototypal Arrow Member Method 'Exp' of 'Programmer()' accessed from 'Programmer()'  ---> ",
  programmerB.exp()
);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

function personInfo(user) {
  console.log("Object Passed  ---> ", user);
  console.log(`Name: ${user.name}`);
  console.log(`Age: ${user.age}`);
  console.log(`City: ${user.city}`);
  console.log(`Favorite Programming Language: ${user.favProgLang}`);
  console.log(`Experience: ${user.experience}`);
  console.log(`Common Methods ---`);
  console.log(`Person Appreciate : ${user.appreciate()}`);
  console.log(`Overrided Methods ---`);
  console.log(`Person Assertion : ${user.assertion()}`);
  console.log(`Greet : ${user.greet()}`);
  console.log(`Wish : ${user.wish()}`);
  console.log(
    `SubClass-only Methods (not accessible by parent class object) ---`
  );
  console.log(`Programmer Fav : ${user.fav()}`);
  console.log(`Programmer Exp : ${user.exp()}`);
}
personInfo(programmerA);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
personInfo(userA);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);
