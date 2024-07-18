/*  Scope -> Accessing a specific variable of function in a code and is directly related to Lexical Environment
    Scope of a variable -> Where can the variable be accessed? / Is the variable inside the scope of accessing area?
  
    Scope Chain -> A chain of all the Lexical Environments and their Parent References
                   It defines whether a variable is present inside the scope or not
                   It displays 'Uncaught ReferenceError: variableName is not defined' once the scope chain is exhausted
    
    Lexical Environment -> Wherever an Execution Context is created, a Lexical (Hierarchical / Sequence) Environment is alse created
                           It is the local memory along with the Lexical Environment of its parent (i.e) where it is physically present inside the code
                           In each Function Execution Context, a reference of the Lexical Environment of its parent is present in the Memory Component
                           In Global Execution Context, the Lexical Environment of the parent is 'null' and the Scope Chain is exhausted 
    
*/

// Check the Lexical Environment in Debugger
console.log("Global Space before invoking a()");
function a() {
  var x = "var X";
  console.log("Inside a() before invoking b()");
  b();
  function b() {
    console.log("x  ---> ", x);
  }
  console.log("Inside a() after invoking b()");
}
a();
console.log("Global Space after invoking a()");

/* Scopes in JS -> Global
                   Block-level
                   Functional */

console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~Outside and Before Declaration~~~~~~~~~~~~~~~~~~~~~~~~~"
);
console.log("This  ---> ", this);
console.log("varVariable  ---> ", varVariable);
console.log(
  "letVariable  --->  ReferenceError: Cannot access 'letVariable' before initialization"
);
console.log("GlobalVar  ---> ", globalVar);
console.log("CommonVar  ---> ", commonVar);
console.log("CommonVartoLet  ---> ", commonVartoLet);
console.log(
  "GlobalLet  --->  ReferenceError: Cannot access 'globalLet' before initialization"
);
console.log(
  "CommonLet  --->  ReferenceError: Cannot access 'commonLet' before initialization"
);
console.log(
  "CommonLettoVar  --->  ReferenceError: Cannot access 'commonLettoVar' before initialization"
);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

varVariable = "varVariable Outside Block (Hoisted)";
var varVariable;
var globalVar = "GlobalVar Outside Block";
var commonVar = "CommonVar Outside Block";
var commonVartoLet =
  "Common Var Outside Block assigned to Let Inside Block and Inside Function";

let letVariable;
letVariable = "letVariable Outside Block";
let globalLet = "GlobalLet Outside Block";
let commonLet = "CommonLet Outside Block";
let commonLettoVar =
  "Common Let Outside Block cannot be assigned to Var Inside Block (Illegal Shadowing) and can be assigned to Var Inside Function (Legal Shadowing)";
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~Outside After Declaration and Before Block~~~~~~~~~~~~~~~~~~~~~~~~~"
);
console.log("This  ---> ", this);
console.log("varVariable  ---> ", varVariable);
console.log("letVariable  ---> ", letVariable);
console.log("GlobalVar  ---> ", globalVar);
console.log("CommonVar  ---> ", commonVar);
console.log("CommonVartoLet  ---> ", commonVartoLet);
console.log("GlobalLet  ---> ", globalLet);
console.log("CommonLet  ---> ", commonLet);
console.log("CommonLettoVar  ---> ", commonLettoVar);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
{
  /* Anything inside {} belongs to a block (Compound Statement which combines multiple JS statements into one group) 
     Grouping is done so as to use multiple statements where JS expects only a single statement (e.g. Inside a IF clause)
     'var' variables are attacked to Global Object even is present inside a block and can be accessed from anywhere in the code
     'let' and 'const' are block scoped and and cannot be accessed outide the block (not attached to Global Object)
  */

  varVariable = "varVariable Inside Block";
  // Redeclaring 'var' variable with same name shadows Global Variable inside the block and also modifies the variable in Global Scope as both refers to the same memory space when attached to the Global Object
  var commonVar = "CommonVar Inside Block";
  var localVar = "LocalVar Inside Block";
  // Redeclaring 'let' or 'const' variable as 'var' with same name inside a function is Ilegal Shadowing as it crosses the boundary of its scope ('let' cannot be redeclared in the same Lexical Environment)
  // var commonLettoVar = "commonLettoVar assigned to Var Inside Block is not possible";

  letVariable = "letVariable Inside Block";
  // Redeclaring 'let' or 'const' variable with same name shadows Global Variable inside the block but not modifies the variable in Global Scope as it is block scoped and refers to different memory space (Block & Script)
  let commonLet = "CommonLet Inside Block";
  let localLet = "LocalLet Inside Block";
  // Redeclaring 'var' variable as 'let' or 'const' with same name inside a function is Legal Shadowing as it belongs to different memory space (Block & Global) and doesn't interfere with the scope
  let commonVartoLet = "commonVartoLet assigned to Let Inside Block";

  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~Inside Block~~~~~~~~~~~~~~~~~~~~~~~~~");
  console.log("This  ---> ", this);
  console.log("varVariable  ---> ", varVariable);
  console.log("letVariable  ---> ", letVariable);
  console.log("this.varVariable  ---> ", this.varVariable);
  console.log("this.letVariable  ---> ", this.letVariable);
  console.log("GlobalVar  ---> ", globalVar);
  console.log("CommonVar  ---> ", commonVar);
  console.log("accessing globalCommonVar  ---> ", this.commonVar);
  console.log("LocalVar  ---> ", localVar);
  console.log("GlobalLet  ---> ", globalLet);
  console.log("CommonLet  ---> ", commonLet);
  console.log("accessing global CommonLet  ---> ", this.commonLet);
  console.log("LocalLet  ---> ", localLet);
  console.log("commonVartoLet  ---> ", commonVartoLet);
  console.log("accessing global commonVartoLet  ---> ", this.commonVartoLet);
  console.log(
    "accessing global commonLettoVar inside block  ---> ",
    this.commonLettoVar
  );
}
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~Outside and After Block~~~~~~~~~~~~~~~~~~~~~~~~~"
);
console.log("This  ---> ", this);
console.log("varVariable  ---> ", varVariable);
console.log("letVariable  ---> ", letVariable);
console.log("GlobalVar  ---> ", globalVar);
console.log("CommonVar  ---> ", commonVar);
console.log("LocalVar  ---> ", localVar);
console.log("CommonVartoLet  ---> ", commonVartoLet);
console.log("GlobalLet  ---> ", globalLet);
console.log("CommonLet  ---> ", commonLet);
console.log("LocalLet not possible");
console.log("commonLettoVar  ---> ", commonLettoVar);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

console.log(
  "'iVar' before starting 'for' loop (accessed as it is hoisted)",
  iVar
);
for (var iVar = 2; iVar <= 10; iVar += 2) {
  console.log("'iVar' inside 'for' loop", iVar);
}
console.log("'iVar' after completing 'for' loop cannot be accessed", iVar);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

console.log("'iLet' before starting 'for' loop not possible");
for (let iLet = 2; iLet <= 10; iLet += 2) {
  console.log("'iLet' inside 'for' loop", iLet);
}
console.log("'iLet' after completing 'for' loop cannot be accessed");
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

let j;
console.log("'j' before starting 'for' loop", j);
for (j = 2; j <= 10; j += 2) {
  console.log("'j' inside 'for' loop", j);
}
console.log("'j' after completing 'for' loop", j);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

function fun(parameter1, parameter2) {
  // Scope rules are same for traditional functions and arrow functions

  varVariable = "varVariable Inside Function";
  // Redeclaring 'var' variable with same name shadows Global Variable inside the function but not modifies the variable in Global Scope as both refers to different memory space (Local 'this' & Global)
  var commonVar = "CommonVar Inside Function";
  var localVar = "LocalVar Inside Function";
  var funcVar = "FuncVar inside Function";
  // Redeclaring 'let' or 'const' variable as 'var' with same name inside a function is Legal Shadowing as it belongs to different memory space (Local 'this' & Script) and doesn't interfere with the scope
  var commonLettoVar = "commonLettoVar assigned to Var Inside Function";
  // Redeclaring 'let' or 'const' variable with same name shadows Global Variable inside the function but not modifies the variable in Global Scope as it is block scoped and refers to different memory space (Local 'this' & Script)

  letVariable = "letVariable Inside Function";
  let commonLet = "CommonLet Inside Function";
  let localLet = "LocalLet Inside Function";
  let funcLet = "FuncLet inside Function";
  // Redeclaring 'var' variable as 'let' or 'const' with same name inside a function is Legal Shadowing as it belongs to different memory space (Local 'this' & Global) and doesn't interfere with the scopelet
  commonVartoLet = "commonVartoLet assigned to Let Inside Function";
  console.log(
    "~~~~~~~~~~~~~~~~~~~~~~~~~Inside Function~~~~~~~~~~~~~~~~~~~~~~~~~"
  );
  console.log("This  ---> ", this);
  console.log("varVariable  ---> ", varVariable);
  console.log("letVariable  ---> ", letVariable);
  console.log("this.varVariable  ---> ", this.varVariable);
  console.log("this.letVariable  ---> ", this.letVariable);
  console.log("GlobalVar  ---> ", globalVar);
  console.log("CommonVar  ---> ", commonVar);
  console.log("accessing global CommonVar  ---> ", this.commonVar);
  console.log("LocalVar  ---> ", localVar);
  console.log("FuncVar  ---> ", funcVar);
  console.log("commonLettoVar   ---> ", commonLettoVar);
  console.log("GlobalLet  ---> ", globalLet);
  console.log("CommonLet  ---> ", commonLet);
  console.log("accessing global CommonLet  ---> ", this.commonLet);
  console.log("LocalLet  ---> ", localLet);
  console.log("FuncLet  ---> ", funcLet);
  console.log("commonVartoLet  ---> ", commonVartoLet);
  console.log("accessing global commonVartoLet  ---> ", this.commonVartoLet);
  console.log("accessing global commonLettoVar  ---> ", this.commonLettoVar);
  console.log("Parameter1 ->", parameter1, " --- Parameter2 ->", parameter2);
}
console.log("Function Call");
fun("argument1", "argument2");
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~Outside and After Function~~~~~~~~~~~~~~~~~~~~~~~~~"
);
console.log("This  ---> ", this);
console.log("varVariable  ---> ", varVariable);
console.log("letVariable  ---> ", letVariable);
console.log("GlobalVar  ---> ", globalVar);
console.log("CommonVar  ---> ", commonVar);
console.log("LocalVar  ---> ", localVar);
console.log("FuncVar not possible");
console.log("CommonVartoLet  ---> ", commonVartoLet);
console.log("GlobalLet  ---> ", globalLet);
console.log("CommonLet  ---> ", commonLet);
console.log("LocalLet not possible");
console.log("FuncLet not possible");
console.log("commonLettoVar  ---> ", commonLettoVar);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);
