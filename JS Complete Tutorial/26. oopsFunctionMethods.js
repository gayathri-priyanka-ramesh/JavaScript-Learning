/* Factory Function -> used to create and return objects
                       design pattern provides an alternative way to create objects compared to constructors and 'new' keyword
                       works well with Enhanced Object Literals of ES6
                       */

/* Constructor Function -> used with 'new' keyword to initialize objects with shared properties and methods.
                           blueprints for creating multiple instances of objects with same structure and behaviour
                           statrs with Capital Letter by naming convention */
function CreatUser(name, age, city) {
  const property = "Value";
  console.log("CreateUser Function Property  ---> ", property);
  // 'this' reserved keyword is used to point 'window' object if it is given inside a function but this behaviour is modified by the use of 'new' reserved keyword
  console.log("This (Inside CreateUser)  ---> ", this);
  this.name = name;
  this.age = age;
  this.city = city;
  this.greet = function (friend) {
    return `Hello ${friend}, I am ${this.name} from ${city} and I am ${this.age} years old.`;
  };
}
/* new -> Creates an empty object
          Sets 'this' to point to that created object
          Omits the use of 'return' statement */
// const userA = new CreatUser("AAA", 15, "XXX");
// console.log("UserA  ---> ", userA);
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
// const userB = new CreatUser("BBB", 19, "YYY");
// console.log("UserB  ---> ", userB);
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
// console.log("Method  ---> ", userB.greet("CCC"));
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

function except(val) {
  this.toBe = (val2) => {
    if (val !== val2) throw new Error("Not Equal");
    else return true;
  };
  this.notToBe = function (val2) {
    if (val === val2) throw new Error("Equal");
    else return true;
  };
}
// console.log("except(5).toBe(5)  ---> ", new except(5).toBe(5));
// console.log("except(5).notToBe(5)  ---> ", new except(5).notToBe(5));
// console.log(
//   "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
// );

/* Built-in Constructor  -> Native Constructor or Standard Constructors
                            Create objects of various datatypes
                            Available globally (need not be explicitly defined)
                            Create instances of primitive datatypes and built-in objects */
const num1 = 10;
// console.log("'num1' defined in regular way  ---> ", num1);
// console.log("Types of 'num1' defined in regular way  ---> ", typeof num1);
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

const num2 = new Number(10);
// console.log(
//   "'num2' defined using 'new' keyword with built-in 'Number()' constructor  ---> ",
//   num2
// );
// console.log(
//   "Type of 'num2' defined using 'new' keyword with built-in 'Number()' constructor   ---> ",
//   typeof num2
// );
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

const str = new String("Defined using Built-in 'String()' Constructor");
// console.log(
//   "'str' defined using 'new' keyword with built-in 'String()' constructor  ---> ",
//   str
// );
// console.log(
//   "Type of 'str' defined using 'new' keyword with built-in 'String()' constructor   ---> ",
//   typeof str
// );
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

const bool1 = new Boolean(false);
// console.log(
//   "'bool1' defined using 'new' keyword with built-in 'Boolean()' constructor  ---> ",
//   bool1
// );
// const bool2 = new Boolean(true);
// console.log(
//   "'bool2' defined using 'new' keyword with built-in 'Boolean()' constructor  ---> ",
//   bool2
// );
// console.log(
//   "Types of 'bool1' defined using 'new' keyword with built-in 'Boolean()' constructor   ---> ",
//   typeof bool1,
//   " and that of 'bool2' ---> ",
//   typeof bool2
// );
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

const arr = new Array(1, "A");
// console.log(
//   "'arr' defined using 'new' keyword with built-in 'Array()' constructor  ---> ",
//   arr
// );
// console.log(
//   "Type of 'arr' defined using 'new' keyword with built-in 'Array()' constructor   ---> ",
//   typeof arr
// );
// console.log(
//   "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
// );
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Object.create() -> creates new object using an existing object as Prototype of the newly created object
// Refer: https://www.freecodecamp.org/news/how-javascript-implements-oop/
let person = {
  // Method is a function which is a part of an object
  greet: function (friend) {
    return `Hello ${friend}, I am ${this.name} from ${this.city} and I am ${this.age} years old.`;
  },
};
// console.log("Person Object  ---> ", person);
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

// const personA = Object.create(person);
// console.log("PersonA after creation  ---> ", personA);
// personA.name = "AAA";
// personA.age = 15;
// personA.city = "XXX";
// console.log(
//   "PersonA ---> ",
//   personA,
//   `Name -> ${personA.name}, Age -> ${personA.age}, City -> ${
//     personA.city
//   }, Greet Function -> ${personA.greet("CCC")}`
// );
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

const personB = Object.create(person, {
  name: { value: "BBB" },
  age: { value: 19 },
  city: { value: "YYY" },
});
// console.log(
//   "PersonB ---> ",
//   personB,
//   `Name -> ${personB.name}, Age -> ${personB.age}, City -> ${
//     personB.city
//   }, Greet Function -> ${personB.greet("DDD")}`
// );
// console.log(
//   "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
// );

function Animals(name, age, species) {
  console.log("This (Inside Animal)  ---> ", this);
  // Uses 'animalConstructor' Object
  this.species = species;
  let newAnimal = Object.create(animalConstructor);
  console.log("New Animal  ---> ", newAnimal);
  newAnimal.name = name;
  newAnimal.age = age;

  return newAnimal;
}
let animalConstructor = {
  sing: function () {
    console.log("This (Inside Sing)  ---> ", this);
    return `${this.name} can sing and I am ${this.species}`;
  },
  dance: function () {
    return `${this.name} can dance`;
  },
};
function Cats(name, age, species, whiskerColor, catColor) {
  // Calls 'Animals()' Constructor Function
  // let newCat =  Animals(name, age, species);
  let newCat = new Animals(name, age, species);
  console.log("New Cat  ---> ", newCat);
  console.log("This (Inside Cat)  ---> ", this);
  // Uses 'catConstructor' Object
  newCat.whiskerColor = whiskerColor;
  this.catColor = catColor;
  Object.setPrototypeOf(newCat, catConstructor);
  return newCat;
}
let catConstructor = {
  whiskers() {
    console.log("This (Inside Whiskers)  ---> ", this);
    return `I have ${this.whiskerColor} whiskers and I am in ${this.catColor}`;
  },
};
Object.setPrototypeOf(catConstructor, animalConstructor);

// Calls 'Cats()' Constructor Function
// const clara = Cats("Clara", 33, "cat", "purple", "violet");
// console.log("Clara  ---> ", clara);
// console.log("Clara Sing  ---> ", clara.sing());
// console.log("Clara Whiskers ---> ", clara.whiskers());
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

// const bingo = new Cats("bingo", 23, "cat", "pink", "rose");
// console.log("Bingo  ---> ", bingo);
// console.log("Bingo Sing  ---> ", bingo.sing());
// console.log("Bingo Whiskers ---> ", bingo.whiskers());
// console.log(
//   "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
// );
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/* Function Borrowing -> Sharing Methods between objects by overriding the value of 'this' keyword
                         All function instances (methods) in JS have access to 'call()', 'apply()', 'bind()' functions
        
      call()  -> Calls required function with a given 'this' value and arguments provided individually as a list
                 Accessed with
                      'objectName.methodName.call(reference)' where 'objectName' is the object from where the method is to be shared
                      'functionName.call(objectReference,value1, value2,...,valueN)' where 'objectReference' is the value of 'this' to be pointed inside the Function
                 First Argument  -> Reference to where the 'this' should point (object that uses the shared method)
                 Other Arguments -> Values of the properties to be assigned (provided individually seperated by comma)

      apply() -> Applies required function with a given 'this' value, and arguments provided as an array (or an array-like object)
                 Accessed with
                      'objectName.methodName.apply(reference)' where 'objectName' is the object from where the method is to be shared
                      'functionName.apply(objectReference, [value1, value2,...,valueN])' where 'objectReference' is the value of 'this' to be pointed inside the Function        
                      First Argument  -> Reference to where the 'this' should point (object that uses the shared method)
                      Second Argument -> Values of the properties to be assigned (provided inside an array seperated by comma or passed as arrayName)

      bind()  -> Binds the method with the object and returns the copy of that method to be used later
                 Doesn't call immediately
                 Accessed with
                      'objectName.methodName.bind(reference)' where 'objectName' is the object from where the method is to be shared
                      'functionName.bind(objectReference,value1, value2,...,valueN)' where 'objectReference' is the value of 'this' to be pointed inside the Function
                 First Argument  -> Reference to where the 'this' should point (object that uses the shared method)
                 Other Arguments -> Values of the properties to be assigned (provided individually seperated by comma)
*/

const obj1 = {
  name: "Object 1",
  printName: function () {
    console.log("this  ---> ", this);
  },
  // Arrow function don't have a 'this' binding associated
  // printName: () => console.log("this  ---> ", this),
};
const obj2 = { name: "Object 2" };
// obj1.printName();
// // 'Uncaught TypeError: obj2.printName is not a function'
// // obj2.printName();
// console.log("~~~~~~~~~~~~~~~Call~~~~~~~~~~~~~~~");
// // Overrides the value of 'this' keyword inside 'obj1' when the 'obj2' is passed inside 'call()'
// obj1.printName.call(obj2);
// // Uncaught TypeError: Cannot read properties of undefined (reading 'call')
// // obj1.printName().call(obj2);
// console.log("~~~~~~~~~~~~~~~Apply~~~~~~~~~~~~~~~");
// // Overrides the value of 'this' keyword inside 'obj1' when the 'obj2' is passed inside 'call()'
// obj1.printName.apply(obj2);
// // Uncaught TypeError: Cannot read properties of undefined (reading 'apply')
// // obj1.printName().apply(obj2);
// console.log("~~~~~~~~~~~~~~~Bind~~~~~~~~~~~~~~~");
// const printNameOfObj2 = obj1.printName.bind(obj2);
// console.log("printNameOfObj2  ---> ", printNameOfObj2);
// console.log("Invoking printNameOfObj2");
// printNameOfObj2();
// console.log("Immediately Calling 'printName' for OBJ2 with Binding");
// obj1.printName.bind(obj2)();
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

// call() method & bind() method
function Item(name, count) {
  console.log("this inside Item (Before assignment) ---> ", this);
  console.log("Name: ", name, "  ---  Count: ", count);
  this.name = name;
  this.count = count;
  console.log("Name: ", name, "  ---  Count: ", count);
  console.log("this inside Item (After assignment) ---> ", this);
}
function Food1(name, count) {
  console.log("this (Initial)  ---> ", this);
  Item.call(this, name, count);
  console.log("this (After call)  ---> ", this);
  this.color = "red";
  console.log("this (After assignment)  ---> ", this);
}
function Food2(name, count) {
  console.log("this (Initial)  ---> ", this);

  // const ItemBind = Item.bind(this, name, count);
  // // Values are set only if invoked
  // ItemBind();

  // Polyfill of 'bind()'
  // Every function in JS have access to 'bind()', hence, every function must also have acess to the Polyfill using 'Function.prototype'
  Function.prototype.bindPolyfill = function (...args) {
    console.log("'this' inside 'bindPolyfill'  ---> ", this);
    // 'this' is stored and used as 'this' refers to Global Object inside returned function
    const thisStorage = this;
    // 'bind()' returns a function which is to be invoked later
    return function () {
      console.log("'this' inside 'bindPolyfill' return  ---> ", this);
      console.log(
        "'thisStorage' inside 'bindPolyfill' return  ---> ",
        thisStorage
      );
      console.log("'args'  --->  ", args);
      // 'call()' -> to pass all the arguments seperated by comma
      // thisStorage.call(args);
      // thisStorage.call(args[0]);
      // thisStorage.call(args[0], args[1], args[2]);
      // ES6 Syntax which spreads the 'args' array into comma seperated elements
      thisStorage.call(...args);
    };
  };
  const ItemBindPolyfill = Item.bindPolyfill(this, name, count);
  ItemBindPolyfill();

  console.log("this (After call)  ---> ", this);
  this.color = "red";
  console.log("this (After assignment)  ---> ", this);
}
// const chillyObj = new Food1("chilly", 1);
// console.log("chillyObj  ---> ", chillyObj);
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

// const cherryObj = new Food2("cherry", 2);
// console.log("cherryObj  ---> ", cherryObj);
// console.log(
//   "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
// );

// apply() method
function Day(dayObj) {
  console.log("dayObj  ---> ", dayObj);
  console.log("this inside Day (Before assignment)  ---> ", this);
  // console.log("Month: ", this.month, "  ---  ", "Date: ", this.date);
  // this.month = dayObj[0].monthName;
  // this.date = dayObj[0].dateCnt;
  this.month = dayObj.monthName;
  this.date = dayObj.dateCnt;
  // console.log("Month: ", this.month, "  ---  ", "Date: ", this.date);
  console.log("this inside Day (After assignment)  ---> ", this);
}
function Mind(state, time) {
  console.log("this inside Mind (Before assignment)  ---> ", this);
  console.log("State: ", state, "  ---  Time: ", time);
  this.state = state;
  this.time = time;
  console.log("State: ", state, "  ---  Time: ", time);
  console.log("this inside Mind (After assignment)  ---> ", this);
}
var ItemColor = function (item, itemCount, itemColor, feel) {
  console.log(
    "Item: ",
    item,
    "  --- itemCount: ",
    itemCount,
    "  ---  Month: ",
    this.month,
    "  ---  itemColor: ",
    itemColor,
    "  ---  feel: ",
    feel
  );
};
function Spcl1({ month, date, color, state, time }) {
  console.log("this (Initial)  ---> ", this);
  const dayObj = { monthName: month, dateCnt: date };
  // Uncaught TypeError: Cannot read properties of undefined (reading 'monthName')
  // Day.apply(this, dayObj);
  // 'apply()' takes only an array as second argument
  Day.apply(this, [dayObj]);
  console.log("this (After Day apply)  ---> ", this);
  Mind.apply(this, [state, time]);
  console.log("this (After Mind apply)  ---> ", this);
  this.color = color;
  this.state = "happy";
  console.log("this (After Assignment)  ---> ", this);
}
function Spcl2({ month, date, color, state, time, item, itemCount }) {
  console.log("this (Initial)  ---> ", this);
  const dayObj = { monthName: month, dateCnt: date };
  // // Object is enclosed within an array and hence the properties are to accessed as 'dayObj[0].monthName'
  // // const dayBind = Day.bind(this, [dayObj]);
  // const dayBind = Day.bind(this, dayObj);
  // dayBind();

  // Polyfill of 'bind()'
  Function.prototype.bindPolyfillDay = function (...args) {
    const thisStorage = this;
    return function () {
      console.log(
        "'thisStorage' inside 'bindPolyfillDay' return  ---> ",
        thisStorage
      );
      console.log("'args'  --->  ", args);
      // 'apply()' -> to pass all the arguments as a single array
      // thisStorage.apply(args);
      // thisStorage.apply(...args);
      // thisStorage.apply(args[0]);
      // thisStorage.apply(args[0], args[1]);
      thisStorage.apply(args[0], [args[1]]);
    };
  };
  const DayBindPolyfill = Day.bindPolyfillDay(this, dayObj);
  DayBindPolyfill();
  console.log("this (After Day Bind)  ---> ", this);

  // // Array is stored in the first parameter of the function
  // // const mindBind = Mind.bind(this, [state, time]);
  // const mindBind = Mind.bind(this, state, time);
  // mindBind();
  Function.prototype.bindPolyfillMind = function (...args) {
    const thisStorage = this;
    const objReference = args[0];
    const argumentsToBePassed = args.slice(1);
    return function () {
      console.log(
        "'thisStorage' inside 'bindPolyfillMind' return  ---> ",
        thisStorage
      );
      console.log("'args'  --->  ", args);
      // 'apply()' -> to pass all the arguments as a single array
      // thisStorage.apply(args);
      // thisStorage.apply(...args);
      // thisStorage.apply(args[0]);
      // thisStorage.apply(args[0], args[1], args[2]);
      // thisStorage.apply(args[0], [args[1], args[2]]);
      thisStorage.apply(objReference, argumentsToBePassed);
    };
  };
  const MindBindPolyfill = Mind.bindPolyfillMind(this, state, time);
  MindBindPolyfill();
  console.log("this (After Mind Bind)  ---> ", this);

  // const itemColorBind = ItemColor.bind(this, item, itemCount);
  // itemColorBind("Red", "Love");
  Function.prototype.bindPolyfillItemColor = function (...args1) {
    const thisStorage = this;
    const bindArguments = args1.slice(1);
    return function (...args2) {
      console.log(
        "'thisStorage' inside 'bindPolyfillMind' return  ---> ",
        thisStorage
      );
      console.log("'args1'  --->  ", args1);
      console.log("'args2'  --->  ", args2);
      thisStorage.apply(args1[0], [...bindArguments, ...args2]);
    };
  };
  const itemColorBindPolyfill = ItemColor.bindPolyfillItemColor(
    this,
    item,
    itemCount
  );
  itemColorBindPolyfill("Blue", "Love");
  console.log("this (After ItemColor Bind)  ---> ", this);

  this.color = color;
  // Overwriting
  // this.state = "Super Happy";
  console.log("this (After Assignment)  ---> ", this);
}
// const marchObj = new Spcl1({
//   month: "March",
//   date: 17,
//   color: "Yellow",
//   state: "Happy",
//   time: "Night",
// });
// console.log("marchObj  ---> ", marchObj);
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
// const decemberObj = new Spcl2({
//   month: "December",
//   date: 11,
//   color: "Black",
//   state: "Happy",
//   time: "Night",
//   item: "Chilly~Cherry",
//   itemCount: 12,
// });
// console.log("decemberObj  ---> ", decemberObj);
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
