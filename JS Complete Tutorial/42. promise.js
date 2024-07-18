/* Promise -> Object representing the eventual completion or failure of an Asynchronous operation
              JS 'Promise()' Object contains both the producing code and calls to the consuming code
              Promise Object is immutable (i.e) only its values can be passed and attached with handlers, but cannot be mutated
              It is placeholder which wil be filled with values at a later point of time until value is received from an asynchronous operation (container for a future value)
              API Calls made by a promise cannot be cancelled inbetween

              'PromiseResult' -> Data returned by the 'fetch()'
              'PromiseState' --- 3 States --- Pending (Initial state not yet fullfilled or rejected) 
                                              Fullfilled/Resolved (Promise Completed)
                                              Rejected (Promise Failed) 

              Methods to use --- Resolved -> .then() .finally()
                                 Rejected -> .then() .catch() .finally() 
                    .then()    -> Attaches the Success Callback Function to a Promise object
                                  Handles successful outcome of 'Promise' and it takes 2 arguments: onFulfilled, onRejected 
                    .catch()   -> Attaches the Failure Callback Function
                                  Returns a 'Promise' and deals with 'rejected' case only 
                                  Catches only the errors above it (Errors are caught in order if there are enough 'catch' for each errors)
                                  Execution stops and moves to the last 'catch' if present or it displays 'Uncaught (in promise) Error' after the execution of all the 'finally()'
                                  If there is only one 'catch' at the last and if error occurs in any promise, the entire chain is cut and the error is caught
                                  The error in the promises above the 'catch' is caught and the chain continues to execute until next any Uncaught Error
                    .finally() -> Executed for both 'resolved' or 'rejected' cases
                                  Any no. of finally is executed irrespective of the errors (no error, caught error, uncaught error)
                      Strictly include a Callback Function to 'catch' and 'finally', else it will be executed immediately without fulfilling the need it was given (It doesn't wait for anything and executed when the promise is in 'pending' state)
              Can be either resolved or rejected (only once)
          
      An empty project {data:value} where 'data' holds the value returned by the function with API call
      It is initially {data:undefined} and is filled with value after the asynchronous value is completed at a later point of time automatically
      Once the value of data is filled inside the Promise, the callback function attached with 'then()' is automatically called which is reliable (Callback function was passed to outer function by blind trust)
      
      Advantages: Inversion of contol ->  Complete control of the program is maintained as the responsibility of outer function is only to execute and fill the promise with data value
                                          Callback function attached with promise is defenitely called only once automatically when promise contains data value
                  
                  Callback Hell       -> Promise Chaining makes the code lean
                                         The result data of each promise in the chain is to be passed to the next promise in the chain (Data is piped and is to be flowed in the whole chain)
                                         A promise is to be returned to the next promise in the chain to pass it ('return' is mandate in Promise Chaining, otherwise some data maybe lost inside the chain)
                                         
*/

// 'fetch()' is an API given by browsers to make API calls to external servers, which returns a Promise Object
const POSTS_API = "https://jsonplaceholder.typicode.com/posts";
// Initially 'user' is undefined due to hoisting and then updated with a Promise Object
const user = fetch(POSTS_API);
/* Displays 'pending' initially and while expanded it displays 'fulfilled' (due to inconsistency in browsers)
   At the point of time when 'console.log()' is executed, the Promise Object is in 'pending' state as it is quickly executed without waiting for the promise to be 'fulfilled'
   Eventually when the data value is filled in the Promise after the successful execution of Asynchronous operation, 'PromiseState' is updated with the current state as 'fulfilled' */
console.log("Promise Object is Stored in 'user'  ---> ", user);
// Executed once Promise Objects is filled with Data Value
const response = user.then(function (userInfo) {
  // Callback Function takes 'PromiseResult' as its parameter and is attached with the Promise object
  console.log("PromiseResult  ---> ", userInfo);
  if (!userInfo.ok) throw Error(userInfo.statusText);
  else console.log("Response is OK");
  return userInfo.text();
});
console.log("Response  ---> ", response);
const resultData = response.then((data) =>
  console.log("Data Retrieved --->\n" + data)
);
console.log("ResultData  ---> ", resultData);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

function checkNumber(number) {
  return new Promise((resolve, reject) => {
    console.log(`~~~~~~checkNumber(${number})~~~~~`);
    number % 2 === 0
      ? resolve(`${number} is even`)
      : reject(`${number} is odd`);
  });
}
const numEven = 8;
// checkNumber(numEven);
const numOdd = 23;
// checkNumber(numOdd);

// const numToCheck = 4;
const numToCheck = 5;
// checkNumber(numToCheck)
//   .then((successResolveMessage) => {
//     console.log("Resolved Case:", successResolveMessage);
//   })
//   .catch((errorRejectedMessage) => {
//     console.log("Rejected Case:", errorRejectedMessage);
//   })
//   .finally((executionOver) => {
//     console.log("Execution Over:", executionOver);
//     console.log(
//       "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
//     );
//   });

// Refactoring Asynchronous CallbackHell using Promise
function callbackHell() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = "Initial Data";
      console.log("Inside 'callbackHell' Function ---> ", data);
      resolve(data);
    }, 500);
  });
}
function firstFunc(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const processedDataFirst = `${data} - Processed First`;
      console.log("Inside 'fisrtFunc' Function ---> ", processedDataFirst);
      resolve(processedDataFirst);
    }, 500);
  });
}
function secondFunc(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const processedDataSecond = `${data} - Processed Second`;
      console.log("Inside 'secondFunc' Function ---> ", processedDataSecond);
      resolve(processedDataSecond);
    }, 500);
  });
}
// console.log("Start of all Asynchronous Functions");
// callbackHell()
//   .then((data) => firstFunc(data))
//   .then((processedDataFirst) => secondFunc(processedDataFirst))
//   .then((processedDataSecond) => {
//     console.log(
//       `Final result of all functions is  ---> ${processedDataSecond}`
//     );
//     console.log(
//       "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
//     );
//   })
//   .catch((error) => console.log("Error:", error));
// console.log("End of all Asynchronous Functions");

// Refactoring Getting userdata and hobbies using Promise
function getUserDataFromDB(name) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Getting User Name...  ---", name);
      resolve(name);
    }, 1000);
  });
}
function getUserHobbies(name) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Getting", name + "'s hobbies...");
      resolve(["Reading", "Sleeping"]);
    }, 1500);
  });
}
// console.log("Start of Asynchronous Callback Functions");
// getUserDataFromDB("Gayathri")
//   .then((name) => getUserHobbies(name))
//   .then((hobby) => {
//     setTimeout(() => {
//       console.log("Hobbies ->", hobby);
//       console.log(
//         "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
//       );
//     }, 2000);
//   })
//   .catch((error) => console.log("Error:", error));
// console.log("End of Asynchronous Callback Functions");
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// E - commerce Task
// Producer Side
// const cart = [];
const cart = ["tops", "jeans", "shoes"];
function validateCart(cart) {
  return cart.length ? true : false;
}
function createOrder(cart) {
  console.log("Start of createOrder");
  // A 'Promise' Constructor is invoked creates a new promise
  const createOrderPromise = new Promise(
    // Takes a function with 2 parameters 'resolve' & 'reject' functions given by JS to build Promises
    function (resolve, reject) {
      // Logic (connect to db, validation, API calls, etc.)
      if (validateCart(cart)) {
        setTimeout(function () {
          // Retrieved from DB, API Calls, etc.
          const orderInfo = "March17";
          if (orderInfo)
            // returns only the first argument
            // resolve("Order is created", orderInfo);
            resolve(orderInfo, "Order is created");
        }, 2000);
      } else {
        setTimeout(function () {
          // Throws Error to who so ever is invoking 'createOrder' at consumer side
          const createOrderRejection = new Error("Order is cancelled");
          // Shows 'Uncaught (in promise) Error: Order is cancelled' in the console
          reject(createOrderRejection);
        }, 2000);
      }
    }
  );
  // Either a resolved or rejected promise is returned
  return createOrderPromise;
}
function proceedToPayment(orderInfo) {
  console.log("Start of proceedToPayment");
  const proceedToPaymentPromise = new Promise((resolve, reject) => {
    validateCart(cart)
      ? setTimeout(() => {
          // const paymentInfo = "December 11";
          const paymentInfo = orderInfo + " December 11";
          resolve(paymentInfo);
        }, 2000)
      : setTimeout(() => {
          const proceedToPaymentRejection = new Error("Payment is cancelled");
          reject(proceedToPaymentRejection);
        }, 2000);
  });
  return proceedToPaymentPromise;
}
function showOrderSummary(paymentInfo) {
  console.log("Start of showOrderSummary");
  return new Promise(function (resolve, reject) {
    validateCart(cart)
      ? setTimeout(() => {
          // const summaryInfo = "September 22";
          const summaryInfo = paymentInfo + " September 22";
          resolve(summaryInfo);
        }, 2000)
      : setTimeout(function () {
          const showOrderSummaryRejection = new Error("Summary is cancelled");
          reject(showOrderSummaryRejection);
        }, 2000);
  });
}
function updateWallet(summaryInfo) {
  console.log("Start of updateWallet");
  return new Promise((resolve, reject) => {
    if (validateCart(cart)) {
      setTimeout(function () {
        // const walletInfo = "Happy";
        const walletInfo = summaryInfo + " Happy";
        if (walletInfo) resolve(walletInfo);
      }, 2000);
    } else {
      setTimeout(() => {
        const updateWalletRejection = new Error("Update is cancelled");
        reject(updateWalletRejection);
      }, 2000);
    }
  });
}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Consumer Side
// const createOrderPromiseObject = createOrder(cart)
//   .then(function (orderInfo, status) {
//     // Second parameter is 'undefined' as resolve returns only the first argument
//     // console.log("Order is created with  OrderInfo -> ", orderInfo);
//     console.log("Order is created with  orderInfo -> ", orderInfo, status);
//     // It is to be returned for flow of data in the pipe
//     return orderInfo;
//   })
//   // Gracefully handles the Red 'Uncaught Error'
//   .catch(
//     console.log(
//       "I am executed immediately even if there is no error or without catching any error"
//     )
//   )
//   .catch(function (createOrderError) {
//     console.log(createOrderError);
//   })
//   // Logged Immediately without waiting for the promise to 'resolve' or 'reject'
//   .finally(console.log("I am executed when the promise is in 'pending' state"))
//   .finally(function () {
//     console.log("End of createOrder");
//   });
// console.log("createOrder Promise Object  ---> ", createOrderPromiseObject);
// const proceedToPaymentPromiseObject = createOrderPromiseObject
//   .then(function (orderInfo) {
//     // proceedToPayment(orderInfo);
//     // It is to be returned to pass it on in the chain
//     return proceedToPayment(orderInfo);
//   })
//   .then(function (paymentInfo) {
//     console.log("Payment is proceeded with paymentInfo -> ", paymentInfo);
//     return paymentInfo;
//   })
//   .catch((proceedToPaymentError) => console.log(proceedToPaymentError))
//   .finally(function () {
//     console.log("End of proceedToPayment");
//   });
// console.log(
//   "proceedToPayment Promise Object  ---> ",
//   proceedToPaymentPromiseObject
// );
// const showOrderSummaryPromiseObject = proceedToPaymentPromiseObject
//   .then((paymentInfo) => {
//     return showOrderSummary(paymentInfo);
//   })
//   .then((summaryInfo) => {
//     console.log("Summary is showed with summaryInfo -> ", summaryInfo);
//     return summaryInfo;
//   })
//   .catch((showOrderSummaryError) => console.log(showOrderSummaryError))
//   .finally(() => console.log("End of showOrderSummary"));
// console.log(
//   "showOrderSummary Promise Object  ---> ",
//   showOrderSummaryPromiseObject
// );
// const updateWalletPromiseObject = showOrderSummaryPromiseObject
//   .then(
//     // 'return' can be got rid only in one-line Arrow Functions without {} (more lean but maybe unreadable)
//     (summaryInfo) => updateWallet(summaryInfo)
//   )
//   .then((walletInfo) =>
//     console.log("Wallet is updated with walletInfo -> ", walletInfo)
//   )
//   .catch((updateWalletError) => console.log(updateWalletError))
//   .finally(() => console.log("End of updateWallet"));
// console.log("updateWallet Promise Object  ---> ", updateWalletPromiseObject);
// console.log(
//   "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
// );

// Consuming Promises in a single object
// const eCommPromiseObject = createOrder(cart)
//   .then((orderInfo) => {
//     console.log("Order is created with  orderInfo -> ", orderInfo);
//     return orderInfo;
//   })
//   .catch((createOrderError) => console.log(createOrderError))
//   .finally(() => console.log("End of createOrder"))
//   .then((orderInfo) => proceedToPayment(orderInfo))
//   .then((paymentInfo) => {
//     console.log("Payment is proceeded with paymentInfo -> ", paymentInfo);
//     return paymentInfo;
//   })
//   // .catch((proceedToPaymentError) => console.log(proceedToPaymentError))
//   .finally(() => console.log("End of proceedToPayment"))
//   .then((paymentInfo) => showOrderSummary(paymentInfo))
//   .then((summaryInfo) => {
//     console.log("Summary is showed with summaryInfo -> ", summaryInfo);
//     return summaryInfo;
//   })
//   // .catch((showOrderSummaryError) => console.log(showOrderSummaryError))
//   // .finally(() => console.log("End of showOrderSummary"))
//   .then((summaryInfo) => updateWallet(summaryInfo))
//   .then((walletInfo) =>
//     console.log("Wallet is updated with walletInfo -> ", walletInfo)
//   )
//   // .catch((updateWalletError) => console.log(updateWalletError))
//   .finally(() => console.log("End of updateWallet"))
//   // .catch(() => console.log("E-Comm Task Failed"))
//   .finally(() => console.log("E-Comm Task Ends"));
// console.log("eComm Promise Object  ---> ", eCommPromiseObject);
// console.log(
//   "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
// );

// Promise Hell (Should be chained inside the function if 'return' is not used)
// const eCommPromiseHellObject = createOrder(cart)
//   .then((orderInfo) => {
//     console.log("Order is created with  orderInfo -> ", orderInfo);
//     proceedToPayment(orderInfo)
//       .then((paymentInfo) => {
//         console.log("Payment is proceeded with paymentInfo -> ", paymentInfo);
//         showOrderSummary(paymentInfo)
//           .then((summaryInfo) => {
//             console.log("Summary is showed with summaryInfo -> ", summaryInfo);
//             updateWallet(summaryInfo)
//               .then((walletInfo) =>
//                 console.log("Wallet is updated with walletInfo -> ", walletInfo)
//               )
//               .catch((updateWalletError) => console.log(updateWalletError))
//               .finally(() => console.log("End of updateWallet"))
//               .catch(() => console.log("E-Comm Task Failed"))
//               .finally(() => console.log("E-Comm Task Ends"));
//           })
//           .catch((showOrderSummaryError) => console.log(showOrderSummaryError))
//           .finally(() => console.log("End of showOrderSummary"));
//       })
//       .catch((proceedToPaymentError) => console.log(proceedToPaymentError))
//       .finally(() => console.log("End of proceedToPayment"));
//   })
//   .catch((createOrderError) => console.log(createOrderError))
//   .finally(() => console.log("End of createOrder"));
// console.log("eComm Promise Object  ---> ", eCommPromiseHellObject);

/* Promise APIs -> Used to make parallel API Calls, handle multiple promises together and retrieve the results
                   Takes an Iterable of Promises (usually 'Array') as input, where each Promise takes different time to settle (resolve/reject)
                   Outputs a Promise Object following the conditions as per the API used
        .all()      -----> ALL Resolved Result or NONE (Fail Fast)
                           Success Case -> Outputs an Iterable of Data Value is ALL Promises are Resolved
                                           Returns after promise with maximum of time is reloved
                                           Wait for all ALL Promises to get Settled (Fails for First Rejected Promise)
                           Failure Case -> Throws the error of the First Rejected Promise
                                           Returns as soon as any of the promise fails
                                           Doesn't wait for settlement (success or failure) of any other promise (This Promise API will fail)
                                           API calls made by other promises will complete and get settled as either resolve or reject (not botheres by 'all' Promise API)
        
        .allSettled -----> Everything with ANY Result
                           Returns after promise with maximum of time is settled
                           Wait for all ALL Promises to get Settled
                           Success Case -> Outputs an Iterable of Data Value is ALL Promises are Resolved       
                           Failure Case -> Outputs an Iterable of Data Value or Error for respective Promise

        .race       -----> Result of First Settled Promise
                           Returns after promise with minimum of time is settled
                           Doesn't wait for settlement (success or failure) of any other promise (This Promise API is executed and exited)
                           Success Case -> Outputs the Data Value of First Resolved Promise
                           Failure Case -> Throws the error of the First Rejected Promise

        .any        -----> First Success seeking Race (Result of First Resolved Promise or AggregateError)
                           Success Case -> Outputs the Data Value of First Resolved Promise
                                           Returns after promise with minimum of time is resolved
                                           Doesn't wait for settlement (success or failure) of any other promise (This Promise API is executed and exited)
                           Failure Case -> Returns AggregateError - Iterable of Errors of ALL Promises is NONE Resolved
                                           Returns after promise with maximum of time is settled
*/

const promise1 = fetch(POSTS_API + "/1")
  .then((response) => {
    console.log("PromiseResult  ---> ", response);
    !response.ok
      ? console.log(new Error(response.statusText))
      : console.log("Response is OK");
    // data.title cannot be accessed as the entire response will be a single string
    // return response.text();
    return response.json();
  })
  .catch((err) => console.log(err))
  .then((data) => {
    console.log("Data Retrieved", data);
    data.title
      ? console.log("Promise 1 is Resolved with Data \n", data)
      : console.log("Promise 1 is Rejected");
    // Value will be 'undefined' if not returned as the promise is handles here with 'then()'
    return data.title.slice(0, 4);
  })
  .catch((err) => console.log(err));
const promise2 = fetch(POSTS_API + "/2")
  .then((response) => {
    console.log("PromiseResult  ---> ", response);
    !response.ok
      ? console.log(new Error(response.statusText))
      : console.log("Response is OK");
    return response;
  })
  .catch((err) => console.log(err))
  .then((data) => {
    // console.log("Data Retrieved");
    // console.log(data);
    // console.log("data.json()");
    // console.log(data.json());
    data
      ? console.log("Promise 2 is Resolved with Data \n", data)
      : console.log("Promise 2 is Rejected");
    return data;
  })
  .catch((err) => console.log(err));
const promise3 = new Promise((resolve, reject) => {
  // setTimeout(() => resolve("Promise 3 is Resolved"), 3000);
  setTimeout(() => reject("Promise 3 is Rejected"), 3000);
});
const promise4 = new Promise(function (resolve, reject) {
  // setTimeout(function () {
  //   resolve("Promise 4 is Resolved");
  // }, 1000);
  setTimeout(function () {
    reject("Promise 4 is Rejected");
  }, 1000);
});
const promise5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 5 is Resolved");
  }, 2000);
  // setTimeout(function () {
  //   reject("Promise 5 is Rejected");
  // }, 2000);
});

Promise.all([promise1, promise2, promise5])
  .then((res) => console.log("Promise.all (Success Case)  ---> ", res))
  .catch((err) => console.log("Promise.all (Success Case)  ---> ", err));
Promise.allSettled([promise1, promise2, promise5])
  .then((res) => console.log("Promise.allSettled (Success Case)  ---> ", res))
  .catch((err) => console.log("Promise.allSettled (Success Case)  ---> ", err));
Promise.race([promise1, promise2, promise3, promise4, promise5])
  .then((res) => console.log("Promise.race (Success Case)  ---> ", res))
  .catch((err) => console.log("Promise.race (Success Case)  ---> ", err));
Promise.any([promise1, promise2, promise3, promise4, promise5])
  .then((res) => console.log("Promise.any (Success Case)  ---> ", res))
  .catch((err) => console.log("Promise.any (Success Case)  ---> ", err));

Promise.all([promise1, promise2, promise3, promise4, promise5])
  .then((res) => console.log("Promise.all (Failure Case)  ---> ", res))
  .catch((err) => console.log("Promise.all (Failure Case)  ---> ", err));
Promise.allSettled([promise1, promise2, promise3, promise4, promise5])
  .then((res) => console.log("Promise.allSettled (Failure Case)  ---> ", res))
  .catch((err) => console.log("Promise.allSettled (Failure Case)  ---> ", err));
Promise.race([promise3, promise4])
  .then((res) => console.log("Promise.race (Failure Case)  ---> ", res))
  .catch((err) => console.log("Promise.race (Failure Case)  ---> ", err));
Promise.any([promise3, promise4])
  .then((res) => console.log("Promise.any (Failure Case)  ---> ", res))
  .catch((err) =>
    console.log(
      "Promise.any (Failure Case)  ---> ",
      err,
      "Array of Errors  ---> ",
      err.errors
    )
  );
