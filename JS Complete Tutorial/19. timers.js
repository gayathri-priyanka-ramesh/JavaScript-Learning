/*JS waits for none and the execution doesn't wait for the timer to expire
 'setInterval' and 'setTimeOut' -> Takes a callback function (1st argument) inside it and executes it once the timer (2nd argument) expires
                                   It include asynchronous behaviour in JS
                                   The call stack (main thread) becomes empty when all the synchrounous tasks are completed and it is again populated once the timer expires
*/

// // setInterval -> Repeat or Execute a block in a specified interval
// setInterval(
//   () =>
//     console.log(
//       "Funtion executes at an interval of specified time (2000 milliseconds)"
//     ),
//   2000
// );
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

// // setTimeOut -> Execute a block after a specified time
// setTimeout(function () {
//   console.log("Funtion executes after the specified time (3000 milliseconds)");
// }, 3000);
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

// // The 'setInterval' and 'setTimeOut' functions stored in a variable have continuous numbers
// const setIntervalId1 = setInterval(
//   () =>
//     console.log(
//       "A - 'setInterval' Funtion executes at an interval of 1000 milliseconds"
//     ),
//   1000
// );
// console.log("A - setIntervalId  ---> ", setIntervalId1);
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

// const setTimeOutId1 = setTimeout(function () {
//   console.log("A - 'setTimeout' Funtion executes after 4000 milliseconds");
// }, 4000);
// console.log("A - setTimeOutId  ---> ", setTimeOutId1);
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

// const setIntervalId2 = setInterval(
//   () =>
//     console.log(
//       "B - 'setInterval' Funtion executes at an interval of 500 milliseconds"
//     ),
//   500
// );
// console.log("B - setIntervalId  ---> ", setIntervalId2);
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

// const setTimeOutId2 = setTimeout(function () {
//   console.log("B - 'setTimeout' Funtion executes after 10000 milliseconds");
//   // clearInterval -> Stops the specified 'setInterval' function from executing after the specified time
//   clearInterval(setIntervalId1);
//   console.log("SetIntervalId1 Stopped");
//   // clearInterval(setIntervalId2);
//   // console.log("SetIntervalId2 Stopped");
// }, 10000);
// console.log("B - setTimeOutId  ---> ", setTimeOutId2);
// console.log(
//   "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
// );

// Concurrency Model / Starvation of Callback Queue -> Trust Issues with 'setTimeOut' takes place because the Callback Function waits inside the Callback Queue until the Call Stack is empty
console.log("Start Concurrency Model");
setTimeout(function trustIssue() {
  // It is executed only after the main thread is free
  console.log(
    "You cannot trust me as i'm executed after a delay [timer 1000ms]"
  );
}, 1000);
// setTimeOut with timer 0 is used to 'defer' a certain piece of code (to be executed after the execution of the Global Execution Context inside the Main thread)
setTimeout(function trustIssue() {
  // Even this gets into the Callback Queue (Less important code can be defered and executed later)
  console.log("I'm executed after a delaywith timer 0");
}, 0);
setTimeout(function trustIssue() {
  // It is executed only after the main thread is free
  console.log(
    "You cannot trust me as i'm executed after a delay [timer 500ms]"
  );
}, 500);
// Simulation of millio nlines of code which runs for 2 seconds
let startTime = new Date().getTime();
let endTime = startTime + 2000;
console.log("Start of Million Lines of code at", startTime);
// Blocking of main thread is a bad practice
while (startTime <= endTime) {
  console.log("Current Line at", ++startTime);
}
console.log("End of Million Lines of code at", startTime);
console.log("End Concurrency Model");

// Problem Statement -> Output i each after i seconds where i is 1 to 5
function printIWithVar() {
  console.log("Before 'for' Loop --- i  ->  ", i);
  // 'var' updates the existing reference of 'i' in the functional scope
  for (var i = 1; i <= 5; i++) {
    console.log("Current i before 'setTimeOut' -> ", i);
    // 'setTimeOut' stores 'logI' attached with a timer in a seperate stack, and executes once the timer expires
    setTimeout(
      // 'logI' forms a closure with 'printIWithVar' and it remembers the reference to 'i' (not value of 'i')
      function logI() {
        // Refers to same reference of 'i' of functional scope for all 'setTimeOut' incase of 'var'
        console.log("Current i inside 'setTimeOut' -> ", i);
      },
      i * 1000
    );
    console.log("Current i after 'setTimeOut' -> ", i);
  }
  // For loop runs without waiting for 'setTimeOut' to expire and stores the reference of 'i' with the value got at the end of the loop
  console.log("After 'for' Loop --- i  ->  ", i);
}
// printIWithVar();

function printIWithLet() {
  // 'let' has block scope and stores a new copy of 'i' during each iteration
  for (let i = 1; i <= 5; i++) {
    console.log("Current i before 'setTimeOut' -> ", i);
    setTimeout(
      // 'logI' forms a closure with 'printIWithLet' and it remembers the reference to 'i' (not value of 'i')
      function logI() {
        // Refers to new reference of 'i' of block scope for each 'setTimeOut' incase of 'let'
        console.log("Current i inside 'setTimeOut' -> ", i);
      },
      i * 1000
    );
    console.log("Current i after 'setTimeOut' -> ", i);
  }
}
// printIWithLet();

function printIWithVarClosed() {
  console.log("Before 'for' Loop --- i  ->  ", i);
  // 'var' updates the existing reference of 'i' in the functional scope
  for (var i = 1; i <= 5; i++) {
    console.log("Current i before 'closeI' -> ", i);
    // 'closeI' forms a closure with 'printIWithVarClosed' and it remembers the reference to 'i' passed and stores 'currentI' for each iteration
    function closeI(currentI) {
      console.log("Current i before 'setTimeOut' -> ", currentI);
      setTimeout(
        // 'logI' forms a closure with 'closeI' and it remembers the reference to 'currentI'
        // 'logI' forms a closure with 'printIWithVarClosed' and it remembers the reference to 'i' (not value of 'i')
        function logI() {
          console.log(
            "Current i inside 'setTimeOut' -> ",
            currentI,
            " ------- i  -> ",
            i
          );
        },
        i * 1000
      );
      console.log("Current i after 'setTimeOut' -> ", currentI);
    }
    // Pass the new copy of 'i' to the 'closeI' in each iteration
    closeI(i);
    console.log("Current i after 'closeI' -> ", i);
  }
  console.log("After 'for' Loop --- i  ->  ", i);
}
// printIWithVarClosed();
