/* Pure Functions -> A part of Functional Programming Paradigm that could be added to Utility Functions
                     Tiny Small Composable Functions
      
      Uses -> Reusablity, Modularity, Clean Code, Easy to test, Easy to debug, Decoupled and Independent
      
      Rules -> Function called with Same Input gives the Same Output
               Makes no Sideeffects - Cannot access a database, API, file system, storage, log to console, manipulate DOM
               Should have atleast One Parameter, otherwise, it is same as a constant because the function can work only with the input
               Must have a 'return' statement
               All Input data are Immutable (No Input State can be modified)
               No Data should be mutated
*/

// Same Input - Same Output
const add = (x, y, z) => x + y + z;
console.log("add(3, 4, 5)  ---> ", add(3, 4, 5));

// Referential Transparency -> The function can be replaced with the output (Easy debugging and testing)
const fullName = (first, last) => `${first} ${last}`;
// Direct Log
console.log("Gayathri Priyanka Ramesh");
// Function replaced with Output
console.log(fullName("Gayathri Priyanka", "Ramesh"));
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// Atleast One Parameter
const fisrtName = () => "Gayathri Priyanka";
console.log("fisrtName  ---> ", fisrtName);
console.log("fisrtName()  ---> ", fisrtName());
const fName = "Gayathri Priyanka";
console.log("fName  ---> ", fName);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// Impure Functions access the scope outside the function and harder to debug or test
const z = 1;
const sum = (x, y) => x + y + z;
console.log("sum(2, 3)  ---> ", sum(2, 3));
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

let a = 1;
console.log("a (Before Increment)  ---> ", a);
const increment = () => (a += 1);
console.log("increment()  ---> ", increment());
console.log("a (After Impure Increment)  ---> ", a);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

const incrementPure = (x) => (x += 1);
console.log("incrementPure()  ---> ", incrementPure(a));
console.log("a (After Pure Increment)  ---> ", a);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

let arr = [10, 20, 30, [100, 200], 40, 50, [1000, 2000], 60];
console.log("arr (Before Push)  ---> ", arr);
const addToArray = (array, data) => {
  array.push(data);
  array[3].push(data);
  array[6].push(data);
  return array;
};
console.log("arr (After First Call)  ---> ", addToArray(arr, "First Call"));
console.log("arr (After Second Call)  ---> ", addToArray(arr, "Second Call"));
console.log("arr (After Push)  ---> ", arr);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

const addToArrayPure = (array, data) => {
  const newArray = [...array, data];
  // Shallow Copy
  newArray[3].push(data);
  // DeepCopy
  newArray[6] = [...array[6], data];
  return newArray;
};
console.log(
  "arr (After Pure First Call)  ---> ",
  addToArrayPure(arr, "Pure First Call")
);
console.log(
  "arr (After Pure Second Call)  ---> ",
  addToArrayPure(arr, "Pure Second Call")
);
console.log("arr (After Pure Push)  ---> ", arr);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// Higher Order Functions are Pure Functions
const oneToFive = [1, 2, 3, 4, 5];
// console.log("oneToFive  ---> ", oneToFive);
const oddToFive = oneToFive.filter((ele) => ele % 2 == 1);
// console.log("oddToFive  ---> ", oddToFive);
const doubledToFive = oneToFive.map((ele) => ele * 2);
// console.log("doubled  ---> ", doubledToFive);
const sumtoFive = oneToFive.reduce((acc, ele) => acc + ele);
// console.log("sumtoFive  ---> ", sumtoFive);
// console.log("oneToFive  ---> ", oneToFive);
// console.log(
//   "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
// );

var reduce = function (nums, fn, init) {
  let res = init;
  if (nums.length > 0) {
    for (let i = 1; i < nums.length; i++) {
      res = fn(nums[i - 1], nums[i]);
      console.log(res);
    }
  }
  return res;
};
// console.log(
//   reduce(
//     [1, 2, 3, 4],
//     function sum(accum, curr) {
//       return accum + curr;
//     },
//     0
//   )
// );
// console.log(
//   "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
// );

// Scenario : Output an array of 'n' areas, 'n' circumferences, 'n' diameters for a given array of 'n' radii
const radii = [1, 2, 3, 4];
// This code is not scalable as it doesn't follow DRY Principle
const calculateArea = function (radii) {
  const result = [];
  for (let i = 0; i < radii.length; i++)
    result.push(Math.PI * radii[i] * radii[i]);
  return result;
};
const calculateCircumference = function (radii) {
  const result = [];
  for (let i = 0; i < radii.length; i++) result.push(2 * Math.PI * radii[i]);
  return result;
};
const calculateDiameter = function (radii) {
  const result = [];
  for (let i = 0; i < radii.length; i++) result.push(2 * radii[i]);
  return result;
};
// console.log("Repetitive Code");
// console.log("Areas  ---> ", calculateArea(radii));
// console.log("Circumferences  ---> ", calculateCircumference(radii));
// console.log("Diameters  ---> ", calculateDiameter(radii));
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

// Code following DRY Principle in Functional Programming using Abstraction of Logic into Modules
const area = function (radius) {
  return Math.PI * radius * radius;
};
const circumference = function (radius) {
  return 2 * Math.PI * radius;
};
const diameter = function (radius) {
  return 2 * radius;
};
// Simulated Implementation of Map (takes array as a parameter)
const calculate = function (radii, desiredLogic) {
  const result = [];
  for (let i = 0; i < radii.length; i++) result.push(desiredLogic(radii[i]));
  return result;
};
// console.log("Modular Abstraction of Code");
// console.log("Areas  ---> ", calculate(radii, area));
// console.log("Circumferences  ---> ", calculate(radii, circumference));
// console.log("Diameters  ---> ", calculate(radii, diameter));
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

// Polyfill -> A piece of code that provide native support to the older browsers who does not have the support of modern functionalities of javascript (rowser Fallback)
// Polyfill of Map
Array.prototype.mapPolyfill = function (desiredLogicFunc) {
  const result = [];
  // 'this' points to the accessed array
  for (let i = 0; i < this.length; i++) result.push(desiredLogicFunc(this[i]));
  return result;
};
// console.log("Polyfill of Maps");
// console.log("Areas  ---> ", radii.mapPolyfill(area));
// console.log("Circumferences  ---> ", radii.mapPolyfill(circumference));
// console.log("Diameters  ---> ", radii.mapPolyfill(diameter));
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

// Inbuilt Higher Order Function (Check ArrayMethods)
// Map -> Maps the whole array with a logic function and returns an array
// console.log("Areas  ---> ", radii.map(area));
// console.log("Circumferences  ---> ", radii.map(circumference));
// console.log("Diameters  ---> ", radii.map(diameter));
// console.log(
//   "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
// );

// Polyfill of Filter
function even(num) {
  return Math.round(num) % 2 == 0;
}
function odd(num) {
  return Math.round(num) % 2 != 0;
}
Array.prototype.filterPolyfill = function (callbackFunc) {
  const result = [];
  // Additional and not part of 'filter'
  const index = [];
  for (let i = 0; i < this.length; i++) {
    if (callbackFunc(this[i])) {
      result.push(this[i]);
      // Additional and not part of 'filter'
      index.push(i);
    }
  }
  // return [result];
  // To get index of element that satisfies the condition
  return [result, index];
};
// console.log("Even Radii  ---> ", radii.filterPolyfill(even));
// console.log("Even Areas  ---> ", radii.map(area).filterPolyfill(even)[0]);
const oddCircumferences = radii.map(circumference).filterPolyfill(odd);
// console.log("Radii with Odd Circumferences  ---> ", oddCircumferences[1]);
