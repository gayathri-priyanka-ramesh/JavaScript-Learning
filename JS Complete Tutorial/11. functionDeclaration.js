/*  Functions -> Reusable part of code performing a specific task working with DRY (Don't Repeat Yourself) Principle
      
    Function Jargons:
        ('var' | 'let' | 'const' anything can be used here)
        Parameter -> Identifiers (local variables in function scope) present in Function Definition to get the values passed and cannot be accessed outside of the function
?                      function functionName(parameter){...}

        Argument  -> Values Passed in Function Call 
?                      functionName(argument)

        Function Statement (Function Declaration) -> Tradition function written with 'function' keyword
?                      function functionName(){...}
?                      functionName()

        Function Expression -> Functions acting as 'value' to a variable
?                      var variableName = function(){...}
?                      variabelName()
        
        Named Function Expression -> Assigning a named function as a value to a variable
?                      var variableName = function functionName(){... console.log(functionName) ...}
?                      variableName()
                                     Calling it with 'functionName' throws an 'Uncaught ReferenceError: functionName is not defined' as it is just created as a local variable to be used as a value (not created in the outer scope) and it can only be accessed inside the same function like for recursion
?                      functionName()

        Anonymous Function -> Function without a name and it doesnt have its own identity
                              It can be used only where functions can be used as value such as in function expressions, 'return' statements, etc.
?                      var variableName = function(){...}
                              Anonymous Function Statement throws an 'Uncaught SyntaxError: Function Statements require a function name' according to ECMA Script 6 Specification
?                      function(){...}

        First Class Function -> Ability of functions to be used as values as 'Functions are First Class Citizens'
                                Functions can be assigned to variables (Function Expression)
?                      var variableName = function(){...}
?                      variabelName()
                                Function can be passed to another function as an argument and can be received as parameter of an function (Callback Functions)
?                      var variableName = function (parameter){...}
?                      variableName(function(){...})
                                Function can be returned from another function (Closures)
?                      var variableName = function(){... return function(){...}}
?                      variableName()
        
        Callback Function    -> A function which is passed as an argument to another function - 'func1'
        Higer-Order Function -> Takes another function as an Argument or Returns from it - 'func2'
?                      function func1(){...}
?                      function func2(func1){...func1()}
?                      func2()

        Pure Function -> Function called with Same Input gives the Same Output (No Data should be mutated)
                         All Input data are Immutable (No Input State can be modified)
                         Should have atleast One Parameter and must have a 'return' statement                     
*/

// Fuction Declaration - without parameter without return
console.log("Function call before function Declaration");
funWithoutParameterWithoutReturn();
function funWithoutParameterWithoutReturn() {
  console.log("~~~~~Function call without parameter without return~~~~~");
}
console.log(
  "funWithoutParameterWithoutReturn  ---> ",
  funWithoutParameterWithoutReturn
);
console.log("Function call after function Declaration");
funWithoutParameterWithoutReturn();
console.log(
  "'funWithoutParameterWithoutReturn()' inside 'console.log' calls the function and displays undefined  ---> ",
  funWithoutParameterWithoutReturn()
);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// Fuction Declaration - without parameter with return
console.log("Function call before function Declaration");
// Doesn't display if not given inside 'console.log()'
funWithoutParameterWithReturn();
console.log(
  "'funWithoutParameterWithReturn()' inside 'console.log' calls the function and distplays the returned result  ---> ",
  funWithoutParameterWithReturn()
);
function funWithoutParameterWithReturn() {
  return "~~~~~Function call without parameter with return~~~~~";
}
console.log(
  "funWithoutParameterWithReturn  ---> ",
  funWithoutParameterWithReturn
);
console.log("Function call after function Declaration");
console.log(
  "'funWithoutParameterWithReturn()' inside 'console.log' calls the function and displays the returned result  ---> ",
  funWithoutParameterWithReturn()
);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// Fuction Declaration - with parameter without return
console.log("Function call before function Declaration");
funWithParameterWithoutReturn();
funWithParameterWithoutReturn("argument passed in function call");
function funWithParameterWithoutReturn(parameter) {
  console.log(
    `~~~~~Function definition with parameter  --->  ${parameter}~~~~~`
  );
}
console.log(
  "funWithParameterWithoutReturn  ---> ",
  funWithParameterWithoutReturn
);
console.log("Function call after function Declaration");
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

// Fuction Declaration - with parameter with return
console.log("Function call before function Declaration");
console.log(
  "'funWithParameterWithReturn()' inside 'console.log' calls the function and displays the returned result  ---> ",
  funWithParameterWithReturn()
);
function funWithParameterWithReturn(parameter) {
  return `~~~~~Function definition with parameter with return  --->  ${parameter}~~~~~`;
}
console.log("funWithParameterWithReturn  ---> ", funWithParameterWithReturn);
console.log("Function call after function Declaration");
console.log(
  "'funWithParameterWithReturn(\"argument passed in function call\")' inside 'console.log' calls the function and displays undefined  ---> ",
  funWithParameterWithReturn("argument passed in function call")
);
console.log(
  "'funWithParameterWithReturn()' inside 'console.log' calls the function and displays the returned result  ---> ",
  funWithParameterWithReturn()
);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// Fuction Declaration - with parameter without return and parameterValue inside function
console.log("Function call before function Declaration");
funWithParameterWithoutReturnParameterValueInsideFunction();
funWithParameterWithoutReturnParameterValueInsideFunction(
  "argument passed in function call"
);
function funWithParameterWithoutReturnParameterValueInsideFunction(parameter) {
  console.log(
    `~~~~~Function call with parameter and parameterValue inside function  --->  ${(parameter =
      "Default Value")}~~~~~`
  );
}
console.log(
  "funWithParameterWithoutReturnParameterValueInsideFunction  ---> ",
  funWithParameterWithoutReturnParameterValueInsideFunction
);
console.log("Function call after function Declaration");
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

// Fuction Declaration - with parameter with return and parameterValue inside function
console.log("Function call before function Declaration");
console.log(
  "'funWithParameterWithReturnParameterValueInsideFunction()' inside 'console.log' calls the function and displays the returned result  ---> ",
  funWithParameterWithReturnParameterValueInsideFunction()
);
function funWithParameterWithReturnParameterValueInsideFunction(parameter) {
  return `~~~~~Function definition with parameter with return  --->  ${(parameter =
    "Default Value")}~~~~~`;
}
console.log(
  "funWithParameterWithReturnParameterValueInsideFunction  ---> ",
  funWithParameterWithReturnParameterValueInsideFunction
);
console.log("Function call after function Declaration");
console.log(
  "'funWithParameterWithReturnParameterValueInsideFunction(\"argument passed in function call\")' inside 'console.log' calls the function and displays undefined  ---> ",
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
