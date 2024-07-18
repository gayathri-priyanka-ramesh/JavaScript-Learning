/* Recursion -> In Computer Science, recursion is a method of solving a problem where the solution depends on the solution to smaller instances of the same problem
                In Programming, recursion occurs when a function calls itself
                In any situation if something is done, and depending on the result, the same thing might be done again
                An iterator function (function with Loop) can be recursive instead
    
    Parts of Recursive Function -> The recursive call to the function
                                   At least one condition to exit
    
    Reasons to use (not abuse) Recursion ['With Great Power comes Great Responsibility' -> Less and elegant code with easy readability

    Reasons to avoid Recursion -> Decreases Performance (Loops are more optimal as each function call requires some space in memory)
                                  Difficult to follow the logic and debug */

// Iterator Function
(function countToFive(num = 1) {
  while (num <= 5) console.log("Count:", num++);
})();
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

// Recursive Function
(function countToFiftyRec(num = 10) {
  if (num > 50) return;
  console.log("Recursive Count:", num);
  // The function can be called recursively only inside the IIFE (once the IIFE is executed, the function cannot be called again)
  countToFiftyRec((num += 10));
})(5);
// IIFE is no longer available after it is invoked
// countToFiftyRec(10);
console.log(
  "Calling IIFE after declaration ---> Uncaught ReferenceError: countToFiftyRec is not defined"
);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// Fibonacci Series
const fibonacci = (num = 15, fibArray = [0, 1]) => {
  while (num > 2) {
    const [nextToLast, last] = fibArray.slice(-2);
    fibArray.push(nextToLast + last);
    console.log(`Num -> ${num--}  ----- FibArray -> ${fibArray}`);
  }
  return fibArray;
};
console.log("Fibonacci Series  ---> ", fibonacci(10));
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

const fibonacciRec = (num = 10, fibArray = [0, 1]) => {
  if (num <= 2) return fibArray;
  const [nextToLast, last] = fibArray.slice(-2);
  console.log(`Num -> ${num}  ----- FibArray -> ${fibArray}`);
  return fibonacciRec(num - 1, [...fibArray, nextToLast + last]);
};
console.log("Fibonacci Series Recursion  ---> ", fibonacciRec(15));
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// Fibonacci Number at specified position
const fibonacciPos = ((pos = 15) => {
  let result;
  if (pos <= 1) result = pos;
  const fibArray = [0, 1];
  for (let i = 2; i <= pos; i++) {
    console.log(`Num -> ${i}  ----- FibArray -> ${fibArray}`);
    const [nextToLast, last] = fibArray.slice(-2);
    fibArray.push(nextToLast + last);
  }
  // Position starts form 1 (not 0)
  result = fibArray[pos - 1];

  //   fibArray = fibonacci(pos);
  //   console.log(`FibArray -> ${fibArray}`);
  //   result = fibArray.slice(-1);

  console.log(`Fibonacci Number at position ${pos} is ${result}`);
})(10);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

const fibonacciSeqPos = ((pos = 15) => {
  const result = pos < 2 ? pos : fibonacci(pos).slice(-1);
  console.log(`Fibonacci Number at position ${pos} is ${result}`);
})(10);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

const fibonacciPosRec = (pos = 10 - 1) => {
  if (pos < 2) return pos;
  return fibonacciPosRec(pos - 1) + fibonacciPosRec(pos - 2);
};
console.log(`Fibonacci Number at position 10 is ${fibonacciPosRec()}`);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

const fibonacciSeqPosRec = (pos = 10 - 1) =>
  pos <= 1 ? pos : fibonacciSeqPosRec(pos - 1) + fibonacciSeqPosRec(pos - 2);
console.log(`Fibonacci Number at position 10 is ${fibonacciSeqPosRec()}`);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// Used as a Parser for parsing the directory, DOM - Web Crawler, XML or JSON Data Export
const parsingObj = {
  propertyA1: "Value1",
  propertyA2: {
    propertyB1: ["Value2", "Value3"],
    propertyB2: "Value4",
    propertyB3: ["Value5", "Value6", "Value7"],
    propertyB4: {
      propertyC1: ["Value8", "Value9"],
      propertyC2: "Value10",
      propertyC3: ["Value11", "Value12", "Value13"],
    },
  },
  propertyA3: {
    propertyB5: ["Value14", "Value15", "Value16"],
    propertyB6: "Value17",
    propertyB7: ["Value18", "Value19", "Value20", "Value21"],
  },
  propertyA4: "Value22",
};
const parseObjectFunc = (dataObj, arr = []) => {
  Object.keys(dataObj).forEach((key) => {
    console.log("Current Key ->", key, "Enters parsing");
    console.log("Key ->", key, "  ----- Data ->", dataObj[key]);
    // The value is tested for 'Array' first as 'typeof arr' is also 'object'
    if (Array.isArray(dataObj[key])) {
      console.log("Array ->", dataObj[key]);
      return dataObj[key].forEach((value) => {
        console.log("Value ->", value);
        arr.push(value);
      });
    } else if (typeof dataObj[key] === "object") {
      console.log("Object ->", dataObj[key]);
      console.log("Current Key ->", key, "Enters Recursive parsing");
      return parseObjectFunc(dataObj[key], arr);
    }
    console.log("Pusing Value -> ", dataObj[key]);
    arr.push(dataObj[key]);
  });
  return arr;
};
// console.log("Parsed Object Result  ---> ", parseObjectFunc(parsingObj));
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

const flattenObjFunc = (dataObj, parent, resObj = {}) => {
  Object.keys(dataObj).forEach((key) => {
    console.log("Current Key ->", key, "Enters parsing");
    const value = dataObj[key];
    console.log(
      "Key ->",
      key,
      "  ----- Value ->",
      value,
      "\nParent ->",
      parent
    );
    if (Array.isArray(value)) {
      const arr = value;
      const arrParent = `${parent}_${key}`;
      console.log("Array ->", arr, "\nArrParent -> ", arrParent);
      return arr.forEach((ele) => {
        const arrEleParent = `${arrParent}~~${ele}`;
        console.log("Array Element ->", ele, "\nArrEleParent ->", arrEleParent);
        resObj[arrEleParent] = ele;
      });
    } else if (typeof value === "object") {
      const obj = value;
      const objParent = parent + "_" + key;
      console.log("Object ->", obj, "\nObjParent -> ", objParent);
      console.log("Current Key ->", key, "Enters Recursive Parsing");
      return flattenObjFunc(obj, objParent, resObj);
    }
    resObj[parent + "_" + key] = value;
  });
  return resObj;
};
console.log(
  "Flattened Object Result  ---> ",
  flattenObjFunc(parsingObj, "initialObjName")
);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// Implement 'sum(1)(2)(3)(4)...(n)()' results Sum of N numbers: '1+2+3+4+...+n'
// Consider 'sum(1)(2)(3)(4)()'
let sumFour = function (a) {
  return function (b) {
    return function (c) {
      return function (d) {
        return function () {
          return a + b + c + d;
        };
      };
    };
  };
};
// Uncaught TypeError: sumFour(...)(...)(...)(...)(...) is not a function
// console.log("sumFour(1)(2)(3)(4)(5)()  ---> ", sumFour(1)(2)(3)(4)(5)());
// Last argument is ignored even id passed
console.log("sumFour(1)(2)(3)(4)(5)  ---> ", sumFour(1)(2)(3)(4)(5));
console.log("sumFour(1)(2)(3)(4)()  ---> ", sumFour(1)(2)(3)(4)());
console.log("sumFour(1)(2)(3)(4)  ---> ", sumFour(1)(2)(3)(4));
console.log("sumFour(1)(2)(3)  ---> ", sumFour(1)(2)(3));
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

// Recursive Solution
let sumN = function (a) {
  return function (b) {
    if (b) {
      // Recursively call until empty () is encountered
      return sumN(a + b);
    }
    // Return just 'a' if there is no arguments and empty () is encountered
    return a;

    // return b ? sumN(a + b) : a;

    // Wrong Syntax
    // b ? { return sumN(a + b); } : { return a; }
  };
};

// ES6 Syntax ('return' can be omitted for arrow functions with one statement)
// let sumN = (a) => (b) => b ? sumN(a + b) : a;

// Uncaught TypeError: sumN(...)(...)(...)(...)(...) is not a function
// console.log("sumN(1)(2)(3)(4)(5)()()  ---> ", sumN(1)(2)(3)(4)(5)()());
console.log("sumN(1)(2)(3)(4)(5)  ---> ", sumN(1)(2)(3)(4)(5));
console.log("sumN(1)(2)(3)(4)()  ---> ", sumN(1)(2)(3)(4)());
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// Used in Continuation Token from an API
const getProductDetails = async () => {
  // Get data with 'await fetch' request
  if (data.isTruncated) {
    // Recursive Call
    return await getProductDetails(
      productId,
      connectionVariable,
      resultAccumulatorArray,
      data.NextContinuationToken
    );
  }
  return resultAccumulatorArray;
};
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);
