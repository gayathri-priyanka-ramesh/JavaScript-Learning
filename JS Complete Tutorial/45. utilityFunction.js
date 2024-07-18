/* Utility Functions -> Abstract functions that can be used in many applications (Time Savers)
                        Not coupled to a data model or specific interface 

        Benefits -> Add additional functionality not built-in to JS
                    Reduce tedious typind down to a simple function call

        Usage -> Kept in their own module and imported
?                       import { properCase, log } from "utils.js";
                 Defined in a utility class as static methods to call upon without creating an instance of that class (Eg: 'Math.random()', 'JSON.stringify()')
?                       class Utils{
?                           static properCase(){...}
?                       }
?                       Utils.properCase()
*/

// ProperCase (Capitalize)
const properCase = (string) =>
  `${string[0].toUpperCase()}${string.slice(1).toLowerCase()}`;

// Capitalize Each Word
const capitalizeEachWord = (string) => {
  const words = string.split(" ");
  const capitalizedWords = words.map((word) => properCase(word));
  return capitalizedWords.join(" ");
};

// Log
const log = (content) => console.log(content);

// DOM Selector with optional scope
const select = (selector, scope) => (scope || document).querySelector(selector);

// Add Class with optional query name
const addClass = (selector, className, scope) => {
  select(selector).classList.add(className);
};

// addEventListenter
const listen = (target, event, callback, capture = false) =>
  // '!!' insist only a boolean value
  target.addEventListener(event, callback, !!capture);

// Event Target
const eventLog = (e) => log(e.target);

// Sanitize Input
const sanitizeInput = (inputValue) => {
  const div = document.createElement("div");
  div.textContent = inputValue;
  return div.innerHTML;
};

// Add Class to an HTML Element
const createElement = (tag, className) => {
  const element = document.createElement(tag);
  if (className) element.classList.add(className);
  return element;
};

// Delete all contents
const deleteChildElements = (parentElement) => {
  let child = parentElement.lastElementChild;
  while (child) {
    parentElement.removeChild(child);
    child = parentElement.lastElementChild;
  }
};

// Check for iOS
const isIOS = () => {
  return (
    (/iPan|iPhone|iPod/.test(navigator.platform) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)) &&
    !window.MSStream
    //   MSSTream to avoid IE11
  );
};

// Get parameter by name from URL
const getParameterValue = (paramName, url) => {
  if (!url) url = window.location.href;
  const regex = new RegExp(`[?&]${paramName}(=([^&#]*))`);
  const results = regex.exec(url);
  console.log("Results: ", results);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
};

log(properCase("gAyAtHrI"));
log(properCase("gAyAtHrI pRiYaNkA"));
log(capitalizeEachWord("gAyAtHrI pRiYaNkA"));
log(select("h1"));
listen(select("h2"), "click", eventLog);
listen(select("h2"), "click", eventLog, true);
addClass("body", "addedClass");
log(
  sanitizeInput(
    '<script>let divCntBodyStart = document.getElementsByTagName("div").length;document.write("Div Count from BodyStart  ---> ", divCntBodyStart);</script>'
  )
);
const body = select("body");
log(body.appendChild(createElement("p", "classAdded")));
// deleteChildElements(body);
log(body);
log(isIOS());
const PARAM_TO_EXTRACT = "paramOne";
const URL =
  "https://www.testURL.com/?paramOne=first+parameter&paramTwo=Second+Parameter";
log(getParameterValue(PARAM_TO_EXTRACT, URL));
log(getParameterValue("paramTwo", URL));
