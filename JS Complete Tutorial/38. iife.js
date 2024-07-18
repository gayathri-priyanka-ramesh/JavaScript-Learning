/* Immediately Invoked Function Expression (IIFE) -> Function Expression that is invoked as soon as it is defined
                                                     Coined by 'Ben Alman' pronounced as 'iffy'
                                                     
          Uses -> Doesn't pollute global object namespace 
                  Used with closures (Access private variables and methods)
                  Module Pattern
                  Injection of NameSpace Object */

// Global
const x = "Whatever";
const hello = () => "Hello";
console.log("X  ---> ", x);
console.log("hello  ---> ", hello());
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
// Isolate declarations withing IIFE
(() => {
  const x = "IIFE Whatever";
  const hello = () => "IIFE Hello";
  console.log("IIFE X  ---> ", x);
  console.log("IIFE hello  ---> ", hello());
})();
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("X  ---> ", x);
console.log("hello  ---> ", hello());
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// Private Variables and Methods
const couterCredit = (() => {
  let counter = 0;
  console.log("Counter  ---> ", counter);
  // Cannot be access outide IIFE
  const credit = (num) =>
    console.log(`I have ${num} Credits inside CounterCredit`);
  return () => {
    counter++, credit(counter);
  };
})();
console.log("couterCredit  ---> ", couterCredit);
couterCredit();
couterCredit();
couterCredit();
// credit()
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// Module Pattern (Legacy Code)
const Score = (() => {
  let count = 0;
  // Invokes immediately and this Object is stored in 'Score' which is a module now (Similar to Constructor Function)
  return {
    // 'count' is not returned and it is 'undefined' if accessed outside 'Score'
    // Methods can be accessed using the namespace 'Score'
    current: () => `Current Count is ${count}`,
    increment: () => ++count,
    decrement: () => {
      return --count;
    },
    reset: () => (count = 0),
  };
})();
console.log("Score  ---> ", Score);
console.log("Score.count  ---> ", Score.count);
console.log("Score.current()  ---> ", Score.current());
console.log("Score.increment()  ---> ", Score.increment());
console.log("Score.reset()  ---> ", Score.reset());
console.log("Score.increment()  ---> ", Score.increment());
console.log("Score.current()  ---> ", Score.current());
console.log("Score.decrement()  ---> ", Score.decrement());
console.log("Score.decrement()  ---> ", Score.decrement());
console.log("Score.reset()  ---> ", Score.reset());
console.log("Score.current()  ---> ", Score.current());
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// Revealing Pattern (Variation of Module Pattern)
const Game = (() => {
  // Private definition area
  let count = 0;
  const current = () => `Game Score is ${count}`;
  const increment = () => ++count;
  const decrement = () => {
    return --count;
  };
  const reset = () => (count = 0);
  // Reveals the methods from the private area of IIFE using pointers inside the 'return' statement
  return {
    // 'count' is not returned and it is 'undefined' if accessed outside 'Game'
    curr: current,
    incre: increment,
    decrement: decrement,
    reset: reset,
  };
})();
console.log("Game  ---> ", Game);
console.log("Game.count  ---> ", Game.count);
console.log("Game.curr()  ---> ", Game.curr());
console.log("Game.incre()  ---> ", Game.incre());
console.log("Game.reset()  ---> ", Game.reset());
console.log("Game.incre()  ---> ", Game.incre());
console.log("Game.curr()  ---> ", Game.curr());
console.log("Game.decrement()  ---> ", Game.decrement());
console.log("Game.decrement()  ---> ", Game.decrement());
console.log("Game.reset()  ---> ", Game.reset());
console.log("Game.curr()  ---> ", Game.curr());
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// Injecting a NameSpace Object
const obj = {};
// Defined directly and called into action (No 'const' definion and a name for the IIFE)
((nameSpace) => {
  nameSpace.count = 0;
  // 'function' keyword is used so as to use the 'this' keyword to point to 'App'
  nameSpace.current = function () {
    return `NameSpace Count ${this.count}`;
  };
  nameSpace.increment = function () {
    return ++this.count;
  };
  // 'this' keyword cannot be used in Arrow Functions as it points to 'window' object
  nameSpace.decrement = () => {
    return --nameSpace.count;
  };
  nameSpace.reset = () => {
    return (nameSpace.count = 0);
  };
})((window.App = obj));
// })(obj);
// })((window.App = window.App || {}));

console.log("obj  ---> ", obj);
console.log("obj.current()  ---> ", obj.current());
console.log("obj.increment()  ---> ", obj.increment());
console.log("obj.reset()  ---> ", obj.reset());
console.log("obj.increment()  ---> ", obj.increment());
console.log("obj.current()  ---> ", obj.current());
console.log("obj.decrement()  ---> ", obj.decrement());
console.log("obj.decrement()  ---> ", obj.decrement());
console.log("obj.reset()  ---> ", obj.reset());
console.log("obj.current()  ---> ", obj.current());
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// Any Object created in the Global Scope is part of the 'window' object
// console.log("window.App  ---> ", window.App);
// console.log("App  ---> ", App);
// console.log("App.current()  ---> ", App.current());
// console.log("App.increment()  ---> ", App.increment());
// console.log("App.reset()  ---> ", App.reset());
// console.log("App.increment()  ---> ", App.increment());
// console.log("App.current()  ---> ", App.current());
// console.log("App.decrement()  ---> ", App.decrement());
// console.log("App.decrement()  ---> ", App.decrement());
// console.log("App.reset()  ---> ", App.reset());
// console.log("App.current()  ---> ", App.current());
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);
