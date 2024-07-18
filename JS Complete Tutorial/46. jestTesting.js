/* Jest -> Delightful JS Testing Framework with a focus on simplicity
           Originally developed by Facebook and maintained by Meta
           Runs unit test for the modules
    
    Unit Test -> Tests a Smallest Unit in isolation
                 Clean Code Principle (Function does only one thing)
                 Breaks down larger problems into smaller units for increased problem solving

   Need of Writing Test -> Catch bugs that wouldn't have thought of
                           Save time by running tests instead of manual checks
                           Tests are documents that the project team uses

   Installation Steps:
        Install npm
        Install Jest in terminal
            'npm i jest -D'
        In 'package.json' file, under 'scripts'
            Replace 
                "test": "echo \"Error: no test specified\" && exit 1"
            with
                "test": "jest"            -> Test all the test files and give simplified result with 
                                                Test Suites: X failed, Y passed, M total                                                                                                                                                   
                                                Tests:       U failed, V passed, N total                                                                                                                                                  
                                                Snapshots:   A total
                                                Time:        time s, estimated 1 s
                "test": "jest --coverage" -> Test all the test filed and a detailed report (unused lines of function code) in a table above the simplified result
                                                --------------------|---------|----------|---------|---------|-------------------
                                                File                | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s                                                                                                 
                                                --------------------|---------|----------|---------|---------|-------------------
                                                All files           |   58.33 |      100 |      40 |   58.33 | 
                                                 46. jestTesting.js |   58.33 |      100 |      40 |   58.33 | 45,50,57-60      
                                                --------------------|---------|----------|---------|---------|-------------------
        Create a file with functions to test 'fileName.js'
            Export the function as 
                    module.exports = functionName;
        Create a test file to run the tests 'fileName.test.js'
            Import the function as 
                    const functionName = require("./fileName");
                    test("functionDescription with arguments and result", () => {
                        expect(functionName(arg1, arg2, ... , argN)).toBe(result);
                    });
        Run the tests in the terminal
            'npm test'

    Write seperate files for each functions

    
*/

function sum(a, b) {
  return a + b;
}
module.exports = sum;

function shallowObjClone(obj) {
  return { ...obj };
}
module.exports = shallowObjClone;

// Function that does 2 works (Reverse & Compare)
function isPalindrome(word) {
  // It is not possible to determine whether error occured in reversing or in comparing if both tasks are done by a single function
  return word.toLowerCase() === word.toLowerCase().split("").reverse().join("");
  // String is converted into Character Array which is Reversed and Joined back to String (String doesn't have reverse function in JS)
  const reverseWord = word.toLowerCase().split("").reverse().join("");
  return word.toLowerCase() === reverseWord;
}
module.exports = isPalindrome;

// Function that does only 1 work
function reverseString(str) {
  return str.split("").reverse().join("");
}
module.exports = reverseString;

// 'reverseString' function is tested individually and then used as a helper to 'compareString' function
// Import the 'reverseString' function if defined in another file
// const reverseString = require("./fileName");
function compareString(str) {
  return str.toLowerCase() === reverseString(str).toLowerCase();
}
module.exports = compareString;
