// Method -> Function inside an object
console.log("Calling method before object declaration is not possible");
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
// object Declaration
const object = {
  property1: "Value1",
  property2: "Value2",
  // Reference of function is given inside object becomes a method of object
  methodWithoutParameter,
  methodWithParameter: function (parameter) {
    return `~~~~~Method definition with ${parameter} and displays values of accessed objects properties  ---> Property1 - ${object.property1}, Property2 - ${object.property2}~~~~~`;
  },
};

// Method of object is accessed with '.' operator
console.log(
  "Calling method after object declaration and before method declaration"
);
// console.log(
//   object.methodWithoutParameter("Argument passed to Overwritten Method")
// );
console.log(object.methodWithoutParameter());
console.log(object.methodWithoutParameter);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
// Calling methods by passing arguments
console.log(object.methodWithParameter("Argument Passed"));
console.log(object.methodWithParameter());
console.log(object.methodWithParameter);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// Function Declaration
function methodWithoutParameter() {
  return `~~~~~Method definition that displays values of accessed object properties  ---> Property1 - ${object.property1}, Property2 - ${object.property2}~~~~~`;
}

console.log(
  "Calling method after object declaration and after method declaration (before Overwritten method declaration)"
);
// console.log(
//   object.methodWithoutParameter("Argument passed to Overwritten Method")
// );
console.log(object.methodWithoutParameter());
console.log(object.methodWithoutParameter);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
// Calling methods by passing arguments
console.log(object.methodWithParameter("Argument Passed"));
console.log(object.methodWithParameter());
console.log(object.methodWithParameter);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// Overwritten Function Declaration
function methodWithoutParameter(parameterForOverwitten) {
  return `~~~~~Overwritten Method definition with ${parameterForOverwitten} that displays values of accessed object properties  ---> Property1 - ${object.property1}, Property2 - ${object.property2}~~~~~`;
}

console.log(
  "Calling method after object declaration and after method declaration (after Overwritten method declaration)"
);
console.log(
  object.methodWithoutParameter("Argument passed to Overwritten Method")
);
console.log(object.methodWithoutParameter());
console.log(object.methodWithoutParameter);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
// Calling methods by passing arguments
console.log(object.methodWithParameter("Argument Passed"));
console.log(object.methodWithParameter());
console.log(object.methodWithParameter);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);
