/*  Hoisting -> Phenomenon to access the variables and function even before initialization without any error 
               'var', 'let' and 'const' are all hoisted but in different behaviour
      var         -> Memory is allocated in the Global Memory Space and attached to the Global Object
      let | const -> Memory is allocated in Script Memory Space with 'undefined' placeholder (not attached to the Global Object) and cannot be accessed before assigned with any value

    Temporal Dead Zone -> The time / phase since when the 'let' or 'const' variables are hoisted until it is initialized with some values (the code before the variable initialization with some value 'let variableName = value')
                          Temporal Dead Zone window is shrunk to 0 if all the declarations and initializations are done at the start of the file
*/

// Behaviour of Execution Context displays undefined for variable and the entire code for function definition
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~Before initialization~~~~~~~~~~~~~~~~~~~~~~~~~"
);
// Not Defined -> The variable is not present in memory creation phase (throws an error)
// console.log("dummy  -> ", dummyVariable);
console.log("dummy  ->  Uncaught ReferenceError: dummyVariable is not defined");

// Undefined -> The variable is present in memory creation phase but its value is not set by code execution phase (throws no error as 'undefined' is a placeholder until the variable is assigned any value)
console.log("Var  -> ", varVariable);
// console.log("Let  -> ", letVariable);
// ReferenceError -> JS engine finds the reference of the variable which is not accessible from the memory (present in Temporal Dead Zone) or not present in the memory (all line of code above the line causing reference error will be executed)
console.log(
  "Let  ->  Uncaught ReferenceError: Cannot access 'letVariable' before initialization"
);
// console.log("Const  -> ", constVariable);
console.log(
  "Const  ->  Uncaught ReferenceError: Cannot access 'constVariable' before initialization"
);

console.log("Empty Var  -> ", emptyVar);
// console.log("Empty Let  -> ",emptyLet);
// console.log(
//   "Empty Let  ->  Uncaught ReferenceError: Cannot access 'letVariable' before initialization"
// );
console.log("Empty Const throws 'SyntaxError'");

console.log("Reinitialize Var -> ", reinitializeVar);
// console.log("Reinitialize Let -> ", reinitializeLet);
// console.log(
//   "Reinitialize Let ->  Uncaught ReferenceError: Cannot access 'reinitializeLet' before initialization"
// );
console.log("Reinitializing Const throws 'SyntaxError'");

console.log("Redeclare Var  -> ", redeclareVar);
// console.log("Redeclare Let  -> ", redeclareLet);
// console.log(
//   "Redeclare Let  ->  Uncaught ReferenceError: Cannot access 'redeclareLet' before initialization"
// );
console.log("Redeclaring Const throws 'SyntaxError'");

console.log("Function -> ", fun);
fun("Argument1");

// Arrow Function and Expression Function behaves just like variables and memory is allocated in memory creation phase with a spacial value 'undefined'
console.log("Arrow Function -> ", arrowFun);
// arrowFun("Argument1");
// Uncaught TypeError: arrowFun is not a function

console.log("Expression Function -> ", expressionFun);
// expressionFun("Argument1");
// Uncaught TypeError: expressionFun is not a function

// Check the execution by debugging under 'sources'
dummyVariable = "variable";
var varVariable = "Var Variable";
let letVariable = "Let Variable";
const constVariable = "Const Variable";

varVariable = "Reassigned Var";
letVariable = "Reassigned Let";
// constVariable = "Reassigned Const";
// TypeError -> the variable type doesn't match with the operation performed (all line of code above the line causing type error will be executed)
// Uncaught TypeError: Assignment to constant variable

var emptyVar;
let emptyLet;
// const emptyConst;
// SyntacError -> mismatch in the coding standard of the language (none of the lines will be executed until the syntac error is rectified)
// Uncaught SyntaxError: Missing initializer in const declaration

var reinitializeVar;
reinitializeVar = "Var 1";
reinitializeVar = "Var 2";
let reinitializeLet;
reinitializeLet = "Let 1";
reinitializeLet = "Let 2";

var redeclareVar = "Initial Var";
var redeclareVar = "Redeclared Var";
let redeclareLet = "Initial Let";
// let redeclareLet = "Redeclared Let";
// var redeclareLet = "Redeclared Let as Var in same Scope is not possible";
// Uncaught SyntaxError: Identifier 'redeclareLet' has already been declared
const redeclareConst = "Initial Const";
// const redeclareConst = "Redeclared Const";
// Uncaught SyntaxError: Identifier 'redeclareConst' has already been declared

function fun(parameter) {
  console.log("Function with", parameter, "passed");
}
var arrowFun = (parameter) => {
  console.log("Arrow Function with", parameter, "passed");
};
var expressionFun = function (parameter) {
  console.log("Expression Function with", parameter, "passed");
};

console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~After initialization~~~~~~~~~~~~~~~~~~~~~~~~~"
);
console.log("dummy  -> ", dummyVariable);
console.log("Var  -> ", varVariable);
console.log("Let  -> ", letVariable);
console.log("Const  -> ", constVariable);
console.log("Empty Var  -> ", emptyVar);
console.log("Empty Let  -> ", emptyLet);
console.log("Reinitialize Var -> ", reinitializeVar);
console.log("Reinitialize Let -> ", reinitializeLet);
console.log("Redeclare Var  -> ", redeclareVar);
console.log("Redeclare Let  -> ", redeclareLet);
console.log("Function -> ", fun);
fun("Argument2");
console.log("Arrow Function -> ", arrowFun);
arrowFun("Argument2");
console.log("Expression Function -> ", expressionFun);
expressionFun("Argument2");
