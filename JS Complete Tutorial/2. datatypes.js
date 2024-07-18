// Primitive Data Types
// Number
let numberIntVariable = 111222;
console.log(numberIntVariable, "---", typeof numberIntVariable);
let numberFloatVariable = -3.017;
console.log(numberFloatVariable, "---", typeof numberFloatVariable);
// Converted to Integer to reduce space if decimal is only '0's
let numberIntVariableWithPointZero = 1745.0;
console.log(
  numberIntVariableWithPointZero,
  "---",
  typeof numberIntVariableWithPointZero
);
let numberInfinityVariable = Infinity;
console.log(numberInfinityVariable, "---", typeof numberInfinityVariable);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// String
let stringTextVariable = "Hello World";
console.log(stringTextVariable, "---", typeof stringTextVariable);
let stringNumberVariable = "03172021";
console.log(stringNumberVariable, "---", typeof stringNumberVariable);
let stringFloatingNumberVariable = "1112.2022";
console.log(
  stringFloatingNumberVariable,
  "---",
  typeof stringFloatingNumberVariable
);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// Boolean
// Falsy Values -> false, null, undefined, 0, -0, NaN, '', "", `` (empty quotes)
// Truthy Values -> all excluding falsy values
let booleanVariable = true;
console.log(booleanVariable, "---", typeof booleanVariable);
booleanVariable = false;
console.log(booleanVariable, "---", typeof booleanVariable);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// Undefined -> Set by JS Compiler
let undefinedVariable;
console.log(undefinedVariable, "---", typeof undefinedVariable);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// Symbol
const symbol1 = Symbol();
//Has some unique ID -> dlkfngsgs6565df6
console.log(symbol1, "---", typeof symbol1);
const symbol2 = Symbol();
//Has some unique ID -> brgwvfcsd2946yt1
console.log(symbol2, "---", typeof symbol2);
console.log("symbol1==symbol2", symbol1 == symbol2);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// Reference Types -> 'object' (any data with which 'new' keyword can be used)
// Null -> Set by developer
let nullVariable = null;
console.log(nullVariable, "---", typeof nullVariable);
// Type should be 'null' but it is object (known bug in JS)

// Null - Undefined
console.log("null==0", nullVariable == 0);
console.log("null==false", nullVariable == false);
console.log("undefined==0", undefinedVariable == 0);
console.log("undefined==false", undefinedVariable == false);
console.log("null==undefined", nullVariable == undefinedVariable);
console.log("null===undefined", nullVariable === undefinedVariable);
console.log("0==false", 0 == false);
console.log("0===false", 0 === false);
console.log("0==''", 0 == "");
console.log("0===''", 0 === "");
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

// Array
let arrayVariable = [1, 2, 3, 4, 5];
console.log(arrayVariable, "---", typeof arrayVariable);

// Json
let jsonVariable = { fname: "Gayathri Priyanka", lname: "Ramesh", age: 21 };
console.log(jsonVariable, "---", typeof jsonVariable);

// Date
var dateVariable = new Date();
console.log(
  dateVariable,
  "---",
  typeof dateVariable,
  "---",
  typeof Date,
  "---",
  typeof Date()
);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// Fuction
console.log(String(), "---", typeof String, "---", typeof String());
console.log(String("Text"), "---", typeof String, "---", typeof String("Text"));
console.log(String(1234), "---", typeof String, "---", typeof String(1234));
console.log(toString(), "---", typeof toString, "---", typeof toString());
console.log(
  stringTextVariable.toString(),
  "---",
  typeof toString,
  "---",
  typeof stringTextVariable.toString()
);
console.log(
  numberIntVariable.toString(),
  "---",
  typeof toString,
  "---",
  typeof numberIntVariable.toString()
);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
function hello() {
  console.log("Hello World");
}
console.log(hello, "---", typeof hello, "---", typeof hello());
console.log(hello(), "---", typeof hello());
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Type Conversion -> Explicit
// Any data type to 'string' type can be done using 'String(variableName)' class or 'variableName.toString()' fuction
console.log(
  arrayVariable,
  "---",
  String(arrayVariable),
  "---",
  typeof String(arrayVariable)
);
console.log(
  jsonVariable,
  "---",
  String(jsonVariable),
  "---",
  typeof String(jsonVariable)
);
console.log(
  dateVariable,
  "---",
  String(dateVariable),
  "---",
  typeof String(dateVariable)
);
console.log(
  numberInfinityVariable,
  "---",
  numberInfinityVariable.toString(),
  "---",
  typeof numberInfinityVariable.toString()
);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// Any data type to 'number' type can be done using '+variableName' or 'Number(variableName)' class or 'parseInt(variableName)' function
console.log(
  stringNumberVariable,
  "---",
  +stringNumberVariable,
  "---",
  typeof +stringNumberVariable
);
console.log(
  stringFloatingNumberVariable,
  "---",
  +stringFloatingNumberVariable,
  "---",
  typeof +stringFloatingNumberVariable
);
console.log(
  stringTextVariable,
  "---",
  +stringTextVariable,
  "---",
  typeof +stringTextVariable
);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);
console.log(
  stringNumberVariable,
  "---",
  Number(stringNumberVariable),
  "---",
  typeof Number(stringNumberVariable)
);
console.log(
  stringFloatingNumberVariable,
  "---",
  Number(stringFloatingNumberVariable),
  "---",
  typeof Number(stringFloatingNumberVariable)
);
console.log(
  stringTextVariable,
  "---",
  Number(stringTextVariable),
  "---",
  typeof Number(stringTextVariable)
);
console.log(
  arrayVariable,
  "---",
  Number(arrayVariable),
  "---",
  typeof Number(arrayVariable)
);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

console.log(
  stringTextVariable,
  "---",
  parseInt(stringTextVariable),
  "---",
  typeof parseInt(stringTextVariable)
);
console.log(
  stringTextVariable,
  "---",
  parseFloat(stringTextVariable),
  "---",
  typeof parseFloat(stringTextVariable)
);
console.log(
  stringNumberVariable,
  "---",
  parseInt(stringNumberVariable),
  "---",
  typeof parseInt(stringNumberVariable)
);
console.log(
  stringNumberVariable,
  "---",
  parseFloat(stringNumberVariable),
  "---",
  typeof parseFloat(stringNumberVariable)
);
console.log(
  stringFloatingNumberVariable,
  "---",
  parseInt(stringFloatingNumberVariable),
  "---",
  typeof parseInt(stringFloatingNumberVariable)
);
console.log(
  stringFloatingNumberVariable,
  "---",
  parseFloat(stringFloatingNumberVariable),
  "---",
  typeof parseFloat(stringFloatingNumberVariable)
);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

console.log(
  numberFloatVariable,
  "---",
  parseInt(numberFloatVariable),
  "---",
  typeof parseInt(numberFloatVariable)
);
console.log(
  numberIntVariable,
  "---",
  parseFloat(numberIntVariable),
  "---",
  typeof parseFloat(numberIntVariable)
);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

console.log(
  numberInfinityVariable,
  "---",
  Number(numberInfinityVariable),
  "---",
  typeof Number(numberInfinityVariable)
);
console.log(
  numberInfinityVariable,
  "---",
  parseInt(numberInfinityVariable),
  "---",
  typeof parseInt(numberInfinityVariable)
);
console.log(
  numberInfinityVariable,
  "---",
  parseFloat(numberInfinityVariable),
  "---",
  typeof parseFloat(numberInfinityVariable)
);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

console.log(
  booleanVariable,
  "---",
  Number(booleanVariable),
  "---",
  typeof Number(booleanVariable)
);
console.log(
  booleanVariable,
  "---",
  parseInt(booleanVariable),
  "---",
  typeof parseFloat(booleanVariable)
);
console.log(
  booleanVariable,
  "---",
  parseFloat(booleanVariable),
  "---",
  typeof parseFloat(booleanVariable)
);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// Type Coercion -> Implicit
// 'number' with 'string' -> Concatenation
console.log(
  numberFloatVariable,
  "+",
  stringNumberVariable,
  "--->",
  numberFloatVariable + stringNumberVariable,
  "Type ->",
  typeof (numberFloatVariable + stringNumberVariable)
);
// 'number' with 'Number(stringInNumber)' -> Addition
console.log(
  numberFloatVariable,
  "+ Number(" + stringNumberVariable + ") --->",
  numberFloatVariable + Number(stringNumberVariable),
  "Type ->",
  typeof (numberFloatVariable + Number(stringNumberVariable))
);
// 'number' with '+stringInNumber' -> Addition
console.log(
  numberFloatVariable,
  "+ +" + stringNumberVariable + " --->",
  numberFloatVariable + +stringNumberVariable,
  "Type ->",
  typeof (numberFloatVariable + +stringNumberVariable)
);
// 'number' with 'Number(stringInText)' -> Addition
console.log(
  numberFloatVariable,
  "+ Number(" + stringTextVariable + ") --->",
  numberFloatVariable + Number(stringTextVariable),
  "Type ->",
  typeof (numberFloatVariable + Number(stringTextVariable))
);
// 'number' with '+stringInText' -> Addition
console.log(
  numberFloatVariable,
  "+ +"+
  stringTextVariable+
  " --->",
  numberFloatVariable + +stringTextVariable,
  "Type ->",
  typeof (numberFloatVariable + +stringTextVariable)
);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Dynamically Typed -> assigns different types implicitly based on its value
let variable;
console.log(
  "variable  ---> ",
  variable,
  " -----  typeof variable  ---> ",
  typeof variable
);
variable = "a";
console.log(
  "variable  ---> ",
  variable,
  " -----  typeof variable  ---> ",
  typeof variable
);
variable = 0;
console.log(
  "variable  ---> ",
  variable,
  " -----  typeof variable  ---> ",
  typeof variable
);
variable = null;
console.log(
  "variable  ---> ",
  variable,
  " -----  typeof variable  ---> ",
  typeof variable
);
variable = true;
console.log(
  "variable  ---> ",
  variable,
  " -----  typeof variable  ---> ",
  typeof variable
);
variable = undefined;
console.log(
  "variable  ---> ",
  variable,
  " -----  typeof variable  ---> ",
  typeof variable
);
variable = [1, 2, "c"];
console.log(
  "variable  ---> ",
  variable,
  " -----  typeof variable  ---> ",
  typeof variable
);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);
