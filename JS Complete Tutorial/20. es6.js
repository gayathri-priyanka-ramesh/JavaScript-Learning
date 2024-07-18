/* Factory Function -> used to create and return objects
                       design pattern provides an alternative way to create objects compared to constructors and 'new' keyword */
// Enhanced Object Literals -> if 'propertyName' and 'value' are same, then it can be given only once
function user(name, age, city) {
  // This is a factory function which creates an object and returns it
  return {
    name: name,
    // It is enhanced object literal where propertyName/value is given only once
    age,
    city,
    greet: function (friend) {
      return `Welcome ${friend}`;
    },
    wish(friend) {
      return `All the best ${friend}`;
    },
    ageSum: (age1, age2) => {
      return age1 + age2;
    },
    ageDiff: (age1, age2) => age1 - age2,
  };
}
console.log("User A  ---> ", user("AAA", 15, "XXX"));
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
const userB = user("BBB", 19, "YYY");
console.log("User B  ---> ", userB);
console.log("Method  ---> ", userB.greet("CCC"));
console.log("Method with enhanced object  ---> ", userB.wish("DDD"));
console.log("Method in arrow  ---> ", userB.ageSum(15, 19));
console.log("Method in one line arrow  ---> ", userB.ageDiff(19, 15));
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

var except = function (val) {
  return {
    toBe: (val2) => {
      if (val !== val2) throw new Error("Not Equal");
      else return true;
    },
    notToBe: (val2) => {
      if (val === val2) throw new Error("Equal");
      else return true;
    },
  };
};
console.log("except(5).toBe(5)  ---> ", except(5).toBe(5));
console.log("except(5).notToBe(5)  ---> ", except(5).notToBe(5));
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Default Function Parameter
function defaultFunctionParameter(
  parameter,
  defaultParameter = "Default Parameter"
) {
  return `~~~~~Parameter  -> ${parameter},  Default Parameter  -> ${defaultParameter}~~~~~`;
}
console.log("Called without arguments  ---> ", defaultFunctionParameter());
console.log(
  "Called with one argument  ---> ",
  defaultFunctionParameter("Argument")
);
console.log(
  "Called with both arguments  ---> ",
  defaultFunctionParameter("Argument", "Passed Argument")
);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/* Symbols -> Unique and immutable (neither recreated nor changed) primitive datatype
              Indentifier for object properties to avoid potential naming conflicts
              Do not colide with other property names even if they have same string representation */
const symbol1 = Symbol();
console.log("Symbol ---> ", symbol1);
console.log("Type of Symbol ---> ", typeof symbol1);
const symbol2 = Symbol("Custom Symbol");
console.log("Symbol ---> ", symbol2);
console.log("Type of Symbol ---> ", typeof symbol2);
const symbol3 = Symbol("Custom Symbol");
console.log("Symbol ---> ", symbol3);
console.log("Type of Symbol ---> ", typeof symbol3);
// Symbol Equality
console.log("Symbol2 == Symbol3  ---> ", symbol2 == symbol3);
console.log("Symbol2 === Symbol3  ---> ", symbol2 === symbol3);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
const obj = {};
obj["property1"] = "Value1";
obj[symbol1] = "SymbolValue1";
obj[symbol2] = "SymbolValue2";
obj["property2"] = "Value2";
obj.property3 = "Value3";
obj.property4 = "Value4";
obj[symbol3] = "SymbolValue3";
obj["property2"] = "Value2Updated";
obj[symbol3] = "SymbolValue3Updated";
obj.property4 = "Value4Updated";
obj["property5"] = "Value5";
console.log("Object  ---> ", obj);
// Symbols are not iterated in For In Loop
for (let i in obj) {
  console.log("Property ->", i, " ---  Value ->", obj[i]);
}
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);
