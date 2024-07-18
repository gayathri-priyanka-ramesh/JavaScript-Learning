/* Functional Programming -> State mutation or object mutation or data mutation is not allowed and thats why pure functions are used (data is to be cloned or copied and not mutated directly)
        (In OOP, Objects are passed around and mutated by different functions)
                             Clean and DRY (Don't Repeat Yourself) Code
                             Often uses 'pipe' and 'compose' higher order functions
                             
        Higher Order Functions -> Any function that takes a function as an argument or returns a function or does both
        
        Ramda.js and lodash libraries have their own built-in compose and pipe functions (Lodash calls pipe as 'flow')
*/

// Working of Compose Functions (these are not compose functions actually)
// This is a Pointer Free Style where the unary parameter passed between each function is not seen (Only the paramter added at the end of the Pipe or Compose Function is seen if it is immediately invoked)
// Unary (one parameter) functions
const add2 = (x) => x + 2;
const subtract1 = (x) => --x;
const multiply5 = (x) => x * 5;
// Functions execute from inside to outside (right to left)
console.log("Result (x=4)  ---> ", multiply5(subtract1(add2(4))));
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

// 'reduce()' -> It is a higher order function that takes a list of values (from left to right) and applies a function to each of those values, accumulating a single result
// Pipe Function (Uses 'reduce' function to read from left to right)
const pipeFunc = (...funcs) => {
  console.log("funcs  ---> ", funcs);
  return (val) =>
    funcs.reduce((accRes, currFunc) => {
      console.log("accRes  ---> ", accRes);
      console.log("currFunc  ---> ", currFunc);
      return currFunc(accRes);
    }, val);
};
const pipedFuncs = pipeFunc(add2, subtract1, multiply5);
console.log("pipedFuncs  ---> ", pipedFuncs);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("pipedFuncs()  ---> ", pipedFuncs());
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("Pipe Result (val=4)  ---> ", pipedFuncs(4));
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

// Compose Function (Uses 'reduceRight' function to read from right to left)
const composeFunc =
  (...funcs) =>
  (val) =>
    funcs.reduceRight((accRes, currFunc) => currFunc(accRes), val);
const composedFuncs = composeFunc(multiply5, subtract1, add2);
console.log("composedFuncs  ---> ", composedFuncs);
console.log("composedFuncs()  ---> ", composedFuncs());
console.log("Compose Result (val=4)  ---> ", composedFuncs(4));
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

// Function with more than one paramter
const divideBy = (divisor, num) => num / divisor;
console.log("Result (25/3)  ---> ", divideBy(3, multiply5(subtract1(add2(4)))));
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

const pipeRes1 = pipeFunc(
  add2,
  subtract1,
  multiply5,
  // Anonymous function to get the result of previous (if present) unary functions
  (x) => divideBy(3, x)
)(4);
console.log("PipeRes1  ---> ", pipeRes1);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

// Curried Function
const divBy = (divisor) => (num) => num / divisor;
// Partially Applied Curry Function
const divideBy3 = divBy(3);
console.log("divideBy3  ---> ", divideBy3);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

const pipeRes2 = pipeFunc(add2, subtract1, multiply5, divideBy3);
console.log("PipeRes2  ---> ", pipeRes2);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
const pipeRes3 = pipeFunc(add2, subtract1, multiply5, divideBy3)(4);
console.log("PipeRes3  ---> ", pipeRes3);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

const rhyme =
  "I'm a little teapot Short and stout Here is my handleHere is my spout. When I get all steamed up Hear me shout Tip me over and pour me out!.";
const spiltOnSpace = (str) => str.split(" ");
const count = (arr) => arr.length;
console.log("spiltOnSpace(rhyme)  ---> ", spiltOnSpace(rhyme));
console.log("count(spiltOnSpace(rhyme))  ---> ", count(spiltOnSpace(rhyme)));
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
const wordCount = pipeFunc(spiltOnSpace, count);
console.log("wordCount  ---> ", wordCount);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
// Uncaught TypeError: Cannot read properties of undefined (reading 'split')
// console.log("wordCount()  ---> ", wordCount());
console.log("wordCount(rhyme)  ---> ", wordCount(rhyme));
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

const egbdf = "Every Good Boy Does Fine";
console.log("wordCount(egbdf)  ---> ", wordCount(egbdf));
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

const str1 = "taco Cat";
const str2 = "UFO tofu";
const str3 = "Gayathri";

const split = (str) => str.split("");
const join = (str) => str.join("");
const lower = (str) => str.toLowerCase();
const reverse = (arr) => arr.reverse();

const forwardWord = pipeFunc(spiltOnSpace, join, lower);
// Nested Pipe
const backwardWord = pipeFunc(forwardWord, split, reverse, join);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("str1  ---> ", str1);
const str1Arr = [str1];
str1Arr.push(forwardWord(str1));
console.log("Forward ->", str1Arr[1]);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
str1Arr.push(backwardWord(str1));
console.log("Backward ->", str1Arr[2]);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("Palindrome -> ", str1Arr[1] === str1Arr[2]);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

console.log("str2  ---> ", str2);
const str2Arr = [str2];
str2Arr.push(forwardWord(str2));
console.log("Forward ->", str2Arr[1]);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
str2Arr.push(backwardWord(str2));
console.log("Backward ->", str2Arr[2]);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("Palindrome -> ", str2Arr[1] === str2Arr[2]);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

console.log("str3  ---> ", str3);
const str3Arr = [str3];
str3Arr.push(forwardWord(str3));
console.log("Forward ->", str3Arr[1]);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
str3Arr.push(backwardWord(str3));
console.log("Backward ->", str3Arr[2]);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("Palindrome -> ", str3Arr[1] === str3Arr[2]);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// 3 Approaches for functional progrmaming to use Impure Functions
const scoreObj = { home: 0, away: 0 };
console.log("Score Object (Inital)  ---> ", scoreObj);
const shallowClone = (obj) => (Array.isArray(obj) ? [...obj] : { ...obj });
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~Approach1~~~~~~~~~~~~~~~~~~~~~~~~~");
// 1 -> Clone Object before an impure function mutates it
// Impure Function as it mutates the passed data
const incrementHome1 = (obj) => {
  // Mutation
  obj.home += 1;
  return obj;
};
const decrementAway = (obj) => {
  obj.away -= 1;
  return obj;
};

console.log(
  "Home Score Pure  ---> ",
  pipeFunc(shallowClone, incrementHome1)(scoreObj)
);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
const awayScorePure = pipeFunc(shallowClone, decrementAway);
console.log("Away Score Pure  ---> ", awayScorePure(scoreObj));
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

const awayScoreDirectMutation1 = decrementAway(scoreObj);
console.log("Away Score Direct Mutation 1  ---> ", awayScoreDirectMutation1);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

console.log(
  "scoreObj === awayScoreDirectMutation1  ---> ",
  scoreObj === awayScoreDirectMutation1
);
console.log("scoreObj === awayScorePure  ---> ", scoreObj === awayScorePure);
console.log(
  "awayScorePure === awayScoreDirectMutation1  ---> ",
  awayScorePure === awayScoreDirectMutation1
);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

console.log("Home Score Direct Mutation 1  ---> ", incrementHome1(scoreObj));
console.log("Home Score Direct Mutation 2  ---> ", incrementHome1(scoreObj));
console.log("Away Score Direct Mutation 2  ---> ", decrementAway(scoreObj));
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

console.log("Score Object (After Mutation)  ---> ", scoreObj);

// Positive Point -> Fewer Function Calls
// Negative Point -> Creation of impure functions and testing difficulties
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~Approach2~~~~~~~~~~~~~~~~~~~~~~~~~");
// 2 -> Curry a function which creates a partial that is unary
let incrementHome2 = (cloneFunc) => (obj) => {
  const newObj = cloneFunc(obj);
  // Mutation on new object
  newObj.home += 1;
  return newObj;
};
// Create a partial by applying the first argument in advance
incrementHome2 = incrementHome2(shallowClone);
const homeScore2 = incrementHome2(scoreObj);
console.log("homeScore2  ---> ", homeScore2);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

const homeScore2Pipe = pipeFunc(incrementHome2);
console.log("homeScore2Pipe  ---> ", homeScore2Pipe(scoreObj));
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

console.log("scoreObj === homeScore2  ---> ", scoreObj === homeScore2);
console.log("scoreObj === homeScore2Pipe  ---> ", scoreObj === homeScore2Pipe);
console.log(
  "homeScore2 === homeScore2Pipe  ---> ",
  homeScore2 === homeScore2Pipe
);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

console.log("Score Object (After Mutation)  ---> ", scoreObj);
// Positive Point -> Pure Function with clear dependencies
// Negative Point -> More calls to the cloning function if more operations are to be done on the object
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~Approach3~~~~~~~~~~~~~~~~~~~~~~~~~");
// 3 -> Insert clone function as a dependency
const incrementHome3 = (obj, cloneFunc) => {
  const newObj = cloneFunc(obj);
  // Mutation on new object
  newObj.home += 1;
  return newObj;
};

const homeScore3 = incrementHome3(scoreObj, shallowClone);
console.log("homeScore3  ---> ", homeScore3);

// const homeScore3PipeDependency = pipeFunc(
//   incrementHome3(scoreObj, shallowClone)
// );
// console.log("homeScore3PipeDependency  ---> ", homeScore3PipeDependency);

const homeScore3Pipe = pipeFunc(
  // Anonymous function to get the result of previous (if present) unary functions (an object of array inside the Pipe)
  //   Clone function is passed explicitly without creation of partial
  (x) => incrementHome3(x, shallowClone)
);
console.log("homeScore3Pipe  ---> ", homeScore3Pipe(scoreObj));
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

console.log("scoreObj === homeScore3  ---> ", scoreObj === homeScore3);
console.log("scoreObj === homeScore3Pipe  ---> ", scoreObj === homeScore3Pipe);
console.log(
  "homeScore3 === homeScore3Pipe  ---> ",
  homeScore3 === homeScore3Pipe
);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

console.log("Score Object (After Mutation)  ---> ", scoreObj);
// Positive Point -> Pure Function with clear dependencies
// Negative Point -> Non-unary Functions inside the Pipe / Compose Chain
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);
