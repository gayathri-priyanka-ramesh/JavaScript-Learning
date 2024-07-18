// '.test.js' file is a Test Suite (It can have as many testcases for a single function)

// const sum = require("./46. jestTesting");
// test("adds 1 + 2 to equal 3", () => {
//   expect(sum(1, 2)).toBe(3);
// });

// const shallowObjClone = require("./46. jestTesting");
// test("Create a clone of the object parameter", () => {
//   const myObj = { property1: "Value1", property2: "Value2" };
//   // Throws the Error and Fails the Test Case
//   // Create a clone of the object parameter
//   // expect(received).toBe(expected) // Object.is equality
//   // If it should pass with deep equality, replace "toBe" with "toStrictEqual"
//   //   expect(shallowObjClone(myObj)).toBe(myObj);
//   expect(shallowObjClone(myObj)).toStrictEqual(myObj);
// });

// Testing a function that does 2 works (Reverse & Compare)
// const isPalindrome = require("./46. jestTesting");
// test("Tacocat returns True", () => {
//   expect(isPalindrome("Tacocat")).toBe(true);
// });
// test("Cat returns False", () => {
//   expect(isPalindrome("Cat")).toBe(false);
// });

// const reverseString = require("./46. jestTesting");
// test("Reverse any given string", () => {
//   expect(reverseString("Cat")).toBe("taC");
// });

const compareString = require("./46. jestTesting");
test("Tacocat returns True", () => {
  expect(compareString("Tacocat")).toBe(true);
});
test("Cat returns False", () => {
  expect(compareString("Cat")).toBe(false);
});
