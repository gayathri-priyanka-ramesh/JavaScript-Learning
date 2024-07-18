// Conditional Statements
// If, If...Else, Nested If
let english = 95,
  tamil = 98,
  maths = 75;
let total, avg;
total = english + tamil + maths;
avg = total / 3;
console.log("Total:", total);
console.log("Average:", avg.toFixed(2));
if (english >= 35 && tamil >= 35 && maths >= 35) {
  console.log("Pass");
  if (avg > 90 && avg <= 100) {
    console.log("A Grade");
  } else if (avg > 80 && avg <= 90) {
    console.log("B Grade");
  } else {
    console.log("C Grade");
  }
} else {
  console.log("Fail");
}
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Switch
let num = 2;
// num=4;
switch (num) {
  case 1:
    console.log("One");
    break;
  case 2:
    console.log("Two");
  // break;
  case 3:
    console.log("Three");
    break;
  default:
    console.log("Default");
  // break;
}
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

// Combining Case Statements - Group Switch
let letter = "a";
// letter='b';
switch (letter) {
  case "A":
  case "E":
  case "I":
  case "O":
  case "U":
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
    console.log("Vowel");
    break;
  default:
    console.log("Consonant");
}
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

const lookUpKey = "Property3";
const defaultKey = "/";

// Conventional Switch
let lookUpValue;
// switch (lookUpKey) {
switch (defaultKey) {
  case "Property1":
    lookUpValue = "Value1";
    break;
  case "Property2":
    lookUpValue = "Value2";
    break;
  case "Property3":
    lookUpValue = "Value3";
    break;
  case "Property4":
    lookUpValue = "Value4";
    break;
  case "Property5":
    lookUpValue = "Value5";
    break;
  default:
    lookUpValue = "Not Found";
    break;
}
console.log("LookUpValue using Switch  ---> ", lookUpValue);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

// Alternative to Switch using Object
const lookUpObj = {
  Property1: "Value1",
  Property2: "Value2",
  Property3: "Value3",
  Property4: "Value4",
  Property5: "Value5",
};
console.log("LookUpValue using Object  ---> ", lookUpObj[lookUpKey]);
console.log("LookUpValue using Object  ---> ", lookUpObj[defaultKey]);
console.log(
  "LookUpValue using Object  ---> ",
  lookUpObj[defaultKey] || "Not Found"
);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

// Alternative to Switch using ES6 Map
const lookupMap = new Map();
lookupMap.set("Property1", "Value1");
lookupMap.set("Property2", "Value2");
lookupMap.set("Property3", "Value3");
lookupMap.set("Property4", "Value4");
lookupMap.set("Property5", "Value5");
console.log("LookUpValue using Map  ---> ", lookupMap.get(lookUpKey));
console.log("LookUpValue using Map  ---> ", lookupMap.get(defaultKey));
console.log(
  "LookUpValue using Map  ---> ",
  lookupMap.get(defaultKey) || "Not Found"
);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);
