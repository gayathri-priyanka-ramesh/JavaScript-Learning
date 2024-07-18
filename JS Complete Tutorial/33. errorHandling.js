/* Error Handling -> Implemented using 'try' and 'catch' reserved keywords
                     Used to handle unexpected errors that may occur during program execution
                     Enables to catch and handle errors preventing from crashing entire application */
function parseJSON(jsonString) {
  try {
    const paresedData = JSON.parse(jsonString);
    return paresedData;
  } catch (error) {
    console.error("An error occured while parsing JSON:", error.message);
  } finally {
    console.log("Finally Block --- JSON String -> ", jsonString);
  }
}

const validJSON =
  '{"name":"Gayathri Priyanka",\
    "age":21}';
const validJSONResult = parseJSON(validJSON);
console.log("Parsed JSON  ---> ", validJSONResult);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

const invalidJSON =
  '{"name":"Gayathri Priyanka",\
    "age":21,}';
const invalidJSONResult = parseJSON(invalidJSON);
console.log("Parsed JSON  ---> ", invalidJSONResult);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);
