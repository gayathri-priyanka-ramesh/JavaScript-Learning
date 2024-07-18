// forEach() -> Method that executes the logic for each element in the arrayz (doesn't return anything)
let colors = ["Red", "Blue", "Yellow", "Black"];
console.log("Colors  ---> ", colors);
colors.forEach((colorName) =>
  console.log(
    "Color Name ->",
    colorName,
    "and its Length -> ",
    colorName.length
  )
);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

const smallCaseColors = colors.forEach((color, i, arrColor) => {
  console.log(
    `Before Operation  --->  Index -> ${i}, Color -> ${color}, Color[0] -> ${color[0]}, Array -> ${arrColor}, Array[0] -> ${arrColor[i]}`
  );
  arrColor[i] = color[0].toLowerCase() + color.substring(1);
  // color[0] = color[0].toLowerCase();
  // console.log(color[0]);
  console.log(
    `After Operation  --->  Index -> ${i}, Color -> ${color}, Color[0] -> ${color[0]}, Array -> ${arrColor}, Array[0] -> ${arrColor[i]}~~~~~~~~~~`
  );
});
console.log("Colors in small case  ---> ", colors);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

let numsArray = [10, 20, 30, 40, 50];
console.log("Numbers Array  ---> ", numsArray);
let sum = 0;
console.log("Sum before Adding the array values  ---> ", sum);
function adder(num) {
  sum += num;
  console.log("Value of num is", num, "and current Sum is", sum);
}
numsArray.forEach(adder);
console.log("Sum after Adding the array values  ---> ", sum);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

let sumWithIndex = 0;
console.log("SumWithIndex before Adding the array values  ---> ", sumWithIndex);
function adderWithIndex(num, i) {
  sumWithIndex += num;
  console.log(
    "Value at Index",
    i,
    "is",
    num,
    "and current Sum is",
    sumWithIndex
  );
}
// ForEach Polyfill
Array.prototype.forEachPolyfill = function (callBack) {
  for (let i = 0; i < this.length; i++) {
    callBack(this[i], i);
  }
};
numsArray.forEachPolyfill(adderWithIndex);
// numsArray.forEach(adderWithIndex);
console.log("SumWithIndex after Adding the array values  ---> ", sumWithIndex);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

/*  -> Transform an Array
          Creates new array, performs the logic on each element of the calling array and pushes the result to new array
          Returns a new array of results and hence can be Chainable
          Doesn't modify the original array
   
   ForEach -> Performing actions on each elements
              Does not return anything and hence cannot be Chainable
              Element after the action performed can be assigned to the original array by appropriate code
              Doesn't modify the original array
*/
function upperColors(color) {
  return color.toUpperCase();
}
function upperColorsModifiesOriginal(color, i, arrClr) {
  return (arrClr[i] = color.toUpperCase());
}
console.log("Colors before Map and before ForEach  ---> ", colors);
let colorsUpperMap = colors.map(upperColors);
// let colorsUpperMap = colors.map(upperColorsModifiesOriginal);
console.log("ColorsUpperMap  ---> ", colorsUpperMap);
console.log("Colors after Map and before ForEach  ---> ", colors);
let colorsUpperForEach = colors.forEach(upperColors);
// let colorsUpperForEach = colors.forEach(upperColorsModifiesOriginal);
console.log("ColorsUpperForEach  ---> ", colorsUpperForEach);
console.log("Colors after Map and after ForEach  ---> ", colors);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

console.log("NumsArray before Map and before ForEach  ---> ", numsArray);
let doubleReverseMap = numsArray.map((num) => num * 2).reverse();
console.log("DoubleReverseMap  ---> ", doubleReverseMap);
console.log("NumsArray after Map and before ForEach  ---> ", numsArray);
// const tripleReverseForEach = numsArray.forEach((num) => num * 3).reverse();
// console.log("TripleReverseForEach  ---> ", tripleReverseForEach);
// console.log(
//   "TripleReverseForEach  --->  Uncaught TypeError: Cannot read properties of undefined (reading 'reverse')"
// );
const tripleForEach = numsArray.forEach((num) => num * 3);
console.log("TripleForEach  ---> ", tripleForEach);
console.log("NumsArray after Map and after ForEach  ---> ", numsArray);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

const mapModifiesOriginal = numsArray
  // Conversion [numericArr.toString(2) -> Binary, numericArr.toString(8) -> Octal, numericArr.toString(10) -> Decimal, numericArr.toString(16) -> HexaDecimal]
  .map((num, i, arrNum) => (arrNum[i] = num.toString(2)))
  .reverse()
  // Returned 'String' element is converted to 'Number' and modified
  .map((num, i, arrNum) => (arrNum[i] = Number(num.toString(2))))
  // .map((num, i, arrNum) => (arrNum[i] = +num.toString(2)))
  .reverse();
console.log("MapModifiesOriginal  ---> ", mapModifiesOriginal);
console.log(
  "NumsArray after MapModifiesOriginal (not reversed)  ---> ",
  numsArray
);
// const forEachModifiesOriginal = numsArray
//   .forEach((num, i, arrNum) => (arrNum[i] = num * 4))
//   .reverse();
const forEachModifiesOriginal = numsArray.forEach(
  // Return the same array is passed with stringArr
  (num, i, arrNum) => (arrNum[i] = num.toString(8))
  // (num, i, arrNum) => (arrNum[i] = num * 4)
);
// Not Chainable
// .forEach((num) => num * 3);
// .reverse()
console.log("ForEachModifiesOriginal  ---> ", forEachModifiesOriginal);
console.log("NumsArray after ForEachModifiesOriginal---> ", numsArray);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

const person = [
  { name: "AAA", id: 10, interest: "React" },
  { name: "BBB", id: 20, interest: "Angular" },
  { name: "CCC", id: 90, interest: "Vue" },
  { name: "DDD", id: 40, interest: "JavaScript" },
  { name: "EEE", id: 50, interest: "React" },
  { name: "CCC", id: 60, interest: "Angular" },
  { name: "FFF", id: 70, interest: "Vue" },
];
const user = person.map((data) => {
  return [data.name, data.interest];
});
console.log(user);
console.log(user[3]);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// Filter -> Creates a new array with all elements that pass certain condition
console.log("Filter");
console.log(person.filter((x) => x.id >= 20 && x.id < 50));
console.log(colors.filter((clr) => clr.length >= 5));
console.log(person.filter((per) => per.name === "CCC"));
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

// Find -> Returns the value of first element that pass the condition
console.log("Find");
console.log(person.find((x) => x.id >= 20 && x.id < 50));
console.log(colors.find((clr) => clr.length >= 5));
console.log(person.find((per) => per.name === "CCC"));
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// Every -> Returns 'true' if all the elements in the array pass the condition specified in callback function and 'false' is alteast one element fails the condition
const array1 = [10, 20, 30, 40];
const array2 = [10, 20, 30, 44];
const array3 = [11, 22, 30, 44];
const array4 = [11, 22, 33, 44];
console.log("Every");
console.log(array1.every((num) => num % 10 === 0));
console.log(array2.every((num) => num % 10 === 0));
console.log(array3.every((num) => num % 10 === 0));
console.log(array4.every((num) => num % 10 === 0));
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

// Some -> Returns 'true' if atleast one element in the array pass the condition specified in callback function and 'false' is all elements fails the condition
console.log("Some");
console.log(array1.some((num) => num % 10 === 0));
console.log(array2.some((num) => num % 10 === 0));
console.log(array3.some((num) => num % 10 === 0));
console.log(array4.some((num) => num % 10 === 0));
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

// Traditional Way
let everyDiv10 = true;
let someDiv10 = false;
for (let divElement = 0; divElement < array2.length; divElement++) {
  if (array2[divElement] % 10 !== 0) everyDiv10 = false;
  else someDiv10 = true;
}
console.log("Every ->", everyDiv10);
console.log("Some ->", someDiv10);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

/* Reduce -> Applies reducer function to each element of an array and accumulates results into a single value (aggregation of array)
             Doesn't execute function for empty array
             Doesn't modify original array but makes copy of array and make it as a single item inside an array
             2 parameters -> callback function, initial value */
// Tradition Functions (Not DRY Code)
function sumArr(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) sum += arr[i];
  return sum;
}
function productArr(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) product *= arr[i];
  return product;
}
console.log("Not DRY Code");
console.log("Sum of Array", array4, "is", sumArr(array4));
console.log("Sum of Array", array1, "is", productArr(array1));
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

function sumLogic(num, acc) {
  return acc + num;
}
function productLogic(num, acc) {
  return acc * num;
}
Array.prototype.reducePolyfill = function (callbackFunc, initialValue) {
  // Variable that accumulates the result after performing operation one-by-one on the array elements
  let accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    if (accumulator) {
      // 'callbackFunc' is called (only is 'initialValue' is present) with accumulator, current element, current index, array and the result of this call becomes the new value of accumulator
      // 'undefined' is passed meaning 'this' inside callbackFunc will be 'undefined' (or it will be assigned the global object in non-strict mode)
      accumulator = callbackFunc.call(undefined, accumulator, this[i], i, this);
    }
    // Executes for 1st iteration is 'initialValue' is not given
    else {
      // Accumulator is assigned to the current element of the array and callback function is not called in the initial iteration (if called with 1st element as initial value, it provides undesirabble result)
      accumulator = this[i];
    }
  }

  // Doesn't handle 'null' accumulator
  // for (let i = 0; i < this.length; i++) {
  //   accumulator = callbackFunc(this[i], accumulator);
  // }
  return accumulator;
};
console.log("Reduce Polyfill");
console.log(
  "Sum Using Reduce Polyfill (without initial value)  ---> ",
  array4.reducePolyfill(sumLogic)
);
console.log(
  "Sum Using Reduce Polyfill  ---> ",
  array4.reducePolyfill(sumLogic, 50)
);
console.log(
  "Product Using Reduce Polyfill (without initial value)  ---> ",
  array1.reducePolyfill(productLogic)
);
console.log(
  "Product Using Reduce Polyfill  ---> ",
  array1.reducePolyfill(productLogic, 5)
);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

console.log("Inbuilt 'reduce' Higher-order Function");
console.log("Array Before Reduce  ---> ", array4);
const sumUsingReduce = array4.reduce((prev, curr) => prev + curr, 50);
console.log("Sum Using Reduce  ---> ", sumUsingReduce);
console.log("Array After Reduce  ---> ", array4);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

console.log("Array Before Reduce  ---> ", array1);
const productUsingReduce = array1.reduce((accumulator, currentValue) => {
  product = accumulator * currentValue;
  console.log(
    `Array -> ${array1}, Accumulator -> ${accumulator}, CurrentValue -> ${currentValue}, Product -> ${product}`
  );
  return product;
}, 5);
console.log("Product Using Reduce  ---> ", productUsingReduce);
console.log("Array After Reduce  ---> ", array1);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

const highestId = person.reduce((a, b) => {
  let highest = b.id > a ? b.id : a;
  console.log(
    `Array -> ${person}, Accumulator -> ${a}, CurrentValue -> ${b.id}, Highest -> ${highest}`
  );
  return highest;
  // Initial value is 0 (least positive value) assuming the 'id' is only positive
}, 0);
console.log(("Highest ID  ---> ", highestId));
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

const letters = ["a", "b", "c", "a", "c", "d", "d", "e"];
const lettersFrequency = letters.reduce((frequencyMap, char) => {
  console.log("FrequesncyMap  ---> ", frequencyMap);
  // Add 1 to present frequency, or create and add 1 to 0
  frequencyMap[char] = (frequencyMap[char] || 0) + 1;
  console.log(
    `Array -> ${letters}, Accumulator -> `,
    frequencyMap,
    `, CurrentValue -> ${char}, Frequency -> ${frequencyMap[char]}`
  );
  return frequencyMap;
}, []);
// }, {});
// Initial value can be '[]' or '{}'
console.log(`Frequency Map of Letters  --->  ${lettersFrequency}`);
console.log("Frequency Map of Letters  ---> ", lettersFrequency);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

const interestFrequesncy = person.reduce((freqAcc, curr) => {
  console.log("freqAcc  -> ", freqAcc);
  console.log("curr  -> ", curr);
  if (freqAcc[curr.interest])
    // Increment the value is interest is present
    freqAcc[curr.interest] += 1;
  // Create the key and set its value to 1 if not present
  else freqAcc[curr.interest] = 1;
  return freqAcc;
}, {});
console.log("Frequency of Interest  ---> ", interestFrequesncy);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// Chaining Higher-order Function
const personWithInterestReact = person.filter((x) => x.interest === "React");
console.log("Person with interest 'React'", personWithInterestReact);
const personWithInterestAngular = person
  .filter((x) => x.interest === "Angular")
  .map((y) => `Name: ${y.name}  --- ID: ${y.id}`);
console.log(
  "Display name and id of person with interest 'Angular'",
  personWithInterestAngular
);
const personWithInterestVue = person.reduce((acc, curr) => {
  if (curr.interest === "Vue") {
    acc.push([curr.name, curr.id]);
  }
  return acc;
}, []);
console.log(
  "Return name and id of person with interest 'Vue' in an array",
  personWithInterestVue
);

const map = new Map([
  [1, 2],
  [2, 4],
  [4, 8],
]);
console.log("Map  --->", map);
console.log("Array.from(map)  ---> ", Array.from(map));
