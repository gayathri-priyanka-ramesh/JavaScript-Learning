// Arrays -> Basic Data Structure store multiple data types in a single variable
const myList = [];
console.log("myList  ---> ", myList);
console.table(myList);
console.log("typeof myList  ---> ", typeof myList);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

let numsArray = [10, 20, 30, 40, 50];
console.log(numsArray);
console.table(numsArray);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

const nestedArray = [1, "Level1", [2, "Level2"], [22, [3, 33, "Level3"]]];
console.log(nestedArray);
console.log(nestedArray[1]);
console.log(nestedArray[2]);
console.log(nestedArray[2][1]);
console.log(nestedArray[3][1]);
console.log(nestedArray[3][1][2]);
console.table(nestedArray);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// Array Methods
let colors = ["Red", "Blue", "Yellow", "Black"];
console.log("Original Array  ---> ", colors);
console.log("Length of original array  ---> ", colors.length);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

// Push
console.log(
  '\'push("element") adds at the end and returns new length of array  ---> ',
  colors.push("Pink")
);
console.log("Array after pushing 'Pink'  ---> ", colors);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

// Pop
console.log("'pop()' removes last element and returns it  ---> ", colors.pop());
console.log("Array after popping  ---> ", colors);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

// Unshift
console.log(
  '\'unshift("element") adds at the start and returns new length of array  ---> ',
  colors.unshift("Pink")
);
console.log("Array after unshifting 'Pink'  ---> ", colors);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

// Shift
console.log(
  "'shift()' removes first element and returns it  ---> ",
  colors.shift()
);
console.log("Array after Shifting  ---> ", colors);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// Concat
console.log(
  "'numsArray' concatenated with 'colors'  --->",
  numsArray.concat(colors)
);
console.log("'numsArray'  ---> ", numsArray);
console.log("'colors'  ---> ", colors);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

// Includes
if (colors.includes("White")) console.log("'colors' includes 'white'");
else console.log("'colors' not includes 'white'");
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

// Join
console.log("Join colors  ---> ", colors.join("~"));
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

// Reverse
console.log(
  "Reverse of 'colors' is stored in 'colors'  ---> ",
  colors.reverse()
);
console.log("'colors' after reversing  ---> ", colors);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

// Sort
console.log(
  "Sorted order 'colors' is stored in 'colors'  ---> ",
  colors.sort()
);
console.log("'colors' after sorting  ---> ", colors);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// Slice
console.log("Slice: start->1 end->3  ---> ", colors.slice(1, 3));
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

// Splice
const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
console.log("Original Letters  ---> ", letters);
console.log(
  "Inserts 3 elements at index 2 and removes 4 following elements and returns the removed elements  ---> ",
  letters.splice(2, 4, "x", "y", "z")
);
console.log("Letters after Splicing  ---> ", letters);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);
// Accessing Array Elements
// For Loop, For Of Loop, For In Loop

// Using 'new Array()'
let myArray = new Array();
console.log("myArray  ---> ", myArray);
myArray = Array(10, 20, 30, "X", "Y");
console.log("myArray  ---> ", myArray);
myArray = Array("A", "B", "C", 70, 80, ["Hi", 90]);
console.log("myArray  ---> ", myArray);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log(
  '\'push("element") adds at the end and returns new length of array  ---> ',
  myArray.push(["Hello", 50])
);
console.log(
  '\'push("element") adds at the end and returns new length of array  ---> ',
  myArray.push(60)
);
console.log("myArray (after Push)  ---> ", myArray);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log(
  "'pop()' removes last element and returns it  ---> ",
  myArray.pop()
);
console.log("myArray (after Pop)  ---> ", myArray);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// Checking for Empty Array (Best suitable for JSON Data in API Calls)
let sampleArray = [];
console.log("sampleArray.length  ---> ", sampleArray.length);
console.log(
  "Does Array has values (check only length)  ---> ",
  sampleArray.length ? true : false
);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

// It is no more an Array (Sometimes the array may not exist in backend API Calls and it will be undefined)
sampleArray = undefined;
// Uncaught TypeError: Cannot read properties of undefined (reading 'length')
// console.log("Does Array has values  ---> ", sampleArray.length ? true : false);
// Check for the presence of array and the check its length
console.log(
  "Does Array has values (check existence of array and then length if exists)  ---> ",
  sampleArray && sampleArray.length ? true : false
);
// Optional Chaining Operator '?'
console.log(
  "Does Array has values (check length if array exists)  ---> ",
  sampleArray?.length ? true : false
);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

// Find out if it is an Array or not
sampleArray = "I am String";
console.log("Type of sampleArray  ---> ", typeof sampleArray);
console.log("Does sampleArray is an array  ---> ", Array.isArray(sampleArray));
console.log("Value in second position  ---> ", sampleArray?.[1]);
console.log(
  "Does string has value in second position  ---> ",
  sampleArray?.[1] ? true : false
);
console.log(
  "Does string has 'id' property inside object in first position  ---> ",
  sampleArray?.[0]?.id ? true : false
);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

sampleArray = [{ id: 1 }];
sampleArray = [];
// Completely unsure whether the data retrieved is an Array
console.log("Does sampleArray is an array  ---> ", Array.isArray(sampleArray));
console.log(
  "Does Array has value in first position  ---> ",
  Array.isArray(sampleArray) && sampleArray?.[0] ? true : false
);
console.log(
  "Does Array has 'id' property inside object in first position  ---> ",
  Array.isArray(sampleArray) && sampleArray?.[0]?.id ? true : false
);
console.log(
  "Does Array has 'name' property inside object in first position  ---> ",
  sampleArray?.[0]?.name ? true : false
);
console.log(
  "Does Array has value in second position  ---> ",
  Array.isArray(sampleArray) && sampleArray?.[1] ? true : false
);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

// Null Coalescing Operator
console.log(
  "'name' property inside object in first position  ---> ",
  sampleArray?.[0]?.name ?? "Name Not Present"
);
console.log("Value in second position  ---> ", sampleArray?.[1]);
console.log("Value in second position  ---> ", sampleArray?.[1] ?? null);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
