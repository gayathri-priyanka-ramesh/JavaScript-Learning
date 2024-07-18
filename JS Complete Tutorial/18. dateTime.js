/* Date() -> Day Mon DD YYYY HH:MM:SS GMT+0530 (India Standard Time)
             Day -> Sun-0 to Sat-6
             Mon -> Jan-0 to Dec-11 */

// User-defined Date -> new Date(YYYY, Mon, DD, HH, MM, SS, ms)
console.log("User-defined Date  --->", new Date(2021, 2, 17, 9, 30, 11));
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

const currentDate = new Date();
console.log("Current Date  ---> ", currentDate);
console.log("Type of Date  ---> ", typeof currentDate);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

// Extracting Parts
console.log("Current Year  ---> ", currentDate.getFullYear());
console.log("Current Month ---> ", currentDate.getMonth());
console.log("Current Day Count ---> ", currentDate.getDate());
console.log("Current Day ---> ", currentDate.getDay());
console.log("Current Hour ---> ", currentDate.getHours());
console.log("Current Minute ---> ", currentDate.getMinutes());
console.log("Current Second ---> ", currentDate.getSeconds());
console.log("Current Millisecond ---> ", currentDate.getSeconds());
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

// Formats of representing Date
console.log("Date String  ---> ", currentDate.toDateString());
console.log("ISO String  ---> ", currentDate.toISOString());
console.log("JSON String  ---> ", currentDate.toJSON());
console.log("Locale String  ---> ", currentDate.toLocaleString());
console.log("Locale Date String  ---> ", currentDate.toLocaleDateString());
console.log("Locale Time String  ---> ", currentDate.toLocaleTimeString());
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

// Setting and Getting Date
const nextDay = new Date();
nextDay.setDate(nextDay.getDate() + 3);
console.log("Next Date  ---> ", nextDay);
console.log("Next Date's Year  ---> ", nextDay.getFullYear());
console.log("Next Date's Month ---> ", nextDay.getMonth());
console.log("Next Date's Day Count ---> ", nextDay.getDate());
console.log("Next Date's Day ---> ", nextDay.getDay());
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);
