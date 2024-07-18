/* Prototype Model -> Anonymous peoperty of an Object
                      It is the parent of that Object
                      It is Object by itself, having special properties and methods 
   Object -> Everything in JS is an Object
             Every object is associated with another Object 
             2 Objects will be created by default
               First -> Object we create
               Second -> '[[Prototype]]' Object as parent of the object created
                         '[[Prototype]]' is created by '__proto__:Object' property:value pair, this is created from '__proto__:null' which means no object initialy
             Every 'obj' is associated with '[[Prototype]]' Object
             'obj' inherits all properties of 'Object.prototype' or '[[Prototype]]'
   
   Wheneven an Object (variable/function) is created, JS Engine pushes the hidden properties into an Object and attaches it to the originally created Object
   Accessed using 'objectName.__proto__.hidderPropertyName' or 'objectName.hidderPropertyName'
*/
const emptyObj = {};
console.log("Empty Object  ---> ", emptyObj);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("Object.prototype  ---> ", Object.prototype);
console.log("Object.prototype.__proto__  ---> ", Object.prototype.__proto__);
console.log("Object.constructor  ---> ", Object.constructor);
console.log(
  "Object.constructor.prototype  ---> ",
  Object.constructor.prototype
);
console.log(
  "Object.constructor.prototype.__proto__  ---> ",
  Object.constructor.prototype.__proto__
);
console.log(
  "Object.prototype.constructor  ---> ",
  Object.prototype.constructor
);
console.log(
  "Object.prototype.constructor.prototype  ---> ",
  Object.prototype.constructor.prototype
);
console.log(
  "Object.prototype.constructor.prototype.__proto__  ---> ",
  Object.prototype.constructor.prototype.__proto__
);
console.log(
  "Object.getPrototypeOf(Object)  ---> ",
  Object.getPrototypeOf(Object)
);
console.log(
  "Object.getPrototypeOf(Object.prototype)  ---> ",
  Object.getPrototypeOf(Object.prototype)
);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

// 3 ways to retrieve the prototype of an object
console.log("emptyObj.__proto__  ---> ", emptyObj.__proto__);
console.log("emptyObj.constructor  ---> ", emptyObj.constructor);
console.log(
  "emptyObj.constructor.prototype  ---> ",
  emptyObj.constructor.prototype
);
console.log(
  "Object.getPrototypeOf(emptyObj)  ---> ",
  Object.getPrototypeOf(emptyObj)
);
console.log(
  "Prototype Equality  ---> ",
  emptyObj.__proto__ === Object.getPrototypeOf(emptyObj) &&
    emptyObj.__proto__ === emptyObj.constructor.prototype
);
console.log(
  "obj.__proto__ is always equal to Object.getPrototypeOf(obj), but these are equal to obj.constructor.prototype only if that 'obj' doesn't get the prototype of anyother objs"
);
console.log(
  "Object.prototype === emptyObj.__proto__  ---> ",
  Object.prototype === emptyObj.__proto__
);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log(
  "Parent of Parent Prototype of Object  --->\n1 ->",
  emptyObj.__proto__.__proto__,
  "\n2 ->",
  emptyObj.__proto__.constructor.prototype,
  "\n3->",
  Object.getPrototypeOf(emptyObj.__proto__),
  "\n4 ->",
  emptyObj.constructor.prototype.__proto__,
  "\n5 ->",
  emptyObj.constructor.prototype.constructor.prototype,
  "\n6 ->",
  Object.getPrototypeOf(emptyObj.constructor.prototype),
  "\n7 ->",
  Object.getPrototypeOf(emptyObj).__proto__,
  "\n8 ->",
  Object.getPrototypeOf(emptyObj).constructor.prototype,
  "\n9 ->",
  Object.getPrototypeOf(Object.getPrototypeOf(emptyObj))
);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

const obj = { Property1: "Value1" };
console.log("Object  ---> ", obj);
console.log("obj.__proto__  ---> ", obj.__proto__);
console.log("obj.constructor.prototype  ---> ", obj.constructor.prototype);
console.log("Object.getPrototypeOf(obj)  ---> ", Object.getPrototypeOf(obj));
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

const arr1 = [1, "A"];
const arr2 = [2, "B"];
console.log(
  "Concatenation of Arrays before changing built-in method  --->",
  arr1.concat(arr2)
);
console.log("Prototype of Built-in Array Object  ---> ", Array.prototype);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

// Changing Built-in Method of Built-in Constructor Objects
console.log(
  "Array.prototype.concat (Before Modification)  ---> ",
  Array.prototype.concat
);
Array.prototype.concat = function (arr) {
  return `Built-in Method is changed and the array [${this}] cannot be concatenated with the array [${arr}]`;
};
console.log(
  "Concatenation of Arrays After changing built-in method  --->",
  arr1.concat(arr2)
);
console.log(
  "Array.prototype.concat (After Modification)  ---> ",
  Array.prototype.concat
);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// Adding User-defined Method to Built-in Constructor Objects
console.log(
  "Array.prototype.AddedMethod (Before Defining)  ---> ",
  Array.prototype.AddedMethod
);
Array.prototype.AddedMethod = function () {
  console.log("'this'  ---> ", this);
  return "User-defined method added to 'Array()'";
};
console.log("User-defined Method of 'Array()'  --->", arr1.AddedMethod());
console.log(
  "Prototype of Built-in Array Object after adding user-defined method  ---> ",
  Array.prototype
);
console.log(
  "Array.prototype.AddedMethod (After Defining)  ---> ",
  Array.prototype.AddedMethod
);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);
console.log("arr1.__proto__  ---> ", arr1.__proto__);
console.log("Array.prototype  ---> ", Array.prototype);
console.log(
  "arr1.__proto__===Array.prototype  ---> ",
  arr1.__proto__ === Array.prototype
);
console.log("arr1.__proto__.__proto__  ---> ", arr1.__proto__.__proto__);
console.log("Object.prototype  ---> ", Object.prototype);
console.log(
  "arr1.__proto__.__proto__===Object.prototype  ---> ",
  arr1.__proto__.__proto__ === Object.prototype
);
console.log(
  "arr1.__proto__.__proto__.__proto__  ---> ",
  arr1.__proto__.__proto__.__proto__
);
console.log("End of Chain");
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/* Prototypal Inheritance -> Based on 'Prototype Model'
                             Allows objects to inherit (access) properties and methods from other objects
                             Objects serve as prototype for other objects, forming a hiererchical chain of inheritance
                             It is 'Syntactic Sugar' when used in ES6 Classes 'under the hood'
   Object -> Every 'obj' has internal property called '[[Prototype]]' referred to as '__proto__' which points to its prototype object
             When a property or method of an object is accessed and is not found in the object itself, JS lookes for it in object's prototype (further up the prototype chain if needed) until it finds the property or reaches the top of the prototype chain 'Object.prototype' */

//  SuperClass -> 'Parent' Constructor Function
function Parent(propertyCommon) {
  this.propertyCommon = propertyCommon;
}
// Method shared among all 'Parent' instances
console.log(
  "Parent.prototype.parentMethod (before method declaration)  ---> ",
  Parent.prototype
);
Parent.prototype.parentMethod = function () {
  return "Parent Method - Generic Result for any Subclass";
};
console.log(
  "Parent.prototype.parentMethod  ---> ",
  Parent.prototype.parentMethod
);
console.log(
  "Parent.prototype (after method declaration)  ---> ",
  Parent.prototype
);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

// Creating Instances of 'Parent'
const parent = new Parent("ParentValue1");
console.log("'parent' Object of 'Parent()'  ~~~~~~~~~~~~~~~~~~~~\n", parent);
console.log("Property of 'Parent()'  ---> ", parent.propertyCommon);
console.log(
  "'parentMethod' of 'Parent()' called by 'parent' object  ---> ",
  parent.parentMethod()
);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("parent.__proto__  --->  ", parent.__proto__);
console.log("Parent.__proto__  --->  ", Parent.__proto__);
console.log("Function.prototype  --->  ", Function.prototype);
console.log(
  "Parent.__proto__ === Function.prototype  ---> ",
  Parent.__proto__ === Function.prototype
);
console.log(
  "parent.__proto__ === Parent.__proto__   ---> ",
  parent.__proto__ === Parent.__proto__
);
console.log(
  "parent.__proto__ === Function.__proto__   ---> ",
  parent.__proto__ === Function.__proto__
);
console.log("parent.__proto__.__proto__  --->  ", parent.__proto__.__proto__);
console.log("Parent.__proto__.__proto__  --->  ", Parent.__proto__.__proto__);
console.log("Object.prototype  --->  ", Object.prototype);
console.log(
  "Parent.__proto__.__proto === Object.prototype  ---> ",
  Parent.__proto__.__proto === Object.prototype
);
console.log(
  "parent.__proto__.__proto === Parent.__proto__.__proto  ---> ",
  parent.__proto__.__proto === Parent.__proto__.__proto
);
console.log(
  "parent.__proto__.__proto === Object.prototype  ---> ",
  parent.__proto__.__proto === Object.prototype
);
console.log(
  "parent.__proto__.__proto__.__proto__  --->  ",
  parent.__proto__.__proto__.__proto__
);
console.log(
  "Parent.__proto__.__proto__.__proto__  --->  ",
  Parent.__proto__.__proto__.__proto__
);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// Class -> 'NotChildOfParent()' Constructor Function not inheriting from 'Parent()'
function NotChildOfParent(propertyCommon, propertyNotChildOfParent) {
  this.propertyCommon = propertyCommon;
  this.propertyNotChildOfParent = propertyNotChildOfParent;
}
const notChildOfParent = new NotChildOfParent(
  "NotChildOfParent~Value1",
  "NotChildOfParent~Value2"
);
console.log(
  "'notChildOfParent' Object of 'NotChildOfParent()' which is not inherited with 'Parent()' properties  ~~~~~~~~~~~~~~~~~~~~\n",
  notChildOfParent
);
console.log(
  "Properties of 'Child()'  --- \nPropertyCommon ->",
  notChildOfParent.propertyCommon,
  "\nPropertyNotChildOfParent ->",
  notChildOfParent.propertyNotChildOfParent
);
// console.log(notChildOfParent.parentMethod());
console.log(
  "Uncaught TypeError: notChildOfParent.parentMethod is not a function"
);
console.log(
  "'parentMethod' of 'Parent()' cannot be called by 'notChildOfParent' object as it belong only to 'Parent()'"
);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// SubClass -> 'Child()' Constructor Function inheriting from 'Parent()'
function Child(propertyCommon, propertyChild) {
  // Call the SuperClass COnstructor
  Parent.call(this, propertyCommon);
  this.propertyChild = propertyChild;
}

console.log("Parent.prototype  ---> ", Parent.prototype);
console.log(
  "Child.prototype (before setting prototype chain) ---> ",
  Child.prototype
);
// Setup Prototype Chain for 'Child()' to inherit from 'Parent()'
Child.prototype = Object.create(Parent.prototype);
console.log(
  "Child.prototype (after inheritance and before object creation) ---> ",
  Child.prototype
);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

// Creating Instances of 'Child'
const child = new Child("Child~Value1", "Child~Value2");
console.log(
  "'child' Object of 'Child()' which is inherited with 'Parent()' properties  ~~~~~~~~~~~~~~~~~~~~\n",
  child
);
console.log(
  "Properties of 'Child()'  --- \nPropertyCommon ->",
  child.propertyCommon,
  "\nPropertyChild ->",
  child.propertyChild
);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

// Method Exclusive to 'Child'
console.log(
  "Child.prototype (after object creation and before method declaration) ---> ",
  Child.prototype
);
Child.prototype.childMethod = function () {
  return "Child Method Result";
};
console.log("Child.prototype.childMethod  ---> ", Child.prototype.childMethod);
console.log(
  "Child.prototype (after object creation and after method declaration)  ---> ",
  Child.prototype
);
console.log(
  "'childMethod' of 'Child()' called by 'child' object  ---> ",
  child.childMethod()
);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

console.log(
  "'parentMethod' of 'Parent()' called by 'child' object as it inherits 'Parent()' properties (before making it specific)  ---> ",
  child.parentMethod()
);
// Generic 'parentMethod' made Specific to 'Child' (Polymorphism - Overriding Method)
Child.prototype.parentMethod = function () {
  return "Parent Method - Specific Result for 'Child' Subclass";
};
console.log(
  "'parentMethod' of 'Parent()' called by 'child' object as it inherits 'Parent()' properties (after making it specific)  ---> ",
  child.parentMethod()
);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// Prototypal Reference
const person = {
  alive: "Person is alive",
  // 'this' points to the object which calls the method
  get isAlive() {
    console.log("This inside Getter  ---> ", this);
    return this.alive;
  },
  set isAlive(aliveStatus) {
    console.log("This inside Setter  ---> ", this);
    this.alive = aliveStatus;
  },
};
console.log("Person  ---> ", person);
console.log(
  "Object.getPrototypeOf(person)  ---> ",
  Object.getPrototypeOf(person)
);
console.log("person.__proto__  ---> ", person.__proto__);
console.log(
  "person.constructor.prototype  ---> ",
  person.constructor.prototype
);
console.log("person.alive  ---> ", person.alive);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

const musician = {
  plays: "Musisian Plays music",
};
// Traditional Way (Causes High Performance Issue)
// musician.__proto__ = person;
// Usage of builtin method of 'JS Oject' (the second paramter can only be of type 'Object' or 'null')
Object.setPrototypeOf(musician, person);
console.log("Musician  ---> ", musician);
console.log(
  "Object.getPrototypeOf(musician)  ---> ",
  Object.getPrototypeOf(musician)
);
console.log("musician.__proto__  ---> ", musician.__proto__);
console.log(
  "musician.constructor.prototype  ---> ",
  musician.constructor.prototype
);
console.log("musician.plays  ---> ", musician.plays);
console.log("musician.alive  ---> ", musician.alive);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

const guitarist = {
  strings: "Guitar has 6 strings",
  __proto__: musician,
};
console.log("Guitarist  ---> ", guitarist);
console.log(
  "Object.getPrototypeOf(guitarist)  ---> ",
  Object.getPrototypeOf(guitarist)
);
console.log("guitarist.__proto__  ---> ", guitarist.__proto__);
console.log(
  "guitarist.constructor.prototype  ---> ",
  guitarist.constructor.prototype
);
console.log("guitarist.plays  ---> ", guitarist.plays);
console.log("guitarist.alive  ---> ", guitarist.alive);
console.log("guitarist.strings  ---> ", guitarist.strings);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

// Use the 'set' method of 'person' object by walking up the prototypal chain in search of properties and methods (Not making a copy) and set the 'alive' property in 'guitarist' object with the usage of 'this' in the setter
guitarist.isAlive = "Guitarist is Alive";
console.log("guitarist.alive  ---> ", guitarist.isAlive);
console.log("Guitarist  ---> ", guitarist);
console.log("guitarist.valueOf()  ---> ", guitarist.valueOf());
console.log("guitarist.alive  ---> ", guitarist.alive);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

// Getting the keys of the object
console.log("Keys of guitarist  ---> ", Object.keys(guitarist));
// Looping Throuth the keys
console.log("For Each Loop");
Object.keys(guitarist).forEach((key) => {
  console.log("Key ->", key);
});
console.log("Inherited Properties are included in 'for in' loop ");
for (let key in guitarist) {
  console.log("Key ->", key);
}
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log(
  "No Circular References are allowed  (i.e) person.__proto__= musician"
);
// person.__proto__ = guitarist;
console.log(
  "person.__proto__ = guitarist  ---> Uncaught TypeError: Cyclic __proto__ value at set __proto__ (<anonymous>)"
);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);
