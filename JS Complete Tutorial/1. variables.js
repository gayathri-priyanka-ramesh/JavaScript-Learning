// Variables
// Scope
if (true) {
  var scopeVar = "'var' variable has global scope";
  let scopeLet = "'let' variable has local scope";
  const scopeConst = "'const' variable has local scope";
  console.log("Inside 'if' ->", scopeVar);
  console.log("Inside 'if' ->", scopeLet);
  console.log("Inside 'if' ->", scopeConst);
}
console.log("Outside 'if' ->", scopeVar);
// console.log("Outside 'if' ->", scopeLet);
console.log("'let' cannot be accessed Outside 'if'");
// console.log("Outside 'if' ->", scopeConst);
console.log("'const' cannot be accessed Outside 'if'");
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// Redeclaration
var redeclareVar = "'var' variable initial declaration";
console.log(redeclareVar);
var redeclareVar = "'var' variable redeclaration possible";
console.log(redeclareVar);
let redeclareLet = "'let' variable initial declaration";
console.log(redeclareLet);
// let redeclareLet = "'let' variable redeclaration";
console.log("'let' variable redeclaration not possible");
const redeclareConst = "'const' variable initial declaration";
console.log(redeclareConst);
// const redeclareConst = "'const' variable redeclaration";
console.log("'const' variable redeclaration not possible");
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// Reassign
var reassignVar;
reassignVar = "'var' variable initial assignment";
console.log(reassignVar);
reassignVar = "'var' variable reassignment possible";
console.log(reassignVar);
let reassignLet;
reassignLet = "'let' variable initial assignment";
console.log(reassignLet);
reassignLet = "'let' variable reassignment possible";
console.log(reassignLet);
const reassignConst = "'const' variable initial assignment";
console.log(reassignConst);
// const reassignConst;
// reassignConst = "'const' variable assignment after declaration";
console.log("'const' variable cannot be declared without initial assignment");
// reassignConst = "'const' variable reassignment";
console.log("'const' variable reassignment not possible");

const reassignConstObject = {
  ojbName: "'const' object Initial Assignment",
  objStatus: "'const' object can be reassigned",
};
console.log(reassignConstObject);
reassignConstObject.ojbName = "'const' object Ressignment";
console.log(reassignConstObject);
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
