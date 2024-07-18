/* Memoization -> Make the function to memoize the output if same input is given again without need to re-execute
                  Only me added to Pure Functions
                  Is is slower as Memory is traded than Speed
            
        Applied to -> Functions that deman Intensive Processing
                      Recurtive Functions which are processed intensive by nature
                      API Requests in certain situations (not ideal)                   
        
        React Memoization Methods -> React.Memo(), useMemo() [both are different]
*/

const memoizeMultiplyBy10 = () => {
  // Forms Closure and accessed only by the returned function
  const cache = {};
  console.log("Created Cache  ---> ", cache);
  return (num) => {
    //   'cache' it is available in the lexical scope
    console.log("Cache: ", cache);
    //     if (num in cache) console.log("Logging Cached Result  ---> ", cache[num]);
    //     else {
    //       const res = num * 10;
    //       cache[num] = res;
    //       console.log("Logging Calculated Result  ---> ", res);
    //     }

    //   Pure Function should have a 'return' value
    if (num in cache) return `Logging Cached Result  --->  ${cache[num]}`;
    // 'else' is not needed as value entering 'if' block returns there, and only those not entering 'if' reach here
    const res = num * 10;
    cache[num] = res;
    return `Logging Calculated Result  --->  ${res}`;
  };
};
const multiplyBy10 = memoizeMultiplyBy10();
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log(multiplyBy10(3));
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log(multiplyBy10(3));
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log(multiplyBy10(12));
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log(multiplyBy10(3));
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log(multiplyBy10(12));
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

// Decorator Function to Memoize any passed function
const memoize = (func) => {
  const cache = {};
  // rest of 'n' arguments of the passed function is stored in 'args' array
  console.log("Created Cache of", func, "  ---> ", cache);
  return (...args) => {
    console.log("Cache  ---> ", cache);
    console.log("Argumnets  ---> ", args);
    const key = args.toString();
    console.log("Key  ---> ", key);
    if (key in cache) return `Logging Cached Result  --->  ${cache[key]}`;
    //   'n' arguments are spreaed and passed
    const res = func(...args);
    cache[key] = res;
    return `Logging Calculated Result  --->  ${res}`;
  };
};
const add3 = (x, y, z) => x + y + z;
const multiplyN = (...args) => [...args].reduce((acc, cur) => acc * cur, 1);
// Both have independent cache
const memoizeadd3 = memoize(add3);
const memoizeMultiplyN = memoize(multiplyN);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log(memoizeadd3(3, 4, 5));
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log(memoizeMultiplyN());
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log(memoizeMultiplyN(2, 3));
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log(memoizeMultiplyN(2));
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log(memoizeMultiplyN(2, 3, 4, 5));
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log(memoizeadd3(3, 4, 5));
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log(memoizeadd3(5, 4, 3));
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log(memoizeMultiplyN(2));
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log(memoizeMultiplyN());
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log(memoizeMultiplyN(2, 3));
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log(memoizeadd3(3, 4, 5));
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log(memoizeadd3(5, 4, 3));
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log(memoizeMultiplyN(2, 3, 4, 5));
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

// Process Intensive Recursive Function
const fibAtPos = (pos) => {
  if (pos < 2) return pos;
  return fibAtPos(pos - 1) + fibAtPos(pos - 2);
};
// Takes a very long time (Computes each time even for same input)
// console.log(fibAtPos(40));
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
// console.log(fibAtPos(40));
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

// Increases performance as it need not compute each time for same input
const memoizeFibAtPos = memoize(fibAtPos);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
// console.log(memoizeFibAtPos(40));
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log(memoizeFibAtPos(1));
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log(memoizeFibAtPos(0));
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log(memoizeFibAtPos(-1));
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
// console.log(memoizeFibAtPos(40));
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
