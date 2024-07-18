/* Currying -> A concept from Lambda Calculus named after 'Haskell B. Curry'
               It takes a function that receives more than one parameter and breaks it into a series of unary functions (functions with one parameter) */

const curryWithReturn = (parameter1) => {
  console.log("Parameter 1  ---> ", parameter1);
  return (parameter2) => {
    console.log("Parameter 2  ---> ", parameter2);
    return (parameter3) => {
      console.log("Parameter 3  ---> ", parameter3);
      return `Parameters Passed  ---> ${parameter1}, ${parameter2}, ${parameter3}`;
    };
  };
};
// console.log("curryWithReturn  ---> ", curryWithReturn);
// console.log("curryWithReturn()  ---> ", curryWithReturn());
// // Partially Applied Curried Function
// console.log(
//   'curryWithReturn()("Argument 2")  ---> ',
//   curryWithReturn()("Argument 2")
// );
// console.log(
//   'curryWithReturn("Argument 1")("Argument 2")("Argument 3")  ---> ',
//   curryWithReturn("Argument 1")("Argument 2")("Argument 3")
// );
// console.log(
//   "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
// );

const curryWithoutReturn = (parameter1) => (parameter2) => (parameter3) =>
  `Parameters Passed  ---> ${parameter1}, ${parameter2}, ${parameter3}`;
// // This is not executed
// const curryWithoutReturn = (parameter1) => {
//   console.log("Parameter 1  ---> ", parameter1);
//   (parameter2) => {
//     console.log("Parameter 2  ---> ", parameter2);
//     (parameter3) => {
//       console.log("Parameter 3  ---> ", parameter3);
//       return `Parameters Passed  ---> ${parameter1}, ${parameter2}, ${parameter3}`;
//     };
//   };
// };
// console.log("curryWithoutReturn  ---> ", curryWithoutReturn);
// console.log("curryWithoutReturn()  ---> ", curryWithoutReturn());
// console.log(
//   'curryWithoutReturn()("Argument 2")  ---> ',
//   curryWithoutReturn()("Argument 2")
// );
// console.log(
//   'curryWithoutReturn("Argument 1")("Argument 2")("Argument 3")  ---> ',
//   curryWithoutReturn("Argument 1")("Argument 2")("Argument 3")
// );
// console.log(
//   "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
// );

const multiply = (x, y) => x * y;
// console.log("multiply  ---> ", multiply);
// console.log("multiply()  ---> ", multiply());
// console.log("multiply(2)  ---> ", multiply(2));
// console.log("multiply(2, 3)  ---> ", multiply(2, 3));
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

// Curry using Closures
const multiplyClosure = function (x) {
  // The returned function has access to 'x' even after returning (preseting the value of 'x' present in its lexical scope)
  return function (y) {
    return x * y;
  };
};
// console.log("multiplyClosure  ---> ", multiplyClosure);
// console.log("multiplyClosure(3, 4)  ---> ", multiplyClosure(3, 4));
// console.log("multiplyClosure(3)(4)  ---> ", multiplyClosure(3)(4));
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

// Partially Applied Curried Function
const timesEleven = multiplyClosure(11);
// console.log("timesEleven  ---> ", timesEleven);
// console.log("timesEleven(5)  ---> ", timesEleven(5));
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

// Closures using Arrow Function
const curriedMultiply = (x) => (y) => x * y;
// console.log("curriedMultiply  ---> ", curriedMultiply);
// console.log("curriedMultiply(3, 4)  ---> ", curriedMultiply(3, 4));
// console.log("curriedMultiply(3)(4)  ---> ", curriedMultiply(3)(4));
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

// Partially Applied Curried Function
const timesTen = curriedMultiply(10);
// console.log("timesTen  ---> ", timesTen);
// console.log("timesTen(5)  ---> ", timesTen(5));
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

const multiplyFive = (y) => {
  let x = 5;
  return x * y;
};
// console.log("multiplyFive  ---> ", multiplyFive);
// console.log("multiplyFive  ---> ", multiplyFive());
// console.log("multiplyFive  ---> ", multiplyFive(5));
// console.log("multiplyFive  ---> ", multiplyFive(10, 5));
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

// Curry using 'bind()'
// Ignore 'this' (given only as required parameter for 'bind')
let timesFive = multiply.bind(this, 5);
// console.log("timesFive  ---> ", timesFive);
// console.log("timesFive  ---> ", timesFive());
// console.log("timesFive  ---> ", timesFive(5));
// console.log("timesFive  ---> ", timesFive(10, 5));
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

const resultTwelve = () => {
  let x = 4,
    y = 3;
  return x * y;
};
// console.log("resultTwelve  ---> ", resultTwelve);
// console.log("resultTwelve  ---> ", resultTwelve());
// console.log("resultTwelve  ---> ", resultTwelve(5));
// console.log("resultTwelve  ---> ", resultTwelve(10, 5));
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

// Ignores the passed function as it is intentionally curruied by presetting the arguments of 'multiply'
let constantTwelve = multiply.bind(this, 4, 3);
// console.log("constantTwelve  ---> ", constantTwelve);
// console.log("constantTwelve  ---> ", constantTwelve());
// console.log("constantTwelve  ---> ", constantTwelve(5));
// console.log("constantTwelve  ---> ", constantTwelve(10, 5));
// console.log(
//   "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
// );

// const updateElementText = (id) => (content) => {
//   console.log("Element  ---> ", document.querySelector(`#${id}`));
//   document.querySelector(`#${id}`).textContent = content;
//   return `Updater #${IdleDeadline}`;
// };
// Returns the textContent
const updateElementText = (id) => (content) =>
  (document.querySelector(`#${id}`).textContent = content);
const updatedBluePara = updateElementText("bluePara")(
  "I'm in Blue updated using Curried Function"
);
// console.log("updateBluePara  ---> ", updatedBluePara);
// Partially Applied Curried Function
const updateRedPara = updateElementText("redPara");
const updatedRedPara = updateRedPara(
  "I'm in Red updated using Curried Function"
);
// console.log("updateRedPara  ---> ", updatedRedPara);
// console.log(
//   "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
// );

// Requires a function with fixed number of parameters (more that one) and return it as a curried function
const curry = (func) => {
  // Executes only once
  console.log("func  ---> ", func);
  // No. of initial mandate parameters required
  console.log("func.length  ---> ", func.length);
  return (curried = (...args) => {
    // Executes as many times as the no. of parameters
    console.log("args  ---> ", args);
    console.log("...args  ---> ", ...args);
    console.log("args.length  ---> ", args.length);
    if (func.length !== args.length) {
      // '.bind()' creates a new function copy which can be invoked later
      const dummyCurriedFunction = curried.bind(null, ...args);
      console.log("curried.bind(null, ...args)  ---> ", dummyCurriedFunction);
      return dummyCurriedFunction;
    }
    console.log("Parameter Length Matches");
    return func(...args);
  });
};
// const total = (x, y = 9, z, a = 100, b) => x + y + z + a + b;
// const total = (x, y, z, a = 100, b) => x + y + z + a + b;
const total = (x, y, z, a = 100) => x + y + z + a;
// const total = (x, y, z) => x + y + z;

// console.log("total  ---> ", total);
// console.log("total()  ---> ", total());
// console.log("total(10)  ---> ", total(10));
// // Uncaught TypeError: total(...) is not a function
// // console.log("total(10)(20)  ---> ", total(10)(20));
// console.log("total(10,20)  ---> ", total(10, 20));
// // Takes the value from function declaration if not passed but assigned in declaration
// console.log("total(10,20,30)  ---> ", total(10, 20, 30));
// // Overwrites the aasigned value in function declaration if passed
// console.log("total(10,20,30,40)  ---> ", total(10, 20, 30, 40));
// console.log("total(10,20,30,40,50)  ---> ", total(10, 20, 30, 40, 50));
// // Uncaught SyntaxError: Unexpected token ',' (Cannot be skipped)
// // console.log("total(10,20,30,40,50)  ---> ", total(10, 20, 30, , 50));
// // Ignores the extra argument
// console.log("total(10,20,30,40,50,60)  ---> ", total(10, 20, 30, 40, 50, 60));
// console.log(
//   "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
// );

const curriedTotal = curry(total);
console.log("curriedTotal  ---> ", curriedTotal);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("curriedTotal()  ---> ", curriedTotal());
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("curriedTotal(10)  ---> ", curriedTotal(10));
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("curriedTotal(10)(20)  ---> ", curriedTotal(10)(20));
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("curriedTotal(10, 20)  ---> ", curriedTotal(10, 20));
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("curriedTotal(10, 20, 30)  ---> ", curriedTotal(10, 20, 30));
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("curriedTotal(10)(20)(30)  ---> ", curriedTotal(10)(20)(30));
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
// Effective only for function with fixed no. of required arguments (none of the parameted should be assigned value in the declaration)
console.log(
  "curriedTotal(10, 20, 30, 40)  ---> ",
  curriedTotal(10, 20, 30, 40)
);
// Uncaught TypeError: curriedTotal(...)(...)(...) is not a function
// console.log(
//   "curriedTotal(10)(20)(30)(40)  ---> ",
//   curriedTotal(10)(20)(30)(40)
// );
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// // console.log("curry()  ---> ", curry());
// console.log(
//   "curry()  --->  Uncaught TypeError: Cannot read properties of undefined (reading 'length')"
// );
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
// console.log("curry(multiply)  ---> ", curry(multiply));
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
// console.log("curry(multiply)()  ---> ", curry(multiply)());
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
// // console.log("curry()(4)  ---> ", curry()(4));
// console.log(
//   "curry()(4)  --->  Uncaught TypeError: Cannot read properties of undefined (reading 'length')"
// );
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
// console.log("curry(multiply)(4)  ---> ", curry(multiply)(4));
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
// console.log("curry(multiply)(4, 5)  ---> ", curry(multiply)(4, 5));
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
// console.log("curry(multiply)(4)(5)  ---> ", curry(multiply)(4)(5));
// console.log(
//   "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
// );

// console.log("curry(curriedMultiply)  ---> ", curry(curriedMultiply));
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
// console.log("curry(curriedMultiply)()  ---> ", curry(curriedMultiply)());
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
// console.log("curry(curriedMultiply)(4)  ---> ", curry(curriedMultiply)(4));
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
// console.log(
//   "curry(curriedMultiply)(4, 5)  ---> ",
//   curry(curriedMultiply)(4, 5)
// );
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
// console.log(
//   "curry(curriedMultiply)(4)(5)  ---> ",
//   curry(curriedMultiply)(4)(5)
// );
// console.log(
//   "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
// );

// Composition -> Calling Smaller Functions in specific order
// Decorator Function -> 'completeOrder' decorated by 'processOrder' decorated by 'addCustomer'
// Inside to out while calling (i.e.) climbing back the staircase in nested functions
function addCustomer(...args) {
  console.log("Add Customer  ---> ", args);
  return function processOrder(...args) {
    console.log("Process Order  ---> ", ...args);
    return function completeOrder(...args) {
      console.log("Complete Order  ---> ", [...args].toString());
    };
  };
}
// console.log('addCustomer("ValueA")  ---> ', addCustomer("ValueA"));
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
// console.log(
//   'addCustomer("ValueA")("ValueB")  ---> ',
//   addCustomer("ValueA")("ValueB")
// );
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
// console.log(
//   'addCustomer("ValueA")("ValueB")("ValueC")  ---> ',
//   addCustomer("ValueA")("ValueB")("ValueC")
// );
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
// addCustomer("ValueA1", "ValueA2", "ValueA3", "ValueA4")(
//   "ValueB1",
//   "ValueB2",
//   "ValueB3",
//   "ValueB4"
// )("ValueC1", "ValueC2", "ValueC3", "ValueC4");
// console.log(
//   "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
// );

// Function Composition in Currying
const addCust =
  (func) =>
  (...args) => {
    console.log("Add Customer  ---> ", args);
    return func(...args);
  };

const processOrd =
  (func) =>
  (...args) => {
    console.log("Process Order  ---> ", ...args);
    return func(...args);
  };

let completeOrd = (...args) => {
  console.log("Complete Order  ---> ", [...args].toString());
};

// Inside Out Invokation
let order = addCust(processOrd(completeOrd));
// console.log("order  ---> ", order);
// order();
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
// order("Parameter1");
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
// order("Parameter1", "Parameter2");
// // Uncaught TypeError: order(...) is not a function
// order("Parameter1")("Parameter2");
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

// console.log("completeOrd  ---> ", completeOrd);
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
// console.log("completeOrd()  ---> ", completeOrd());
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
// completeOrd("Parameter1");
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
// completeOrd("Parameter1", "Parameter2");
// // Uncaught TypeError: completeOrd(...) is not a function
// // completeOrd("Parameter1")("Parameter2");
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

// Modifying Original Declaration by adding Composition
completeOrd = processOrd(completeOrd);
// console.log("completeOrd  ---> ", completeOrd);
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
// console.log("completeOrd()  ---> ", completeOrd());
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
// completeOrd("Parameter1");
// completeOrd("Parameter1", "Parameter2");
// // Uncaught TypeError: completeOrd(...) is not a function
// // completeOrd("Parameter1")("Parameter2");
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

completeOrd = addCust(completeOrd);
// console.log("completeOrd  ---> ", completeOrd);
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
// completeOrd();
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
// completeOrd("Parameter1");
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
// completeOrd("Parameter1", "Parameter2");
// // Uncaught TypeError: completeOrd(...) is not a function
// // completeOrd("Parameter1")("Parameter2");
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

// To be given in Reverse order of implementation [Performs as Stack: complete, process, add, process]
completeOrd = processOrd(completeOrd);
// console.log("completeOrd  ---> ", completeOrd);
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
// completeOrd();
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
// completeOrd("Parameter1");
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
// completeOrd("Parameter1", "Parameter2");
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
