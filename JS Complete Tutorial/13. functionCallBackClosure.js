/* Callback Function -> A function which is passed as an argument to another function
                        Gives access to whole asynchronous world in a synchronous single threaded language
                        Asynchronous operations are never possible without callback functions
*/

// // Outer Function Declaration
// console.log(
//   "Function call before function Declaration is not possible as inner function is declared in outer function call"
// );
function outer(innerFunc) {
  console.log("~~~~~Outer Function that calls inner function~~~~~");
  const value = "I am called from outer to inner";
  innerFunc(value);
}
// // Outer Function Call with Inner Function Declaration
// console.log("Function call after 'outer' function Declaration");
// outer(function (value) {
//   console.log(
//     "~~~~~Inner Function called from Outer Function  ---> ",
//     value + "~~~~~"
//   );
// });
// console.log(
//   "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
// );

// console.log("Function call before function Declaration");
// wrapperFunction(
//   "Argument for Wrapper Function",
//   "Argument for Wrapped Function",
//   wrappedFunc
// );
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
function wrapperFunction(parameter1, parameter2, funcParameter) {
  console.log("Start of Wrapper Function");
  console.log(`~~~~~I am Wrapper Function with ${parameter1} passed~~~~~`);
  funcParameter(parameter2);
  console.log("End of Wrapper Function");
}
function wrappedFunc(parameter2) {
  console.log("Start of Wrapped Function");
  console.log(
    `~~~~~I am Wrapped Function with ${parameter2} passed and called from Wrapper Function~~~~~`
  );
  console.log("End of Wrapped Function");
}
// console.log("Function call after function Declaration");
// wrapperFunction(
//   "Argument for Wrapper Function",
//   "Argument for Wrapped Function",
//   wrappedFunc
// );
// console.log(
//   "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
// );

/* Lexical Scope -> How variable names are resolved in nested functions
                    Nested (child) functions have access to the scope of their parent functions
                    Is a part of 'Closure' (A function along with its Lexical Scope) */
let globalVariable = "I am Global";
// console.log("globalVariable (Outside Functions)  ---> ", globalVariable);
// console.log(
//   "parentFunctionVariable (Outside Functions)  ---> ",
//   parentFunctionVariable
// );
// console.log(
//   "parentFunctionVariable (Outside Functions)  --->  Uncaught ReferenceError: parentFunctionVariable is not defined"
// );
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

const parentFunction = (callCnt) => {
  let parentFunctionVariable = "I am Parent Function Variable ";
  globalVariable += " - Parent Function " + callCnt;
  console.log("globalVariable (Inside Parent Function)  ---> ", globalVariable);
  parentFunctionVariable += callCnt;
  console.log(
    "parentFunctionVariable (Inside Parent Function)  ---> ",
    parentFunctionVariable
  );
  // console.log(
  //   "childFunctionVariable (Inside Parent Function)  ---> ",
  //   childFunctionVariable,
  //   callCnt
  // );
  // console.log(
  //   "childFunctionVariable (Inside Parent Function)  --->  Uncaught ReferenceError: childFunctionVariable is not defined"
  // );
  // console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

  // It is a function bundled together (enclosed) with references to its surrounding state (Lexical Environment)
  const childFunction = (childCallCnt) => {
    let childFunctionVariable = "I am Child Function Variable ";
    globalVariable += " - Child Function " + childCallCnt;
    console.log(
      "globalVariable (Inside Child Function)  ---> ",
      globalVariable
    );
    parentFunctionVariable += " - Child Function " + childCallCnt;
    console.log(
      "parentFunctionVariable (Inside Child Function)  ---> ",
      parentFunctionVariable
    );
    childFunctionVariable += childCallCnt;
    console.log(
      "childFunctionVariable (Inside Child Function)  ---> ",
      childFunctionVariable
    );
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
  };
  childFunction();
  childFunction("Child Call 1");
  childFunction("Child Call 2");
};
// parentFunction();
// parentFunction("Call 1");
// parentFunction("Call 2");
// console.log(
//   "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
// );

/* Closure -> It is a function having access to the parent scope even after the parent function has closed
              It is created when the function is defined, not when the function is executed
              Gives access to a outer function's scope from an inner function
              Lexical Scope of the inner function contains the references of all the variables
              Outer function variables are not garbage collected even if outer function is closed

      Uses -> Module Design pattern, Currying, Functions like once, Memoize, Maintaing state in 'async' world, setTimeout, Iterators, etc.

      Disadvantages -> Over consumption of memory as whenever a closure is formed, it consumes a lot of memory as the closed environment variables are not garbage collected till the program expires
                       Leads to memory leaks as the memory is accumulated overtime and it may freeze the browser if not handles properly

      Smart Garbage Collectors -> Modern Browsers like V8 Engine of Chrome have Smart Garbage Collection mechanism unreachable variables are found out and collected
*/
function outerFun() {
  var closedVariable = "I am not Garbage Collected",
    // This is not used in the closed function and hence its memory is smartly freed up once the 'outerFun' expires
    dummyVariable = "I am Smartly Garbage Collected";
  console.log(
    "Closed Variable  ---> ",
    closedVariable,
    "  -----   Dummy Variable  ---> ",
    dummyVariable
  );
  return function () {
    // Memory of 'closedVariable' is never freed up (check by degugging at this point and try to log both 'closedVariable' and 'dummyVariable' in the console  ---> It throws a referenceError that 'dummyVariable' is 'not defined')
    console.log("Closure of Closed Variable  ---> ", closedVariable);
  };
}
// var innerFun = outerFun();
// innerFun();

let globalValue = 2;
// console.log("globalValue (before Function Call)  ---> ", globalValue);
const parentClosureFunction = (callCnt) => {
  // This is assigned each time the parent function is invoked and provide the same result
  let parentFunctionValue = 3;
  console.log(
    "globalValue (Inside parentClosureFunction)  ---> ",
    (globalValue *= 10),
    callCnt
  );
  console.log(
    "parentFunctionValue (Inside parentClosureFunction)  ---> ",
    (parentFunctionValue *= 100),
    callCnt
  );
  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

  const childClosureFunction = (childCallCnt) => {
    // This is assigned each time the child function is invoked and provide the same result
    let childFunctionValue = 5;

    // Remembers where it was actually present and the references of the variables in its lexical scope from where it was returned
    console.log(
      "globalValue (Inside childClosureFunction)  ---> ",
      (globalValue += 2),
      childCallCnt
    );
    console.log(
      "parentFunctionValue (Inside childClosureFunction)  ---> ",
      (parentFunctionValue += 3),
      childCallCnt
    );

    console.log(
      "childFunctionValue (Inside childClosureFunction)  ---> ",
      (childFunctionValue += 5),
      childCallCnt
    );
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
  };

  // Functions which are returned from another function still maintains their Lexical Scope (updates the value as per the logic in the references remembered)
  return childClosureFunction;
};

// const closureResult1 = parentClosureFunction("Call 1");
// // The function's closure is returned (function along with its Lexical Scope)
// console.log("closureResult1  ---> ", closureResult1);
// closureResult1("Child Call 1");
// closureResult1("Child Call 2");
// closureResult1("Child Call 3");
// console.log("globalValue (After Parent Function Call 1)  ---> ", globalValue);
// console.log(
//   "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
// );
// const closureResult2 = parentClosureFunction("Call 2");
// console.log("closureResult2  ---> ", closureResult2);
// closureResult2("Child Call 1");
// closureResult2("Child Call 2");
// closureResult2("Child Call 3");
// console.log("globalValue (After Parent Function Call 2)  ---> ", globalValue);
// console.log(
//   "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
// );
// // Instead of storing in a seperate variable 'childClosureFunction' can be immediately invoked ('parentClosureFunction' should be invoked each time for each 'childClosureFunction' call)
// parentClosureFunction("Call 3")("Child Call 1");
// parentClosureFunction("Call 3")("Child Call 2");
// parentClosureFunction("Call 3")("Child Call 3");
// console.log("globalValue (After Parent Function Call 3)  ---> ", globalValue);
// console.log(
//   "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
// );

// 'modifyableCount' is prone to be changed anywhere in the program and hence it is to be hidden for data privacy using Closure
var modifyableCount = 0;
// console.log("modifyableCount (inital)  ---> ", modifyableCount);
function modifyCount() {
  modifyableCount *= 5;
  console.log("modifyableCount (inside modifyCount)  ---> ", modifyableCount);
}
function incrementCount() {
  modifyableCount++;
  console.log("modifyableCount (inside incrementCount) ---> ", modifyableCount);
}
// incrementCount();
// incrementCount();
// modifyCount();
// incrementCount();
// console.log("modifyableCount (final)  ---> ", modifyableCount);
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

// 'count' cannot be accessed outside and it can only be incremented using 'counter' achieving data privacy and encapsulation
function counter(id) {
  var count = 0;
  console.log(`Initial Value of ${id} Counter: ${count}`);
  return function incrementCount() {
    count += 1;
    console.log(`Current Count in ${id} Counter: ${count}`);
  };
}
// Creates independent counters
const counterA = counter("A");
console.log("Counter A  -> ", counterA);
const counterB = counter("B");
console.log("Counter B  -> ", counterB);
const counterC = counter("C")();
console.log("Counter C  -> ", counterC);
// 'counterC' cannot be called again as it is immediately invoked  --- Uncaught TypeError: counterC is not a function
// counterC();
counterA();
counterA();
counterB();
counterB();
counterA();
counterB();
counterA();
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

const counterIIFE = (() => {
  let count = 0;
  console.log(`Initial Value: ${count}`);
  return () => {
    count += 1;
    console.log(`Current Count: ${count}`);
  };
})();
// console.log("counterIIFE  ---> ", counterIIFE);
// counterIIFE();
// counterIIFE();
// counterIIFE();
// console.log(
//   "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
// );

// To make the 'counter' scalable if 'count' is to be accessed by many function like 'increment', 'decrement', 'getCount', etc. it is achieved using Constructor Function of Encapsulation
function Counter() {
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
// const counter1 = Counter();
// Uncaught TypeError: Cannot read properties of undefined (reading '_count')  ----- 'new' keyword is to be used for Constructor Functions
const counter1 = new Counter();
// Creates independent counters
const counter2 = new Counter();
console.log(
  "'_count' implementation detail is hidden and cannot be accessed directlty as it shows  ---> ",
  counter1._count,
  " outside the class definition"
);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("Counter1 Initial Value  ---> ", counter1.getCount());
console.log("Counter2 Initial Value  ---> ", counter2.getCount());
console.log("Counter1 Increment 1  ---> ", counter1.increment());
console.log("Counter2 Increment 1  ---> ", counter2.increment());
console.log("Counter2 Increment 2  ---> ", counter2.increment());
console.log("Counter2 Increment 3  ---> ", counter2.increment());
console.log("Counter1 Decrement 1  ---> ", counter1.decrement());
console.log("Counter2 Decrement 1  ---> ", counter2.decrement());
console.log("Counter2 Decrement 2  ---> ", counter2.decrement());
console.log("Counter1 Decrement 2  ---> ", counter1.decrement());
console.log("Counter1 Decrement 3  ---> ", counter1.decrement());
console.log("Counter1 Increment 2  ---> ", counter1.increment());
console.log("Counter1 Current Value  ---> ", counter1.getCount());
console.log("Counter2 Current Value  ---> ", counter2.getCount());
console.log("Counter1 Increment 3  ---> ", counter1.increment());
console.log("Counter2 Increment 4  ---> ", counter2.increment());
console.log("Counter1 Decrement 3  ---> ", counter1.decrement());
console.log("Counter1 Decrement 4  ---> ", counter1.decrement());
console.log("Counter2 Decrement 3  ---> ", counter2.decrement());
console.log("Counter2 Increment 5  ---> ", counter2.increment());
console.log("Counter2 Increment 6  ---> ", counter2.increment());
console.log("Counter2 Decrement 4  ---> ", counter2.decrement());
console.log("Counter1 Final Value  ---> ", counter1.getCount());
console.log("Counter2 Final Value  ---> ", counter2.getCount());

const credits = ((credit) => {
  console.log(`Initial Credits: ${credit}`);
  return (gameCredit) => {
    if (credit > 0) {
      if (credit >= gameCredit) {
        credit -= gameCredit;
        console.log(
          `Playing!!! Required Game Credit is ${gameCredit} and you have ${credit} Credits remaining`
        );
      } else
        console.log(
          `Not Enough!!! Required Game Credit is ${gameCredit} and you have only ${credit} Credits`
        );
    } else
      console.log(
        `Credits Over!!! Required Game Credit is ${gameCredit} and you have ${credit} Credit`
      );
  };
})(100);
// console.log(credits);
// credits(20);
// credits(35);
// credits(50);
// credits(45);
// credits(5);
// console.log(
//   "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
// );

var cnt = 0;
var once = function (fn) {
  return function (...args) {
    ++cnt;
    if (cnt === 1) return fn(...args);
    else console.log("Function is already used once");
  };
};
let fn = (a, b, c) => console.log(a * b * c);
// let fn = (a, b, c) => a + b + c;
console.log("fn  ---> ", fn);
let onceFn = once(fn);
console.log("onceFn  ---> ", onceFn);
onceFn(5, 7, 4);
onceFn(2, 3, 6);
onceFn(4, 6, 8);
// console.log(onceFn(5, 7, 4));
// console.log(onceFn(2, 3, 6));
// console.log(onceFn(4, 6, 8));
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
fn(5, 7, 4);
fn(2, 3, 6);
fn(4, 6, 8);

// Event Listeners with Closures
function clickCounter(id) {
  let clickCount = 0;
  console.log(`Initial Value of ${id} clickCounter: ${clickCount}`);
  return (clickFunc = () => {
    console.log(`Current clickCount in ${id} clickCounter: ${++clickCount}`);
  });
}
// Check for Event Listeners by selecting it under elements tab
// Button has 'click' event listener attached with a handler function which has the scope same as the lexical scope of 'clickFunc' forming a closure with 'clickCounter'
document.getElementById("btnA").addEventListener("click", clickCounter("A"));
document.getElementById("btnB").addEventListener("click", clickCounter("B"));
// Event Listeners are heavy and takes more memory as it forms a closure to remember the variables of its lexical scope (not freed up even when call stack is empty as the event may occur at any point of time)
// When using 'removeEventListener' all the memory stored by the 'addEventListener' and its closure is garbage collected
