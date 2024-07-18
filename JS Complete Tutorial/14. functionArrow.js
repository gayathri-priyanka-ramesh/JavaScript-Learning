// Arrow Function -> Introduced in ECMA Script 6 (ES6)

// variable type (var|let|const) can be omitted for arrow functions
// '()' for parameters can be omitted if the function has only 1 parameter, and it is mandate if function has 0 or more than 1 parameter
// '{}' and 'return' keyword can be omitted if function has only one line to execute, else it is mandate
functionName = (parameterName) =>
  `One Line Function with ${parameterName} passed`;
console.log(functionName);
console.log(functionName());
console.log(functionName("Argument"));
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

const functionArrow = (parameter1, parameter2) => {
  console.log(`Arrow Function - First ${parameter1}`);
  console.log(`Arrow Function - Second ${parameter2}`);
  return `Arrow Function Executed`;
};
console.log(functionArrow);
console.log(functionArrow());
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log(functionArrow("Argument1", "Argument2"));
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

setTimeout(function () {
  console.log("Outer Function");
  setTimeout(function () {
    console.log("Middle Function");
    setTimeout(function () {
      console.log("Inner Function");
    }, 500);
  }, 1500);
}, 1000);
// Refactoring to Arrow Function
setTimeout(() => {
  console.log("Outer Arrow Function");
  setTimeout(() => {
    console.log("Middle Arrow Function");
    setTimeout(() => {
      console.log("Inner Arrow Function");
    }, 250);
  }, 1250);
}, 750);

