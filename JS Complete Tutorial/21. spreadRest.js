// Spread Operator -> Expands iterables into individual elements, Makes Shallow copies of JS Objects
// With Functions
function colorsSpread(yellow, red, blue, black) {
  return `December -> ${black}, May -> ${red}, April -> ${blue}, March -> ${yellow}`;
}
const colors = ["yellow", "red", "blue", "black"];
console.log("Without Arguments  ---> ", colorsSpread());
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("Without Spread Operator  ---> ", colorsSpread(colors));
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("With Spread Operator  ---> ", colorsSpread(...colors));
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// With Objects
const person = {
  personName: {
    firstName: "Gayathri",
    middleName: "Priyanka",
    lastName: "Ramesh",
  },
  age: 21,
  location: ["Salem", 636006],
};
console.log("Person  ---> ", person);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

console.log("~~~~~~~~~~Shallow Copy~~~~~~~~~~");
const shallowClonePerson = person;
console.log("Clone of Person  ---> ", shallowClonePerson);
shallowClonePerson.age = 22;
shallowClonePerson.personName.firstName = "New Name";
console.log(
  "shallowClonePerson === person  ---> ",
  shallowClonePerson === person
);
console.log("Clone of Person (After Modification)  ---> ", shallowClonePerson);
console.log("Person (After Modification)  ---> ", person);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

console.log("~~~~~~~~~~Deep Copy~~~~~~~~~~");
const deepClonePerson = { ...person };
console.log("Clone of Person  ---> ", deepClonePerson);
deepClonePerson.age = 22;
deepClonePerson.personName.firstName = "New Name";
console.log("deepClonePerson === person  ---> ", deepClonePerson === person);
console.log("Clone of Person (After Modification)  ---> ", deepClonePerson);
console.log("Person (After Modification)  ---> ", person);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

const personDetailsAddedNested = {
  person,
  isWebDeveloper: true,
  111222: "fav date",
};
console.log("Person Details Added by Nesting  ---> ", personDetailsAddedNested);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

const personDetailsAdded = {
  ...person,
  isWebDeveloper: true,
  111222: "fav date",
};
console.log("Person Details Added  ---> ", personDetailsAdded);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// With Arrays
const days = ["March17", "April8", "May23", "December11"];
const happy = [...days, "September22", "October28", colors];
console.log("Happy  ---> ", happy);
// const happyColors = [...days, "September22", "October28", ...colors];
// console.log("HappyColors  ---> ", happyColors);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Rest Operator -> Function accepts indefinite number of arguments, Represent variadic functions as an Array
// Rest parameter must be the last parameter of the function -> stores all the passed arguments in an array
function user(name, age, ...data) {
  console.log("Data -> ", data);
  return `Name -> ${name}, Age -> ${age}, Other Data -> ${data}`;
}
console.log("Without arguments  ---> ", user());
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("With one argument  ---> ", user("Gayathri Priyanaka"));
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log(
  "With multiple arguments  ---> ",
  user(
    "Gayathri Priyanaka",
    21,
    ["Salem", 636006],
    "Web Developer",
    person,
    colors
  )
);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log(
  "With multiple arguments and spread  ---> ",
  user(
    "Gayathri Priyanaka",
    21,
    ...["Salem", 636006],
    "Web Developer",
    // Object is not iterable and cannot be passed as function arguments to a function with 'rest' parameter
    person,
    ...colors
  )
);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);
