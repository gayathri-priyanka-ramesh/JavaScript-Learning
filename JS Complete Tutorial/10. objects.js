// Objects -> Strores a data in a key:value (label-value or property-value) pairs
const object = {};
console.log("Object  ---> ", object);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
const person = {
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
console.log("Person  ---> ", person);
console.log("Length of 'person'  ---> ", person.length);
console.log("Type of 'person'  ---> ", typeof person);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// Accessing Obejcts
// . notaion
console.log("'objectName.propertyName' notation");
console.log(
  "Value of 'personName' property in 'person'  ---> ",
  person.personName
);
console.log("Value of 'age' property in 'person'  ---> ", person.age);
console.log("Value of 'location' property in 'person'  ---> ", person.location);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

// [] notation -> mandate to give propertyName within quotes else it shows propertyName not defined
console.log("'objectName[\"propertyName\"]' notation");
console.log(
  "Value of 'personName' property in 'person'  ---> ",
  person["personName"]
);
console.log("Value of 'age' property in 'person'  ---> ", person["age"]);
console.log(
  "Value of 'location' property in 'person'  ---> ",
  person["location"]
);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

// Choice of notation
// objectName.propertyName -> cannot be used if propertyName starts with number
// console.log("Value of '111222' property in 'person'  ---> ", person.111222);
console.log("Value of '111222' property in 'person'  ---> ", person["111222"]);
// objectName[propertyName] -> quotes can be omitted if propertyName starts with number
console.log("Value of '111222' property in 'person'  ---> ", person[111222]);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// Adding property-value pairs
console.log(
  "Adds new property with value and returns the added value  ---> ",
  (person.favColor = "Red")
);
console.log("Person after adding 'favColor'  ---> ", person);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

// Modify property-value pairs
console.log(
  "Modifies existing property with new value and returns the new value  ---> ",
  (person.favColor = "Red~Blue")
);
console.log("Person after modifying 'favColor'  ---> ", person);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

// Deleting property-value pairs
console.log(
  "Deletes existing property with value and returns true  ---> ",
  delete person.isWebDeveloper
);
console.log("Person after deleting 'isWebDeveloper'", person);
console.log("Returns true  ---> ", delete person.notavailable);
console.log("Person  ---> ", person);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);
