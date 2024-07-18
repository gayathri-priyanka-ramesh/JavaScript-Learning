/* Function Expression -> Functions acting as 'value' to a variable
                          Function call before function Expression is not possible as 'functionName' is treated as a variable
                              It is hoisted as 'undefined' in case of 'var' and throws an 'Uncaught TypeError: funtionName is not a function'
                              It is hoisted in the Temporal Dead Zone in case of 'let' or 'const' and throws an 'Uncaught ReferenceError: functionName is not defined'
*/
// Fuction Expression - without parameter without return
const funWithoutParameterWithoutReturn = function () {
  console.log("~~~~~Function call without parameter without return~~~~~");
};
console.log(
  "funWithoutParameterWithoutReturn  ---> ",
  funWithoutParameterWithoutReturn
);
funWithoutParameterWithoutReturn();
console.log(
  "'funWithoutParameterWithoutReturn()' inside 'console.log' calls the function and displays undefined  ---> ",
  funWithoutParameterWithoutReturn()
);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// Fuction Expression - without parameter with return
const funWithoutParameterWithReturn = function () {
  return "~~~~~Function call without parameter with return~~~~~";
};
console.log(
  "funWithoutParameterWithReturn  ---> ",
  funWithoutParameterWithReturn
);
console.log(
  "'funWithoutParameterWithReturn()' inside 'console.log' calls the function and displays the returned result  ---> ",
  funWithoutParameterWithReturn()
);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// Fuction Expression - with parameter without return
const funWithParameterWithoutReturn = function (parameter) {
  console.log(
    `~~~~~Function definition with parameter  --->  ${parameter}~~~~~`
  );
};
console.log(
  "funWithParameterWithoutReturn  ---> ",
  funWithParameterWithoutReturn
);
funWithParameterWithoutReturn();
funWithParameterWithoutReturn("argument passed in function call");
console.log(
  "'funWithParameterWithoutReturn(\"argument passed in function call\")' inside 'console.log' calls the function and displays undefined  ---> ",
  funWithParameterWithoutReturn("argument passed in function call")
);
console.log(
  "'funWithParameterWithoutReturn()' inside 'console.log' calls the function and displays undefined  ---> ",
  funWithParameterWithoutReturn()
);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// Fuction Expression - with parameter with return
console.log("Function call before function Expression not possible");
const funWithParameterWithReturn = function (parameter) {
  return `~~~~~Function definition with parameter with return  --->  ${parameter}~~~~~`;
};
console.log("funWithParameterWithReturn  ---> ", funWithParameterWithReturn);
console.log(
  "'funWithParameterWithReturn(\"argument passed in function call\")' inside 'console.log' calls the function and displays the returned result  ---> ",
  funWithParameterWithReturn("argument passed in function call")
);
console.log(
  "'funWithParameterWithReturn()' inside 'console.log' calls the function and displays the returned result  ---> ",
  funWithParameterWithReturn()
);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// Fuction Expression - with parameter without return and parameterValue inside function
console.log("Function call before function Expression not possible");
const funWithParameterWithoutReturnParameterValueInsideFunction = function (
  parameter
) {
  console.log(
    `~~~~~Function call with parameter and parameterValue inside function  --->  ${(parameter =
      "Default Value")}~~~~~`
  );
};
console.log(
  "funWithParameterWithoutReturnParameterValueInsideFunction  ---> ",
  funWithParameterWithoutReturnParameterValueInsideFunction
);
console.log("Functtion call after function Expression");
funWithParameterWithoutReturnParameterValueInsideFunction();
funWithParameterWithoutReturnParameterValueInsideFunction(
  "argument passed in function call"
);
console.log(
  "'funWithParameterWithoutReturnParameterValueInsideFunction(\"argument passed in function call\")' inside 'console.log' calls the function and displays undefined  ---> ",
  funWithParameterWithoutReturnParameterValueInsideFunction(
    "argument passed in function call"
  )
);
console.log(
  "'funWithParameterWithoutReturnParameterValueInsideFunction()' inside 'console.log' calls the function and displays undefined  ---> ",
  funWithParameterWithoutReturnParameterValueInsideFunction()
);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// Fuction Expression - with parameter with return and parameterValue inside function
const funWithParameterWithReturnParameterValueInsideFunction = function (
  parameter
) {
  return `~~~~~Function definition with parameter with return  --->  ${(parameter =
    "Default Value")}~~~~~`;
};
console.log(
  "funWithParameterWithReturnParameterValueInsideFunction  ---> ",
  funWithParameterWithReturnParameterValueInsideFunction
);
console.log(
  "'funWithParameterWithReturnParameterValueInsideFunction(\"argument passed in function call\")' inside 'console.log' calls the function and displays the returned result  ---> ",
  funWithParameterWithReturnParameterValueInsideFunction(
    "argument passed in function call"
  )
);
console.log(
  "'funWithParameterWithReturnParameterValueInsideFunction()' inside 'console.log' calls the function and displays the returned result  ---> ",
  funWithParameterWithReturnParameterValueInsideFunction()
);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);
