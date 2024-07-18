/* Need for Debouncing & Throttling -> Performance optimization in WebApps (Large no. of API calls to network will freeze the browser)
                                       Rate limiting the Function Call (limiting the rate of execution of function)
          Customer facing webapps must be very performant, not freeze anytime while user does anything on the browser
          eg: Lazy loading, Scroll Events, Button Click, Window resize, Parallax Scrolling

    Debouncing -> Make a function call only if the difference in time between the 2 consecutive occurence of events (calls of Debounce Function) is greater than or equal to the delay
                  Considers time delay between occurence of 2 consecutive events (calls the function when the delay expires and no event occurs inbetween)
                  Interested only in the final state at the end of wait time
    
    Throttling -> First function call happens when the event occurs for first time and successive function call will happen only after the delay has expired ignoring all the events occured inbetween
                  Considers time delay between 2 concesutive function calls (calls the function at a certain interval)
                  Interested in intermediate state at regular interval

    Working: Decorator functions that adds a special functionality to the passed function and returns it
             Takes a method and returns a better method which makes only necessary API calls
             Takes 2 parameters function and delay
             Doesn't allow the function to make unnecessary function calls again and again
*/

let count = 0;
const fetchData = (element) => {
  // Makes network calls to fetch data
  console.log("Fetching Data...  ---  Count:", ++count);
  console.log("Text Input  --->  ", element.value);
};

let debounceCnt = 0;
const makeDebounceFetchData = function (func, delay) {
  console.log("Debounce Made Initially", debounceCnt);
  // Defined outside of return function so as to clear it if the timer is already set and start the new timer (should not be redefined again and again inside the returning function as it cannot be cleared before setting)
  let timer;
  // Forms a Closure with 'timer' definition assuming 'timer' is always present either it is to be cleared or set again
  return function () {
    console.log("Debounce Count", ++debounceCnt);
    let context = this,
      args = arguments;
    // As no arguments are passed during the calling of 'fetchDataDebounce', args contain only default value
    console.log("Context  ---> ", context, "\nArgs  ---> ", args);
    console.log("Timer before clear  ---> ", timer);
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(context, args);
      // func();
    }, delay);
  };
};
// const fetchDataDebounce = makeDebounceFetchData(fetchData, 1000);

let throttleCnt = 0;
const makeThrottleFetchData = function (func, delay) {
  console.log("Throttle Made Initially", throttleCnt);
  // Defined outside of return function so as to call 'func' only if true (should not be reinitialized again and again inside the returning function as it will call on each occurence of event)
  let timerExpired = true;
  // Forms a Closure with 'timerExpired' so that the time between the successive function calls is monitored
  // return function (target) {
  // 'target' need not be mentioned in returned function as it is handled in 'arguments'
  return function () {
    console.log("Throttle Count", ++throttleCnt);
    // console.log("Target", target);
    let context = this,
      args = arguments;
    console.log("Context  ---> ", context, "\nArgs  ---> ", args);
    if (timerExpired) {
      func.apply(context, args);
      // func();
      // Resets the time once the function call is made
      timerExpired = false;
      setTimeout(() => {
        timerExpired = true;
      }, delay);
    }
  };
};
// const fetchDataThrottle = makeThrottleFetchData(fetchData, 1000);

const clickLog = (e, cnt = 0) => {
  console.log("Button Clicked");
  console.log("ID:", e.target.id);
  console.log("Click Count:", cnt);
};

// 'debounceClickLog' & 'throttleClickLog' are decorator functions as it adds a special behaviour to the passed function
const debounceClickLog = (func, delay) => {
  let timer;
  console.log("'timer' when Debounce Called Initially:", timer);
  // 'clickCount' is private to 'debounceClickLog' and cannot be manipulated aniwhere outside
  let clickCount = 0;
  // Without '...args' the argumnets of 'func' cannot be passed
  return (...args) => {
    // console.log("args  --->  ", args);
    console.log("...args  --->  ", ...args);
    // This forms a Closure with 'timer' present in its lexical scope even after parent function is executed
    console.log("Previous timer:", timer);
    clickCount++;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => func(...args, clickCount), delay);
  };
};

const throttleClickLog = (func, delay) => {
  let lastClickTime = 0;
  console.log("'lastClickTime' when Throttle Called Initially:", lastClickTime);
  let clickCount = 0;
  // 'event' may or maynot be passed inside function statements as it has its binding with 'this' and 'arguments'
  // return function () {
  // return function (event) {
  // Arrow functions don't have their own bindings to 'this' or 'arguments'
  // Uncaught ReferenceError: arguments is not defined at HTMLButtonElement.<anonymous>
  // return () => {
  return (event) => {
    // let context = this,
    //   args = arguments;
    // console.log("Context  ---> ", context, "\nArgs  ---> ", args);
    console.log("Event  --->  ", event);
    const currentClickTime = new Date().getTime();
    clickCount++;
    // This forms a Closure with 'lastClickTime' and 'clickCount' present in its lexical scope which can be accessed & modified
    const timerNotExpired = currentClickTime - lastClickTime < delay;
    if (timerNotExpired) return;
    // Update 'lastClickTime' with 'currentClickTime'
    lastClickTime = currentClickTime;
    // func();
    // func(...args, clickCount);
    func(event, clickCount);
  };
};

// Generic Debounce
const makeDebounce = (func, delay) => {
  let timer;
  let eventCount = 0;
  console.log("Debounce Called Immediately");
  console.log("Timer:", timer);
  console.log("Event Count:", eventCount);
  return (event) => {
    eventCount++;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => func(event, eventCount), delay);
  };
};
// Generic Throttle
const makeThrottle = (func, delay) => {
  let lastEventTime = 0;
  let eventCount = 0;
  console.log("Throttle Called Immediately");
  console.log("Last Event Time:", lastEventTime);
  console.log("Event Count:", eventCount);
  return (...args) => {
    eventCount++;
    const currentEventTime = new Date().getTime();
    if (currentEventTime - lastEventTime < delay) return;
    lastEventTime = currentEventTime;
    func(...args, eventCount);
  };
};

function scrollTracker(scrollEvent, scrollCount) {
  console.log("Page Scrolled");
  console.log("Scroll Event:", scrollEvent.timeStamp);
  console.log("Scroll Count:", scrollCount);
}

const initApp = () => {
  // document
  //   .querySelector("#conventionalButton")
  //   .addEventListener("click", clickLog);
  // document
  //   .querySelector("#withoutDebounceButton")
  //   .addEventListener("click", (event) => {
  //     clickLog(event);
  //     event.target.disabled = true;
  //     setTimeout(() => (event.target.disabled = false), 2000);
  //   });
  // document
  //   .querySelector("#debounceButton")
  //   .addEventListener("click", debounceClickLog(clickLog, 2000));
  // document
  //   .querySelector("#throttleButton")
  //   .addEventListener("click", throttleClickLog(clickLog, 2000));
  // document.addEventListener("scroll", scrollTracker);
  // document.addEventListener("scroll", makeDebounce(scrollTracker, 3000));
  // document.addEventListener("scroll", makeThrottle(scrollTracker, 3000));
};

// 'debounceClickLog' & 'throttleClickLog' are called immediately when the DOM Content is Loaded
document.addEventListener("DOMContentLoaded", initApp);
