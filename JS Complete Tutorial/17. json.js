// JSON -> JavaScript Object Notation
// JS Object
const jsObject = {
  // [""] are removed automatically in JS File
  comment:
    'It is similar to JS Object, but [""] are mandate in JSON Objects, comments are not allowed in JSON File and can be given as a Key:Value pair inside the JSON Object ',

  personName: {
    firstName: "Gayathri",
    middleName: "Priyanka",
    lastName: "Ramesh",
  },
  age: 21,
  location: ["Salem", 636006],
  isWebDeveloper: true,
  111222: "fav date",
};

console.log("JS Object  ---> ", jsObject);
console.log("Type of JS Object  ---> ", typeof jsObject);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

// Stringify -> Converts JS Object to JSON Object
const jsonObject = JSON.stringify(jsObject);
console.log("Stringifying JS Object  ---> ", jsonObject);
console.log(
  "Type of Stringified JS Object  ---> ",
  typeof JSON.stringify(jsObject)
);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

// Parse -> Reverts JSON String back to JS Object
console.log("Parsed JSON String  ---> ", JSON.parse(jsonObject));
console.log(
  "Type of Parsed JSON String  ---> ",
  typeof JSON.parse(JSON.stringify(jsObject))
);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);
