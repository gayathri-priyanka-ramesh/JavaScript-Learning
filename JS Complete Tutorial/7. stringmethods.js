let firstWord = "Hello";
let secondWord = "World";
console.log("FirstWord  ---> ", firstWord);
console.log("SecondWord  ---> ", secondWord);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

// Comcatenation
console.log("Manual Concat  ---> ", firstWord + secondWord + "~");
console.log("Concat Function  ---> ", firstWord.concat("~", secondWord, "~"));
console.log(`Using Backticks  --->  ${firstWord}~${secondWord}`);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

// Append
console.log("Append  ---> ", (firstWord += "~" + secondWord + "~"));
console.log("FirstWord after Appending  ---> ", firstWord);
console.log("SecondWord After Appending  ---> ", secondWord);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// Escape Character -> \
let sentenceSingleInsideDouble = "I won't Quit";
console.log(
  "Single Quote inside Double Quote  ---> ",
  sentenceSingleInsideDouble
);
// let sentenceSingleInsideSingle = 'I won\'t Quit';
let sentenceSingleInsideSingle = "I won't Quit";
console.log(
  "Single Quote inside Single Quote  ---> ",
  sentenceSingleInsideSingle
);
let sentenceDoubleInsideSingle = 'Welcome "Gayu"';
console.log(
  "Double Quote inside Single Quote  ---> ",
  sentenceDoubleInsideSingle
);
// let sentenceDoubleInsideDouble = "Welcome \"Gayu\"";
let sentenceDoubleInsideDouble = 'Welcome "Gayu"';
console.log(
  "Double Quote inside Double Quote  ---> ",
  sentenceDoubleInsideDouble
);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Built-in Functions
console.log("Length of 'World'  ---> ", secondWord.length);
// console.log("Length of 'World'  ---> ", secondWord.length());
console.log("Uppercase Function of 'World'  ---> ", secondWord.toUpperCase);
console.log("Uppercase Function of 'World'  ---> ", secondWord.toUpperCase());
console.log("Lowercase of 'World'  ---> ", secondWord.toLowerCase());
console.log("Index of 'r' in 'World'  ---> ", secondWord.indexOf("r"));
console.log("Index of 'R' in 'World'  ---> ", secondWord.indexOf("R"));
console.log("Index of 'l' in 'Hello'  ---> ", "Hello".indexOf("l"));
console.log("Last Index of 'l' in 'Hello'  ---> ", "Hello".lastIndexOf("l"));
console.log("Last Index of 'l' in 'HelLo'  ---> ", "HelLo".lastIndexOf("l"));
console.log("Character at index 3 in 'World'  ---> ", secondWord.charAt(3));
console.log(
  "ASCII Code of Character at index 1 in 'Hello'  ---> ",
  "Hello".charCodeAt(1)
);
console.log("Character of ASCII Value  --->", String.fromCharCode(65));
console.log(
  "Characters of ASCII Values  --->",
  String.fromCharCode(65, 97, 66, 98, 89, 121, 90, 122)
);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

let sentence = "Welcome to JavaScript Learning";
let sentcont = "012345678901234567890123456789";
console.log("Sentence  ---> ", sentence);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
// Substring
console.log("Substring: start->0 end->undefined  ---> ", sentence.substring(0));
console.log("Substring: start->9 end->undefined  ---> ", sentence.substring(9));
console.log("Substring: start->0 end->9  ---> ", sentence.substring(0, 9));
console.log("Substring: start->9 end->17  ---> ", sentence.substring(9, 17));
// Returns entire string if given negative index
console.log(
  "Substring: start->-7 end->undefined  ---> ",
  sentence.substring(-7)
);
console.log("Substring: start->0 end->-7  ---> ", sentence.substring(0, -7));
// Considers only +ve 'start' and ignores -ve 'end'
console.log("Substring: start->+ve end->-ve  ---> ", sentence.substring(9, -7));
console.log(
  "Substring: start->-ve end->-ve  ---> ",
  sentence.substring(-7, -3)
);
// Automatically takes 'start' as smaller value and 'end' as greater value
console.log("Substring: start->17 end->9  ---> ", sentence.substring(17, 9));
// Returns empty if both indexes are out of bound
console.log(
  "Substring: start->outofbound end->outofbound  ---> ",
  sentence.substring(37, 41)
);
console.log(
  "Substring: start->27 end->outofbound  ---> ",
  sentence.substring(27, 41)
);
console.log(
  "Substring: start->outofbound end->27  ---> ",
  sentence.substring(41, 27)
);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// Slice
console.log("Slice: start->0 end->undefined  ---> ", sentence.slice(0));
console.log("Slice: start->9 end->undefined  ---> ", sentence.slice(9));
console.log("Slice: start->0 end->9  ---> ", sentence.slice(0, 9));
console.log("Slice: start->9 end->17  ---> ", sentence.slice(9, 17));
console.log("Slice: start->-7 end->undefined  ---> ", sentence.slice(-7));
console.log("Slice: start->0 end->-7  ---> ", sentence.slice(0, -7));
console.log("Slice: start->9 end->-7  ---> ", sentence.slice(9, -7));
console.log("Slice: start->-7 end->-3  ---> ", sentence.slice(-7, -3));
// Returns empty if 'start' is greater than 'end'
console.log("Slice: start->17 end->9  ---> ", sentence.slice(17, 9));
// Returns empty if 'start' is -ve and 'end' is +ve
console.log("Slice: start->-7 end->3  ---> ", sentence.slice(-7, 3));
console.log(
  "Slice: start->outofbound end->outofbound  ---> ",
  sentence.slice(37, 41)
);
console.log("Slice: start->27 end->outofbound  ---> ", sentence.slice(27, 41));
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Split
console.log("Split by ' '  --->  " + sentence.split(" "));
console.log("Split by ' '  ---> ", sentence.split(" "));
console.log("Split by ''  --->  " + sentence.split(""));
console.log("Split by ''  ---> ", sentence.split(""));
console.table(sentence.split(" "));
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

const colors = ["Blue", "Red", "Yellow", "Black"];

// Join
console.log(
  "Split by ' ' and join by '~'  ---> ",
  sentence.split(" ").join("~")
);
console.log("Split by '' and join by '~' ---> ", sentence.split("").join("~"));
console.log(colors.join(""));
console.log(colors.join("~"));
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

// Includes
console.log(
  "Is 'JavaScript' in sentence?  ---> ",
  sentence.includes("JavaScript")
);
console.log("Is '~' in sentence?  ---> ", sentence.includes("~"));
console.log("Is 'Red' in colors?  ---> ", colors.includes("Red"));
console.log("Is 'White' in colors?  ---> ", colors.includes("White"));
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

// Replace
console.log(
  "Replace 'Learning' with 'String Methods'  ---> ",
  sentence.replace("Learning", "String Methods")
);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// Trim -> removes leading and trailing white spaces
let sentenceWithSpaces = "  Let's  Learn  JavaScript  ";
let sentcontWithSpaces = "0123456789012345678901234567";
console.log("Sentence before Trim  ---> ", sentenceWithSpaces);
console.log("Length of sentence before Trim  ---> ", sentenceWithSpaces.length);
console.log("Sentence after Trim  ---> ", sentenceWithSpaces.trim());
console.log(
  "Length of sentence after Trim  ---> ",
  sentenceWithSpaces.trim().length
);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

// padStart -> adds leading Characters
console.log(
  "'A' padded with Characters at start to get total lenght of 4  ---> ",
  "A".padStart(4, "~")
);
// padEnd -> adds trailing Characters
console.log(
  "'A' padded with Characters at end to get total lenght of 4  ---> ",
  "A".padEnd(4, "~")
);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Maintaing Long Literals
let passage1 =
  "One, two, three, four, five, " +
  "Once I caught a fish alive, " +
  "Six, seven,           eight, nine, ten, " +
  "Then I let go again.";
console.log(passage1);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
let passage2 =
  "Why did you let it go? \
        Because it bit my finger so. \
Which finger                     did it bite? \
This little finger on the right";
console.log(passage2);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
let passage3 = `A sailor went to sea, sea, sea
To see what he could see,                   see, see
            But all that he could see, see, see
Was the bottom of the deep blue sea, sea, sea!`;
console.log(passage3);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Template Strings
// `${JS Lane}` -> Data in JS Lane is Evaluated
console.log(
  "Expressions are evaluated inside 'backticks' -> 2+3  ---> ",
  `${2 + 3}`
);
console.log("Slice: start->9 end->17  ---> ", `${sentence.slice(9, 17)}`);
console.log("Array  ---> ", `${[1, "two", 3, ["four", 5], "six"]}`);
console.log("Colors  ---> ", `${colors}`);
console.log("Object  ---> ", `${{ property1: "value1", property2: "value2" }}`);
console.log(
  "Ouside JS Lane  ---> ",
  `${console.log("Inside JS Lane  ---> ", {
    property1: "value1",
    property2: "value2",
  })}`
);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
function greet(parameter) {
  return `Hello ${parameter}`;
}
console.log(`Reference of Function inside JS Lane  ---> ${greet}`);
console.log(
  `Execution of Function without passing argument inside JS Lane  ---> ${greet()}`
);
console.log(
  `Execution of Function with passing argument inside JS Lane  ---> ${greet(
    "Gayathri Priyanka"
  )}`
);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// Tagged Templates
console.log(`Hello ${"String"} World ${10} Welcome ${[100, "AAA", true]}`);
console.log`Hello ${"String"} World ${10} Welcome ${[100, "AAA", true]}`;
console.log.bind(9, 4)`Hello ${20}`;
new Function("console.log(arguments)")`Hello ${30}`;

function recursive(strings, ...values) {
  console.log(strings, values);
  return recursive;
}
recursive`Hello ${1 + 2} Three``World ${[1, "A"]} Array``Welcome`;

const person = "Mike";
const age = 28;
function myTag(strings, personExp, ageExp, ...extras) {
  const str0 = strings[0];
  const str1 = strings[1];
  const str2 = strings[2];
  const ageStr = ageExp < 100 ? "youngster" : "centenarian";
  return `${str0}${personExp}${str1}${ageStr}${str2}
   Extas -> ${extras}
   Strings -> ${strings}`;
}
const output = myTag`That ${person} is a ${age}. ${"extra1"}One${"extra2"}Two${"extra3"}Three`;
console.log(output);
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
