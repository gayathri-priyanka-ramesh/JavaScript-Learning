/* Object Oriented Propramming -> It is programming model or style organized around 'objects' rather than actions and 'data' rather than logic
                                  Programming paradigm to model the real-world entities and their relationships using objects and classes 
        JavaScript -> not a purely Object Oriented Language                          
*/

/* this -> Refers to object it belongs to
           Behaves differently in Strict Mode and Non-Strict Mode (different circumstances)

   'this' Substitution -> If the value of 'this' keyword may be 'undefined' or 'null' in Strict Mode
                          JS replaces the 'this' keyword value with the value of the Global Object only in the Non-Strict Mode    
*/

/* Strict Mode     -> Has certain stricter rules for JS
                      'use strict' at the top of the JS file is required to enter into Strict Mode

   Non-Strict Mode -> Regular way of writing JS without the usage of 'use strict' 
*/

"use strict";

// Inside Global Space (using alone) -> refers to global object (differs for different platforms with JS Runtime Environment e.g. Global Object inside Node.js is 'global')
console.log("Global Object of Browser (Window)  ---> ", window);
console.log(
  "This (Outside everything -> points to 'Global Object')  ---> ",
  this
);
console.log(
  "'this' refers to 'window' object (this===window)  ---> ",
  this === window
);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

window.AA = "Property created in 'window' object using 'window.propertyName'";
console.log("'window.AA' accessed using 'this.AA'  ---> ", this.AA);
this.AB = "Property created in 'window' object using 'this.propertyName'";
console.log("'this.AB' accessed using 'window.AB'  ---> ", window.AB);
console.log("Window Object after creating properties  ---> ", window);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// Inside a Function Statement -> depend on Mode used and how the function is invoked (during runtime binding)
function thisInsideFunction() {
  // 'undefined' in Strict Mode
  // Replaced with Global Object 'window' in Non - Strict Mode ('this' substitution)
  // Refers to the calling object in both Strict and Non-Strict Mode
  console.log("'this' inside a function  ---> ", this);
  // Returns 'window' (Non-Strict Mode) but it is different from that in Global Space
  return this;
}
console.log("Function called without any reference of an object");
console.log("`'this' returned from a function  ---> ", thisInsideFunction());
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("Function called with reference of an object");
console.log(
  "`'this' returned from a function  ---> ",
  window.thisInsideFunction()
);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// Inside an Arrow Function -> Retains the Value of Enclosing Lexical Context (Don't provide own 'this' binding associated with it)

// Inside an object method
const objectThisInsideObjectMethod = {
  propertyA: "ValueA",
  propertyB: "ValueB",

  // Inside a method (using Regular Function) of an object -> refers to calling (owner) object
  thisInsideObjectMethodWithRegularFunction: function () {
    console.log("Regular Function is a Method of the Object");
    console.log(
      " 'objectThisInsideObjectMethod.propertyA' -> ",
      objectThisInsideObjectMethod.propertyA,
      "\n 'objectThisInsideObjectMethod.propertyB' ->",
      objectThisInsideObjectMethod.propertyB,
      "\n 'thisInsideObjectMethodWithRegularFunction' ->",
      objectThisInsideObjectMethod.thisInsideObjectMethodWithRegularFunction,
      "\n 'thisInsideObjectMethodWithArrowFunction' ->",
      objectThisInsideObjectMethod.thisInsideObjectMethodWithArrowFunction
    );
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
    console.log(
      "'this.propertyA' is",
      this.propertyA,
      "as it looks for it in owner object as 'objectThisInsideObjectMethod.propertyA', similarly for 'this.propertyB' ->",
      this.propertyB,
      "\n 'thisInsideObjectMethodWithRegularFunction' ->",
      this.thisInsideObjectMethodWithRegularFunction,
      "\n 'thisInsideObjectMethodWithArrowFunction' ->",
      this.thisInsideObjectMethodWithArrowFunction
    );
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
    console.log(
      "Properties of 'window' object accessed using 'this.propertyName' in Regular Function inside an object method \n AA ->",
      this.AA,
      "\n AB ->",
      this.AB
    );
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
    console.log(
      "Properties of 'window' object accessed directly in Regular Function inside an object method \n AA ->",
      AA,
      "\n AB ->",
      AB
    );
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
    console.log(
      "this === objectThisInsideObjectMethod  ---> ",
      this === objectThisInsideObjectMethod
    );
    console.log(
      "this === window (because it is lexically enclosed inside Global Space) ---> ",
      this === window
    );
    return this;
  },

  // Inside a method (using Arrow Function) of an object -> refers to window object
  thisInsideObjectMethodWithArrowFunction: () => {
    console.log("Arrow Function is a Method of the Object");
    console.log(
      " 'objectThisInsideObjectMethod.propertyA' -> ",
      objectThisInsideObjectMethod.propertyA,
      "\n 'objectThisInsideObjectMethod.propertyB' ->",
      objectThisInsideObjectMethod.propertyB,
      "\n 'thisInsideObjectMethodWithRegularFunction' ->",
      objectThisInsideObjectMethod.thisInsideObjectMethodWithRegularFunction,
      "\n 'thisInsideObjectMethodWithArrowFunction' ->",
      objectThisInsideObjectMethod.thisInsideObjectMethodWithArrowFunction
    );
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
    console.log(
      "'this.propertyA' is",
      this.propertyA,
      "as it looks for it in 'window' object as 'window.propertyA', similarly for 'this.propertyB' ->",
      this.propertyB,
      "\n 'thisInsideObjectMethodWithRegularFunction' ->",
      this.thisInsideObjectMethodWithRegularFunction,
      "\n 'thisInsideObjectMethodWithArrowFunction' ->",
      this.thisInsideObjectMethodWithArrowFunction
    );
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
    console.log(
      "Properties of 'window' object accessed using 'this.propertyName' in Arrow Function inside an object method \n AA ->",
      this.AA,
      "\n AB ->",
      this.AB
    );
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
    console.log(
      "Properties of 'window' object accessed directly in Regular Function inside an object method \n AA ->",
      AA,
      "\n AB ->",
      AB
    );
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
    console.log(
      "this === objectThisInsideObjectMethod  ---> ",
      this === objectThisInsideObjectMethod
    );
    // Points to the Lexical Environment is is present (where the object is lexically present in the code)
    console.log("this === window  ---> ", this === window);
    // It behaves as if it is equal to Global Object 'window'
    return this;
  },

  thisInsideArrowFunctionInsideFunctionStatement: function () {
    console.log("Inside Enclosing Lexical Context");
    console.log(
      "this === objectThisInsideObjectMethod  ---> ",
      this === objectThisInsideObjectMethod
    );
    console.log("this === window  ---> ", this === window);
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
    const arrowFunctionInsideFunctionStatement = () => {
      console.log(
        "Arrow Function enclosed inside Function Statement which is a Method of the Object"
      );
      console.log(
        " 'objectThisInsideObjectMethod.propertyA' -> ",
        objectThisInsideObjectMethod.propertyA,
        "\n 'objectThisInsideObjectMethod.propertyB' ->",
        objectThisInsideObjectMethod.propertyB,
        "\n 'thisInsideObjectMethodWithRegularFunction' ->",
        objectThisInsideObjectMethod.thisInsideObjectMethodWithRegularFunction,
        "\n 'thisInsideObjectMethodWithArrowFunction' ->",
        objectThisInsideObjectMethod.thisInsideObjectMethodWithArrowFunction
      );
      console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
      console.log(
        "'this.propertyA' is",
        this.propertyA,
        "as it looks for it in 'window' object as 'window.propertyA', similarly for 'this.propertyB' ->",
        this.propertyB,
        "\n 'thisInsideObjectMethodWithRegularFunction' ->",
        this.thisInsideObjectMethodWithRegularFunction,
        "\n 'thisInsideObjectMethodWithArrowFunction' ->",
        this.thisInsideObjectMethodWithArrowFunction
      );
      console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
      console.log(
        "Properties of 'window' object accessed using 'this.propertyName' in Arrow Function inside an object method \n AA ->",
        this.AA,
        "\n AB ->",
        this.AB
      );
      console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
      console.log(
        "Properties of 'window' object accessed directly in Regular Function inside an object method \n AA ->",
        AA,
        "\n AB ->",
        AB
      );
      console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
      // Enclosing Lexical Context is the Function inside which this Arrow Function is defined
      console.log(
        "this === objectThisInsideObjectMethod  ---> ",
        this === objectThisInsideObjectMethod
      );
      console.log("this === window  ---> ", this === window);
      // It behaves as if it is equal to the value of 'this' inside the lexical environment it is enclosed
      return this;
    };
    arrowFunctionInsideFunctionStatement();
  },
};
console.log(
  "`'this' inside a object method using Regular Function  ---> ",
  objectThisInsideObjectMethod.thisInsideObjectMethodWithRegularFunction()
);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);
console.log(
  "`'this' inside a object method using Arrow Function  ---> ",
  objectThisInsideObjectMethod.thisInsideObjectMethodWithArrowFunction()
);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);
console.log(
  "`'this' inside a object method using Arrow Function inside a Function Statement  ---> ",
  objectThisInsideObjectMethod.thisInsideArrowFunctionInsideFunctionStatement()
);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// Inside DOM Elements -> Reference to HTMLElement
document.getElementById("thisDOM").addEventListener("click", function () {
  console.log("Value of 'this' on 'click' event on Button  --->  ", this);
});
