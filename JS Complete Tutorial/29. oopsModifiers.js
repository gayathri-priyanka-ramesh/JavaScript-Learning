/* Class Modifiers -> Access Modifiers or Visibility Modifier are keywords in OOP languages
                      Define visibility or accessibility of class members from other parts of the program
                       the level of Encapsulation and enforce encapsulation principles by restricting Direct Access to certain class members
                      
   JavaScript -> Doesn't have traditional access modifiers
                 Class modifiers are used in context of classes and objects using different conventions and techniques
                 Achieved using 'Closure' or 'Encapsulation' */

class ClassModifiers {
  constructor(publicField, privateField, protectedField, fieldEmptyValue) {
    console.log("ClassModifiers Constructor Function --- This  ---> ", this);
    // Public Field (this)
    this.publicField = publicField;
    // Private Field (closure) -> declared using 'const' and starts with '_' by naming convention"
    const _privateField = privateField;
    // Protected Field
    const _protectedField = protectedField;
    // Field Empty
    let fieldEmptyProperty = fieldEmptyValue;

    // Public Method
    this.publicMethod = function () {
      console.log("Public Method --- This  ---> ", this);
      return `Public Method  ---  Public Field -> ${publicField},   Private Field -> ${_privateField},   Protected Field -> ${_protectedField},   Field Empty -> ${fieldEmptyProperty}`;
    };
    // Private Method (closure)
    function _privateMethod() {
      console.log("Private Method  ---  this ->", this);
      // return `Private Method  ---  Public Field -> ${this.publicField},   Private Field -> ${_privateField},   Protected Field -> ${_protectedField},   Field Empty -> ${fieldEmptyProperty}`;
      return `Private Method  ---  Public Field -> ${publicField},   Private Field -> ${_privateField},   Protected Field -> ${_protectedField},   Field Empty -> ${fieldEmptyProperty}`;
    }
    // Protected Method (closure)
    function _protectedMethod() {
      console.log("Protected Method  ---  this ->", this);
      return `Protected Method  ---  Public Field -> ${publicField},   Private Field -> ${privateField},   Protected Field -> ${protectedField},   Field Empty -> ${fieldEmptyProperty}`;
    }

    let methodEmpty = function () {
      // When a function is used as a callback, 'this' is lost and it will display undefined
      console.log("MethodEmpty  ---  this ->", this);
      // return `MethodEmpty  ---  Public Field -> ${this.publicField},   Private Field -> ${_privateField},   Protected Field -> ${_protectedField},   Field Empty -> ${fieldEmptyProperty}`;
      return `MethodEmpty  ---  Public Field -> ${publicField},   Private Field -> ${_privateField},   Protected Field -> ${_protectedField},   Field Empty -> ${fieldEmptyProperty}`;
    };

    let methodEmptyBind = function () {
      console.log("MethodEmptyBind  ---  this ->", this);
      return `MethodEmptyBind  ---   Public Field -> ${this.publicField},   Private Field -> ${_privateField},   Protected Field -> ${_protectedField},   Field Empty -> ${fieldEmptyProperty}`;
      // 'bind()' -> Preserves 'this' and resolves the function to point 'this' to its Owner Object and not to Window Object (an object can borrow a method from another object -> 'Window' object borrows the 'methodEmptyBind()' method from 'ClassModifiers' object)
    }.bind(this);

    // Public Method to access Public Method
    this.accessPublicMethod = function () {
      return this.publicMethod();
    };
    // Public Method to access Private Method
    this.accessPrivateMethod = function () {
      return _privateMethod();
    };
    // Public Method to access Protected Method
    this.accessProtectedMethod = function () {
      return _protectedMethod();
    };
    this.accessmethodEmpty = function () {
      // 'this' is lost in this calback function
      return methodEmpty();
    };
    this.accessmethodEmptyBind = function () {
      // 'this' is prevented in this calback function as 'bind()' is used
      return methodEmptyBind();
    };
  }
}

const obj = new ClassModifiers(
  "Public Data",
  "Private Data",
  "Protected Data",
  "Empty Data"
);

console.log("Public Field  ---> ", obj.publicField);
console.log("Private Field  ---> ", obj._privateField);
console.log("Protected Field  ---> ", obj._protectedField);
console.log("obj.fieldEmptyProperty  ---> ", obj.fieldEmptyProperty);
// console.log("fieldEmptyProperty  ---> ", fieldEmptyProperty);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("Window Object  ---> ", window);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

console.log("'obj.publicMethod'  ---> ", obj.publicMethod);
console.log("'obj.publicMethod()'  ---> ", obj.publicMethod());
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

console.log("'obj.privateMethod'  ---> ", obj.privateMethod);
// console.log("'obj.privateMethod()'  ---> ", obj.privateMethod());
console.log(
  "'obj._privateMethod()'  --->  Uncaught TypeError: obj._privateMethod is not a function "
);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

console.log("'obj.protectedMethod'  ---> ", obj.protectedMethod);
// console.log("'obj.protectedMethod()'  ---> ", obj.protectedMethod());
console.log(
  "'obj._protectedMethod()'  --->  Uncaught TypeError: obj._protectedMethod is not a function "
);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

console.log("'obj.methodEmpty'  ---> ", obj.methodEmpty);
// console.log("'obj.methodEmpty()'  ---> ", obj.methodEmpty());
console.log(
  "'obj.methodEmpty()'  --->  Uncaught TypeError: obj.methodEmpty is not a function "
);
console.log("'this.methodEmpty'  ---> ", this.methodEmpty);
// console.log("'this.methodEmpty()'  ---> ", this.methodEmpty());
console.log(
  "'this.methodEmpty()'  --->  Uncaught TypeError: this.methodEmpty is not a function "
);
console.log("'methodEmpty'  ---> ", ClassModifiers.methodEmpty);
// console.log("'methodEmpty()'  ---> ", ClassModifiers.methodEmpty());
console.log(
  "'methodEmpty()'  --->  Uncaught TypeError: ClassModifiers.methodEmpty is not a function "
);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

console.log("'obj.methodEmptyBind'  ---> ", obj.methodEmptyBind);
// console.log("'obj.methodEmptyBind()'  ---> ", obj.methodEmptyBind());
console.log(
  "'obj.methodEmptyBind()'  --->  Uncaught TypeError: obj.methodEmptyBind is not a function "
);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

console.log("'obj.accessPublicMethod()'  ---> ", obj.accessPublicMethod());
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

console.log("'obj.accessPrivateMethod()'  ---> ", obj.accessPrivateMethod());
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

console.log(
  "'obj.accessProtectedMethod()'  ---> ",
  obj.accessProtectedMethod()
);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

console.log("'obj.accessmethodEmpty()'  ---> ", obj.accessmethodEmpty());
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

console.log(
  "'obj.accessmethodEmptyBind()'  ---> ",
  obj.accessmethodEmptyBind()
);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);
