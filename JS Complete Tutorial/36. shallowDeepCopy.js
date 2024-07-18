/* JavaScript Data Types -> Primitive  - Pass data by Value
                                         Immutable (Cannot be changed)
                                         Reassignment Possible (reassigning with another value is     different from mutating)
                                         Types - Undefined, Boolean, Number, String, BigInt, Symbol
                         -> Structural - Pass by Reference
                                         Mutable (Can be changed)
                                         Type - Object (any data that can be used with 'new' keyword - Eg. --->  Object, Array, Map, Set, WeakMap, Date), Function */

// Pass by Value (Primitive)
let xString = "A Initial";
console.log("xString (Initial)  ---> ", xString);
let yString = xString;
console.log("yString (Initial)  ---> ", yString);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
yString += " - Y Modification";
console.log("xString (After modifying Y)  ---> ", xString);
console.log("yString (After modifying Y)  ---> ", yString);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
xString += " - X Modification";
console.log("xString (After modifying xString)  ---> ", xString);
console.log("yString (After modifying xString)  ---> ", yString);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
// Imutable Data (Primitive)
xString[0] = "B";
console.log("xString (After Mutating xstring)  ---> ", xString);
console.log("yString (After Mutating xstring)  ---> ", yString);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
xString = "A Reassignment";
console.log("xString (After Reassigning xstring)  ---> ", xString);
console.log("yString (After Reassigning xstring)  ---> ", yString);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
// Only the value is passed and hence the modifications are independent
console.log("xString === yString  ---> ", xString === yString);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// Pass by Reference (Structural)
let xArray = [3, 6, 9];
console.log("xArray (Initial)  ---> ", xArray);
let yArray = xArray;
console.log("yArray (Initial)  ---> ", yArray);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
yArray.push(12);
console.log("xArray (After modifying yArray)  ---> ", xArray);
console.log("yArray (After modifying yArray)  ---> ", yArray);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
xArray.push(15);
console.log("xArray (After modifying xArray)  ---> ", xArray);
console.log("yArray (After modifying xArray)  ---> ", yArray);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
// Mutable Data (Structural) -> Shares the same reference
xArray[0] = 4;
console.log("xArray (After mutating xArray)  ---> ", xArray);
console.log("yArray (After mutating xArray)  ---> ", yArray);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
// Shares the same Reference as the reference is passed and hence the modifications are dependent
console.log("typeof xArray  ---> ", typeof xArray);
console.log("typeof yArray  ---> ", typeof yArray);
console.log("xArray === yArray (type 'object') ---> ", xArray === yArray);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
// yArray += 10;
// console.log("xArray (After addition yArray)  ---> ", xArray);
// console.log("yArray (After addition yArray)  ---> ", yArray);
// console.log("typeof xArray (After addition yArray)  ---> ", typeof xArray);
// console.log("typeof yArray (After addition yArray)  ---> ", typeof yArray);
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
// xArray += 100;
// console.log("xArray (After addition xArray)  ---> ", xArray);
// console.log("yArray (After addition xArray)  ---> ", yArray);
// console.log("typeof xArray (After addition xArray)  ---> ", typeof xArray);
// console.log("typeof yArray (After addition xArray)  ---> ", typeof yArray);
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
// // Doesn't share the same Reference as it is of type 'string'
// console.log("xArray === yArray (type 'string') ---> ", xArray === yArray);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// Impure Function that mutates the original data
const addToArrayImpure = (array, element) => {
  array.push(element);
  return array;
};
// 'const' doesn't make the array immutable (array cannot be reassigned)
const arr = [10, 20, 30];
// arr = [100, 200, 300];
console.log("arr (Before Initial Function Call)  -> ", arr);
// Mutates the original array
console.log(
  "arr (After First Function Call)  -> ",
  addToArrayImpure(arr, " Call")
);
console.log(
  "arr (After Second Function Call)  -> ",
  addToArrayImpure(arr, "Second Call")
);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

/* Cloning Data Structures (Copy)
        Shallow Copy -> Don't share reference until there is any nested structural data type
                        Still shares same references of nested structures which allows for mutation on original data (doesn't go levels deep into structural datatype)
                        Array.from(), Array.slice() creates Shallow Copies
                        Object.freeze() creates a shallow freeze
        
        Deep Copy -> Shares no references
                     Important in pure functions because they require to avoid mutating original data
                     Libraries like Lodash, Ramda have this feature built-in
                     Simple Vanilla JS Solution using 'JSON.parse(Json.stringify(obj))' works for simple data structures (Doesn't work with data structures like Dates, Functions, undefined, Infinity, RegExps, Map, Set, Blob, FileLists, ImageDatas and other complex types*/

// Shallow Copy
console.log("Shallow copy of xArray to zArray using 'Spread' Operator");
const zArray = [...xArray, 5];
console.log("xArray  ---> ", xArray);
console.log("yArray  ---> ", yArray);
console.log("zArray  ---> ", zArray);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
// Don't share reference until there is any nested structural data type
console.log("xArray === zArray  ---> ", xArray === zArray);
console.log("yArray === zArray  ---> ", yArray === zArray);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

console.log("Shallow copy of zArray to tArray using 'Object.assign()'");
const tArray = Object.assign([], zArray);
console.log("zArray  ---> ", zArray);
console.log("tArray  ---> ", tArray);
// Don't share reference until there is any nested structural data type
console.log("zArray === tArray  ---> ", zArray === tArray);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
tArray.push(10);
console.log("zArray (After Modification on tArray)  ---> ", zArray);
console.log("tArray (After Modification on tArray)  ---> ", tArray);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
zArray.push(15);
console.log("zArray (After Modification on zArray)  ---> ", zArray);
console.log("tArray (After Modification on zArray)  ---> ", tArray);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

console.log("xArray is made Nested");
xArray.push([2, 4, 6]);
console.log("xArray  ---> ", xArray);
console.log("yArray  ---> ", yArray);
console.log("zArray  ---> ", zArray);
console.log("tArray  ---> ", tArray);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log(
  "Shallow copy of xArray (nested) to uArray using 'Spread' Operator"
);
const uArray = [...xArray];
console.log("xArray  ---> ", xArray);
console.log("uArray  ---> ", uArray);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
// Still shares same references of nested structures which allows for mutation on original data
uArray[5].push(8);
console.log(
  "xArray (After Modification on nested element of uArray)  ---> ",
  xArray
);
console.log(
  "uArray (After Modification on nested element of uArray)  ---> ",
  uArray
);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
xArray[5].push(10);
console.log(
  "xArray (After Modification on nested element of xArray)  ---> ",
  xArray
);
console.log(
  "uArray (After Modification on nested element of xArray)  ---> ",
  uArray
);
uArray.push(18);
console.log("xArray (After Modification on uArray)  ---> ", xArray);
console.log("uArray (After Modification on uArray)  ---> ", uArray);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
xArray.push(21);
console.log("xArray (After Modification on x`Array)  ---> ", xArray);
console.log("uArray (After Modification on xArray)  ---> ", uArray);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("yArray  ---> ", yArray);
console.log("zArray  ---> ", zArray);
console.log("tArray  ---> ", tArray);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

const xObject = {
  Property1: "Value1",
  Property2: "Value2",
  Property3: {
    NestedProperty1: "NestedValue1",
    NestedProperty2: "NestedValue2",
    NestedProperty3: "NestedValue3",
  },
  Property4: ["Element1", "Element2", "Element3"],
};
console.log("xObject (Initial)  ---> ", xObject);
// Deep Copy using simple Vanilla JS Solution
const yObject = JSON.parse(JSON.stringify(xObject));
console.log("yObject (Initial)  ---> ", yObject);
console.log("xObject === yObject  ---> ", xObject === yObject);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
// Shallow Freeze
// Object.freeze(xObject);
console.log("xObject (After Freeze)  ---> ", xObject);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
yObject.Property1 = "Modified Value1 - from Y";
console.log("xObject (After modification of yObject)  ---> ", xObject);
console.log("yObject (After modification of yObject)  ---> ", yObject);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
yObject.Property3.NestedProperty1 = "Modified NestedValue1 - from Y";
console.log(
  "xObject (After modification of nested property of yObject)  ---> ",
  xObject
);
console.log(
  "yObject (After modification of nested property of yObject)  ---> ",
  yObject
);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
xObject.Property2 =
  "Modified Value2 - from X (Not Reflected if 'xObject' is frozen)";
console.log("xObject (After modification of xObject)  ---> ", xObject);
console.log("yObject (After modification of xObject)  ---> ", yObject);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
xObject.Property3.NestedProperty2 =
  "Modified NestedValue2 - from X (Reflected even if 'xObject' is frozen)";
console.log(
  "xObject (After modification of nested property of xObject)  ---> ",
  xObject
);
console.log(
  "yObject (After modification of nested property of xObject)  ---> ",
  yObject
);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// Deep Clone Function
const deepClone = (obj) => {
  // Accept only [] or {} data Structures ('null' has type 'object' and it is returned as it is if passed for deep clone)
  if (typeof obj !== "object" || obj === null) return obj;

  // Create new [] or {} to store the deep clone of passed obj
  const newObj = Array.isArray(obj) ? [] : {};
  // 'key' refers to index of the element in ForIn Loop
  for (let key in obj) {
    console.log("Key  ---> ", key);
    const value = obj[key];
    console.log("Value ---> ", value);
    // Recursive call for nested objects and arrays (key with simple values are returned as it is and stored in the newObj because of the usage of initial 'if' block)
    newObj[key] = deepClone(value);
  }
  return newObj;
};

const zObject = deepClone(xObject);
console.log("xObject (Initial)  ---> ", xObject);
console.log("xObject === zObject  ---> ", xObject === zObject);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
zObject.Property1 = "Modified Value1 - from Z";
console.log("xObject (After modification of zObject)  ---> ", xObject);
console.log("zObject (After modification of zObject)  ---> ", zObject);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
zObject.Property3.NestedProperty1 = "Modified NestedValue1 - from Z";
console.log(
  "xObject (After modification of nested property of zObject)  ---> ",
  xObject
);
console.log(
  "zObject (After modification of nested property of zObject)  ---> ",
  zObject
);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
xObject.Property2 = "Modified Value2 - from X";
console.log("xObject (After modification of xObject)  ---> ", xObject);
console.log("zObject (After modification of xObject)  ---> ", zObject);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
xObject.Property3.NestedProperty2 = "Remodified NestedValue2 - from X";
console.log(
  "xObject (After modification of nested property of xObject)  ---> ",
  xObject
);
console.log(
  "zObject (After modification of nested property of xObject)  ---> ",
  zObject
);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// Pure Function that doesn't mutate the original data
const addToArrayPure = (array, element, cloneFunc) => {
  const newArray = cloneFunc(array);
  newArray.push(element);
  newArray[3].push(element);
  return newArray;
};
const arrPure = [10, 20, 30, [100, 200, 300], 40, 50];
console.log("arrPure (Before Initial Function Call)  -> ", arrPure);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
// Doesn't Mutate the original array
let newArray1 = addToArrayPure(arrPure, "First Call", deepClone);
console.log("arrPure (After First Function Call)  -> ", newArray1);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
let newArray2 = addToArrayPure(arrPure, "Second Call", deepClone);
console.log("arrPure (After Second Function Call)  -> ", newArray2);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("arrPure (After Function Call)  -> ", arrPure);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);
