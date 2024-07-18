/* Synchronous JS -> Traditional way where each operation is performed in a sequential and blocking manner
                     Each line of code is executed one after the other
                     Program will wait for each operation to finish moving on to the next one
                     If an operation takes a long time to complete, it can potentially slow down the entire application, making it less responsive */
function add(a, b) {
  console.log("Inside 'Add' Function");
  return a + b;
}
function multiply(a, b) {
  console.log("Inside 'Multiply' Function");
  return a * b;
}

let num1 = 2,
  num2 = 3,
  num3 = 4;
console.log("Start Synchronous Execution");

const result1 = add(num1, num2);
console.log(
  `'Add' Function Result  ---> \nA -> ${num1}, B -> ${num2}, A+B -> ${result1}`
);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

const result2 = multiply(result1, num3);
console.log(
  `'Multiply' Function Result  ---> \nA -> ${result1}, B -> ${num3}, A+B -> ${result2}`
);

console.log("End Synchronous Execution");
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/* Asynchronous JS -> Allows certain operation to be executed independently from the main program flow
                      Operations do not block the execution of other tasks
                      Achieved using 'callback', 'Promise', 'async' or 'await' keywords
                      
   Callback Functions -> Super important in Asynchronous JS (Defering a piece of code using 'setTimeOut')
        Issues: Callback Hell        - Callback inside callback forming 'Pyramid of Doom' Structure
                                       Horizontal growing of code instead of Vertical Growth makes is unreadable and unmaintainable
                                       Outer Function is responsible to call the Inner Callback Function

                Inversion of Control - Loose control of code while using callbacks (very risky)
                                       Blindly trusting the Outer Function that it will call the Inner Callback Function as desired
                                       Outer Function takes complete control over the Inner Function
                                       Callback Function maynot be called or may be called multiple times due to bugs in Outer Function which produces undesirable results
                                       This isn't reliable as each function will be developed by different developers and calling of callback function as desired is not promised
                                       Control of the program is completely taken by the part of code that the developer is not aware of
        
        Solution: Promise
*/

// console.log("Start Asynchronous Execution");
// setTimeout(() => {
//   console.log("Inside SetTimeOut Function executed after 5 seconds");
//   console.log(
//     "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
//   );
// }, 5000);
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
// setTimeout(() => {
//   console.log("Inside SetTimeOut Function executed after 2 seconds");
// }, 2000);
// console.log("End Asynchronous Execution");
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/* Scenario -> E-commerce Task with access to 4 backend APIs (Create Order, Payment, Order Summary, Update Wallet)
               Asynchronous operation which are dependent in a sequence
*/
// const cart = ["tops", "jeans", "shoes"];
// // Pyramid of Doom Structure
// // Responsible to call 'proceedToPayment' and takes its complete control
// api.createOrder(cart, function () {
//   // Responsible to call 'showOrderSummary'
//   api.proceedToPayment(orderInfo, function () {
//     // Responsible to call 'updateWallet'
//     api.showOrderSummary(paymentInfo, function () {
//       // To be called once the 'createOrder' is called and all inner callback functions are executed successfully
//       api.updateWallet(summaryInfo);
//       // May or maynot call due to bugs inside any of the outer functions
//     });
//   });
// });

// CallbackHell
function callbackHell(callback) {
  setTimeout(() => {
    const data = "Initial Data";
    console.log("Inside 'callbackHell' Function ---> ", data);
    callback(data);
  }, 500);
}
function fisrtFunc(data, callback) {
  setTimeout(() => {
    const processedDataFirst = `${data} - Processed First`;
    console.log("Inside 'fisrtFunc' Function ---> ", processedDataFirst);
    callback(processedDataFirst);
  }, 1500);
}
function secondFunc(data, callback) {
  setTimeout(() => {
    const processedDataSecond = `${data} - Processed Second`;
    console.log("Inside 'secondFunc' Function ---> ", processedDataSecond);
    callback(processedDataSecond);
  }, 1000);
}
// console.log("Start of all Asynchronous Functions");
// callbackHell((initialData) => {
//   console.log("Start of 'callbackHell' Function");
//   fisrtFunc(initialData, (processedDataFirst) => {
//     console.log("Start of 'fisrtFunc' Function");
//     secondFunc(processedDataFirst, (processedDataSecond) => {
//       console.log("Start of 'secondFunc' Function");
//       console.log(
//         `Final result of all functions is  ---> ${processedDataSecond}`
//       );
//       console.log("End of 'secondFunc' Function");
//       console.log(
//         "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
//       );
//     });
//     console.log("End of 'fisrtFunc' Function");
//   });
//   console.log("End of 'callbackHell' Function");
// });
// console.log("End of all Asynchronous Functions");

// Asynchronous Callback
function getUserDataFromDB(name, callback) {
  setTimeout(() => {
    console.log("Getting User Name...  ---", name);
    callback(name);
  }, 1000);
}
function getUserHobbies(name, callback) {
  setTimeout(() => {
    console.log("Getting", name + "'s hobbies...");
    callback(["Reading", "Sleeping"]);
  }, 1500);
}
// console.log("Start of Asynchronous Callback Functions");
// getUserDataFromDB("Gayathri", (data) => {
//   console.log("Name ->", data);
//   getUserHobbies(data, (hobby) => {
//     setTimeout(() => {
//       console.log("Hobbies ->", hobby);
//       console.log(
//         "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
//       );
//     }, 2000);
//   });
// });
// console.log("End of Asynchronous Callback Functions");

// Callback is not always Asynchronous
const numbers = [10, 20, 30, 40, 50];
// console.log("Start of Synchronous Callback Functions");
// numbers.forEach((n) => console.log("Array Element ->", n));
// console.log("End of Synchronous Callback Functions");
// console.log(
//   "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
// );
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/* 'async' & 'await' combo is use to handle Promise (Syntactic Sugar over Regular Promise as its doesn;t requires Callback Function in 'await')
   Async Function -> Designed to operate asynchronously performing tasks in background while other code continues to execute
                     Marked with 'async' reserved keyword which turns function declaration to Async Function
                     Always return a Promise (If a non-promise value is returned explicitly, the 'async' wraps the value inside a promise and returns it)
   Await Operator -> Waits for a Promise to settle
                     Only be used inside an Async Function within regular JS Code, else throws 'Uncaught SyntaxError: await is only valid in async functions and the top level bodies of modules'
                     Handles Promise without using '.then()'
*/

//  Wraps the returned String inside a promise and returns the Promise
// async function asyncFuncion() {
//   return "JavaScript";
// }
// const asyncFuncion = async () => "JavaScript";
//  Returns the explicitly returned Promise as it is without wrapping it into another promise
const asyncFuncion = async () => {
  return new Promise((resolve, reject) => resolve("JavaScript"));
};
// const asyncFuncionPromise = asyncFuncion();
// console.log("asyncFuncionPromise  ---> ", asyncFuncionPromise);
// const asyncFuncionResult = asyncFuncionPromise.then((res) =>
//   console.log("Result  ---> ", res)
// );
// console.log("asyncFuncionResult  ---> ", asyncFuncionResult);

function fetchDataFromServer() {
  return new Promise((resolve, reject) => {
    // 'setTimeOut' with minimum timer is executed and settled
    setTimeout(() => {
      resolve("Userdata retrieved from server");
    }, 2000);
    setTimeout(() => {
      reject("Userdata not retrieved from server");
    }, 3000);
    // }, 1000);
  });
}
function getUserDataPromise() {
  try {
    console.log("Inside 'getUserDataPromise()");
    console.log(
      "Code before '.then()' continues to execute and doesn't wait for 'fetchDataFromServer()' to finish"
    );
    // Handling Promises using '.then()' and '.catch()' make JS Engine not to wait for the promise to get settled
    const data = fetchDataFromServer()
      .then((res) => console.log(res))
      // .then((res) => res)
      // Error in Rejected Promises should be explicitly caught using 'catch()')
      .catch((err) => {
        console.log("Error not Caught in 'catch{}'  ---> ", err);
        // const error = "Error not Caught in 'catch{}'  ---> " + err;
        // return error;
      });
    console.log(
      "Code after '.then()' continues to execute and doesn't wait for 'fetchDataFromServer()' to finish (executed before the promise settles"
    );
    // Data Value inside the Promise is stored in 'data' only if returned (stores 'undefined' if only logged to console)
    console.log("Data:", data);
  } catch (error) {
    // Error in Rejected Promises is not caught here (explicitly caught using 'catch()' while handling promises)
    console.log("Error:", error);
  } finally {
    // Executed before the settlement of promise (after 'try{}' is executed continuously)
    console.log("End getUserDataPromise()");
    console.log(
      "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
    );
  }
}
// console.log("Start of Async Functions");
// getUserDataPromise();
// // Callback is registered and the code her continues to execute
// console.log("End of Async Functions");

async function getUserDataAsyncAwait() {
  try {
    console.log("Inside 'getUserDataAsyncAwait()");
    console.log(
      "Code before 'await' continues to execute and doesn't wait for 'fetchDataFromServer()' to finish"
    );
    // await is used before a Promise or a Function which returns a Promise (JS Engine waits for the promise to get settled)
    const data = await fetchDataFromServer();
    console.log(
      "Code after 'await' waits for 'fetchDataFromServer()' to finish (executed only is promise is resolved)"
    );
    // Data Value inside the Promise is stored in 'data'
    console.log("Data:", data);
  } catch (error) {
    // Error in Rejected Promises is caught here as soon as the promise is rejected (code after 'await' in 'try{}' is not executed)
    console.log("Error:", error);
  } finally {
    // Executed after the settlement of promise (after 'try{}' or 'catch{}' is executed)
    console.log("End getUserDataAsyncAwait()");
    console.log(
      "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
    );
  }
}
// console.log("Start of Async Functions");
// getUserDataAsyncAwait();
// // Callback is registered and the code her continues to execute
// console.log("End of Async Functions");

// Refactoring Asynchronous CallbackHell Promise using Async Function and Await Operator
// Same functions can be used and only the Function Call differs
async function processedDataWithAsyncAwait() {
  try {
    console.log("Start of 'callbackHell' Function");
    const data = await callbackHell();
    console.log("End of 'callbackHell' Function");
    console.log("Start of 'fisrtFunc' Function");
    const processedDataFirst = await firstFunc(data);
    console.log("End of 'fisrtFunc' Function");
    console.log("Start of 'secondFunc' Function");
    const processedDataSecond = await secondFunc(processedDataFirst);
    console.log("End of 'secondFunc' Function");
    console.log(
      `Final result of all functions is  ---> ${processedDataSecond}`
    );
    console.log(
      "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
    );
  } catch (error) {
    console.log("Error:", error);
  }
}
// console.log("Start of Async Functions");
// processedDataWithAsyncAwait();
// console.log("End of Async Functions");

// Refactoring Getting userdata and hobbies using Async Function and Await Operator
async function userDataHobbiesWithAsyncAwait() {
  try {
    const name = await getUserDataFromDB("Gayathri");
    console.log("Name -> ", name);
    const hobby = await getUserHobbies(name);
    console.log("Hobbies ->", hobby);
    console.log(
      "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
    );
  } catch (error) {
    console.log("Error:", error);
  }
}
// console.log("Start of Async Functions");
// userDataHobbiesWithAsyncAwait();
// console.log("End of Async Functions");

var addTwoPromises = async function (promise1, promise2) {
  const result = (await promise1) + (await promise2);
  return new Promise((resolve) => resolve(result));
};
// addTwoPromises(Promise.resolve(5), Promise.resolve(4)).then(console.log);
// addTwoPromises(Promise.resolve(5), Promise.resolve(4)).then((result) =>
//   console.log("Sum of 2 promises  ---> ", result)
// );

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promise 1 is Resolved"), 10000);
  // setTimeout(() => reject("Promise 1 is Rejected"), 10000);
});
const promise2 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("Promise 2 is Resolved"), 5000);
  // setTimeout(() => reject("Promise 2 is Rejected"), 5000);
});
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promise 3 is Resolved"), 15000);
  // setTimeout(() => reject("Promise 3 is Rejected"), 1500);
});
async function handlePromises() {
  try {
    // JS Engine actually appears to be waiting and not exactly waiting by consuming memory and not occupying the CallStack
    // If the JS Engine itself waits, then handlePromises() will remain in CallStack and freezes the page
    console.log("Start handlePromises()");
    // Moves out of the CallStack and waits until the promise is settled
    const result1 = await promise1;
    // Resolved -> Enters the CallStack and continues the execution from where it left (as it is synchronous)
    // Rejected -> Throws error as soon as failed and doesn't move to further promises below
    console.log("Promise1 Result  ---> ", result1);
    // Checks weather the promise is settled
    const result2 = await promise2;
    // Resolved -> Synchronour behaviour of JS doesn't execute the result of promise which is already resolved if above promises are unsettled (executed only if the above promises are resolved and executed)
    // Rejected -> Throws error as soon as failed and doesn't move to further promises below (but execute resolved promises above)
    console.log("Promise2 Result  ---> ", result2);
    // Checks weather the promise is settled (suspends again if it is not yet settled)
    const result3 = await promise3;
    // Resolved -> Enters back the CallStack and continues the execution from where it left
    // Rejected -> Throws Uncaught error as soon as failed and is caught only when JS Engine reached this place synchronously and also execute all resolved promises above (I any promises above is rejected, only that error is caught and this remains uncaught)
    console.log("Promise3 Result  ---> ", result3);
    console.log("End handlePromises()");
  } catch (err) {
    console.log("First encountered error  ---> ", err);
  }
}
console.log("Start of Async Functions");
// Enters the CallStack initially, its execution gets suspended once an 'await' is encountered and it moves out of Main Thread without blocking or freezing the page
// handlePromises();
// If this 'handlePromises()' occupies the CallStack, the the page would have frozen by not moving further until the promises are resolved
console.log("End of Async Functions");
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const GIT_API = "https://api.github.com/users/gayathri-priyanka-ramesh";
// const GIT_API = "https://api.github.com/users/fdxgcghjkh";
const fetchPromise = () => {
  const responsePromiseObject = fetch(GIT_API);
  console.log("responsePromiseObject  ---> ", responsePromiseObject);
  const jsonPromiseObject = responsePromiseObject
    .then((response) => response.json())
    .catch((err) => console.log("Fetch Failed ---> ", err));
  console.log("jsonPromiseObject  ---> ", jsonPromiseObject);
  // const resultValue = jsonPromiseObject.then((result) => result);
  const resultValue = jsonPromiseObject
    .then((result) => {
      console.log("Result  ---> ", result);
      return result;
    })
    .catch((err) => console.log("JSON Failed ---> ", err));
  // Result is not stored as the JS Engine doesn't wait for the 'jsonPromiseObject' to get settled
  console.log("resultValue  ---> ", resultValue);
};
// fetchPromise();

const fetchAsyncAwait = async () => {
  try {
    // 2 promises are handled using 2 '.then()', hence 2 'await' are used
    const responseObject = await fetch(GIT_API);
    console.log("responseObject  ---> ", responseObject);
    const jsonObject = await responseObject.json();
    console.log("jsonObject  ---> ", jsonObject);
  } catch (err) {
    console.log("Encountered error  ---> ", err);
  }
};
// fetchAsyncAwait();

// const fetchAsyncAwait = async () => {
//   const responseObject = await fetch(GIT_API);
//   console.log("responseObject  ---> ", responseObject);
//   const jsonObject = await responseObject.json();
//   console.log("jsonObject  ---> ", jsonObject);
// };
// // Traditional Way to handle error
// fetchAsyncAwait().catch((err) =>
//   console.log("Encountered error  ---> ", err)
// );

// 'forEach' not recommended with 'async' & 'await'
const postIDs = [1, 2, 3, 4000, 5, 6, 7, 8, 9, 10];
const getPost = async (id) => {
  return await (
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  ).json();
  // Expansion of above one line
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const jsonObj = await response.json();
  return jsonObj;
};

const useForEach = async (ids) => {
  await ids.forEach(async (id) => {
    console.log("ID: ", id);
    // 'id' is displayed continuously without waiting for the promises to be resolved
    const data = await getPost(id);
    // Resolved promises are displayed irrespective of the required order
    console.log(data);
  });
  console.log(
    "Doesn't wait for the promises to be resolved even if 'await' is used in the outer function"
  );
};
// useForEach(postIDs);

const getPostsSerialized = async (ids) => {
  // // Traditional 'for' loop
  // for (let i = 0; i < ids.length; i++) {
  //   console.log("ID: ", ids[i]);
  //   const data = await getPost(ids[i]);
  //   // Resolved promises are displayed in required order
  //   console.log(data);
  // }

  // Waits for the first 'for' loop to complete and starts the next 'for of' loop again

  // // 'for of' loop
  // for (const id of ids) {
  //   console.log("ID: ", id);
  //   const data = await getPost(id);
  //   // Resolved promises are displayed in required order
  //   console.log(data);
  // }

  // 'reduce' returns a value and hence, removing the 'await' here won't wait for the promises to be resolved and it continues the code below the 'reduce', but the promises are resolved in order
  // ids.reduce(async (accumulator, currentID) => {
  await ids.reduce(async (accumulator, currentID) => {
    // It is displayed continouously and current accumulator waits for the promise to resolve
    console.log(currentID, "Previous Accumulator: ", accumulator);
    // Removing 'await accumulator' displayed post in the order they are resolved (current accumulator before 'getPost' is also displayed continously)
    // await accumulator;
    console.log(
      currentID,
      "Current Accumulator (Before getPost): ",
      accumulator
    );
    const data = await getPost(currentID);
    // Resolved promises are displayed in required order
    console.log(data);
    console.log(
      currentID,
      "Current Accumulator (After getPost): ",
      accumulator
    );
  }, Promise.resolve());
  // Removing 'Promise.resolve()' won't display the first post as initial value is mandate in 'reduce'
  // });

  console.log(
    "Waits until the 'for' loop is completed which waits for all the promises to be resolved"
  );
};
getPostsSerialized(postIDs);

const getPostsConcurrently = async (ids) => {
  // 'map' takes an array of promises to resolve returns a new array as per condition '.all()' or '.allSettled()'
  const postsArray = await Promise.all(
    // Preferred if Serial Order is not important but performance matters (Order may not be guaranteed but is faster that 'forEach')
    ids.map(async (id) =>
      // 'await' is not needed here as all the promises are resolved atonce at the end
      getPost(id)
    )
  );
  // const postsArray = await Promise.allSettled(
  //   ids.map(async (id) => getPost(id))
  // );
  //
  console.log(postsArray);
  console.log("Waits for all the promises to be resolved");
};
// getPostsConcurrently(postIDs);
