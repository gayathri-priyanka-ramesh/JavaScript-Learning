// Destructuring -> Unpack values from data structures into seperate distict variables
// Array Destructuring -> Order matters and Name doesn't matter
const colors = ["yellow", "red", "blue", "black"];
const [March17, April8, May23, December11, September22, October28 = "Happy"] =
  colors;
console.log("March17  ---> ", March17);
console.log("December11  ---> ", December11);
console.log("September22  ---> ", September22);
console.log("October28  ---> ", October28);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

// Assigning rest of array to a single variable
const [name1, age1, ...data1] = [
  "Gayathri Priyanaka",
  21,
  ["Salem", 636006],
  "Web Developer",
];
console.log("Name ->", name1, " Age ->", age1, " Data ->", data1);
const [name2, age2, ...data2] = [
  "Gayathri Priyanaka",
  21,
  ...["Salem", 636006],
  "Web Developer",
];
console.log("Name ->", name2, " Age ->", age2, " Data ->", data2);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

// With 'return' values of a function
function destructure(parameter) {
  return [parameter, "Result1", "Result2", "Result3", "Result4", "Result5"];
}
let argument, answer1, answer2, answer3, answer5, answer6;

[argument, answer1, answer2, answer3, , answer5, answer6] =
  destructure("Argument");
console.log("Destructured Result  ---> ", [
  argument,
  answer1,
  answer2,
  answer3,
  ,
  answer5,
  answer6,
]);
console.log(
  `Arg -> ${argument}, Ans1 -> ${answer1}, Ans2 -> ${answer2}, Ans3 -> ${answer3}, Result4 is Ignored by adding extra comma, Ans5 -> ${answer5}, Ans6 -> ${answer6}`
);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Object Destructuring -> Name matters and Order doesn't matter
const keyboard = {
  numbers: {
    One: 1,
    Two: 2,
  },
  smallLetters: ["a", "b", "c"],
  capLetters: "A",
  operators: ["+", "-", "*", "/"],
};
const {
  smallLetters,
  letters,
  operators: arithmeticOperators,
  numbers,
} = keyboard;
console.log(
  "SmallLetters ->",
  smallLetters,
  " Letters ->",
  letters,
  " Numbers ->",
  numbers,
  " CapLetters is not destructured,",
  "Operators is labeled as 'ArithmeticOperators' and can only be accessed with label ->",
  arithmeticOperators
);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

// Assigning rest of Property:Values to a single variable
let { a, b, c, ...others } = { a: 97, b: 98, c: 99, d: 100, e: 101, f: 102 };
console.log(`ASCII of a -> ${a}, b -> ${b}, c -> ${c}, others -> ${others}`);
console.log("Others ->", others);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Function Destructuring
const object = {
  Property1: {
    One: 1,
    Two: 2,
  },
  Property2: ["a", "b", "c"],
  Property3: "A",
  Property4: ["+", "-", "*", "/"],
};
function objectInfo(object) {
  console.log("Property1 -> ", object.Property1);
  return `Property2 -> ${object.Property2} Property1 -> ${object.Property1} Property3 -> ${object.Property3} Property4 -> ${object.Property4}`;
}

console.log("Without Destructuring  ---> ", objectInfo(object));
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

function objectInfoDestructuring({
  Property2,
  Property5,
  Property4: labelledProperty4,
  Property1,
}) {
  console.log("Property1 -> ", Property1);
  return `Property2 -> ${Property2}, Property1 -> ${Property1}, Property3 is not destructured, Property4 is labeled as 'labelledProperty4' and can only be accessed with label -> ${labelledProperty4}, Property5 -> ${Property5}`;
}
console.log("With Destructuring  ---> ", objectInfoDestructuring(object));
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

/* This is used inside the function (Commented as it is done already)
const keyboard = {
  numbers: {
    One: 1,
    Two: 2,
  },
  smallLetters: ["a", "b", "c"],
  capLetters: "A",
  operators: ["+", "-", "*", "/"],
};
const {
  smallLetters,
  letters,
  operators: arithmeticOperators,
  numbers,
} = keyboard; */
function keyboardInfoDestructuring(keyboard) {
  console.log("Keyboard -> ", keyboard);
  console.log("keyboard.numbers -> ", keyboard.numbers);
  // return keyboard;
  console.log("numbers -> ", numbers);
  return `smallLetters -> ${smallLetters}, numbers -> ${numbers}, capLetters is not destructured, operators is labeled as 'arithmeticOperators' and can only be accessed with label -> ${arithmeticOperators}, letters -> ${letters}`;
}
console.log("With Destructuring  ---> ", keyboardInfoDestructuring(keyboard));
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

let options = {
  title: "Menu",
  items: ["item1", "item2"],
};
function showMenu({ title, quantity: q = 5, price: p = 10, items: [a, b] }) {
  return `Title -> ${title}, Quantity -> ${q}, Price -> ${p}, Item1 -> ${a}, Item2 -> ${b}`;
}
console.log("Destructuring Array inside an Object  ---> ", showMenu(options));
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// Nested Destructuring
const animals = [
  {
    animalName: "Cat",
    sound: "Meows",
    color: ["Brown", "Black"],
    family: { domestic: "Kitty", wild: ["Lion", "Tiger", "Panther"] },
  },
  {
    animalName: "Dog",
    sound: "Barks",
    color: ["White", "Brown"],
    family: { domestic: "Pup", wild: ["Wolf", "Fox"] },
  },
];
const [
  ,
  {
    sound: dogSound,
    family: { domesticFam, wild },
    color: [, brownColor],
    animalName,
    color,
    family: dogFamily,
  },
] = animals;
console.log(
  `Cat is ignored, Dog is destructured as Name -> ${animalName}, Sound -> ${dogSound}, Color -> 1st color is ignored and 2nd color is ${brownColor}, Family -> Domestic is ${domesticFam} and Wild are ${wild}`
);
console.log("Dog Colors  ---> ", color.join("~"));
console.log("DogFamily  ---> ", dogFamily);
console.log("DogFamilyDomestic  ---> ", domesticFam);
console.log("DogFamily Domestic  ---> ", dogFamily.domestic);
console.log("DogFamilyWild ---> ", wild);
console.log("DogFamilyWild[0] ---> ", wild[0]);
console.log("DogFamilyWild[1] ---> ", wild[1]);
console.log("DogFamily Wild ---> ", dogFamily.wild);
console.log("DogFamily Wild Joined  ---> ", dogFamily.wild.join("~"));
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);
