// Looping
// While Loop - Entry Check
let i = 1;
console.log("'i' before starting 'while' loop", i);
while (i <= 5) {
  console.log("'i' inside 'while' loop", i);
  i++;
}
console.log("'i' after completing 'while' loop", i);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// Do While Loop - Exit Check
let tableNumber = 2,
  iteration = 5,
  startNumber = 1;
do {
  console.log("2 *", startNumber, "=", tableNumber * startNumber);
  startNumber++;
} while (startNumber <= iteration);
// } while (null);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// For Loop - Entry Check
let array = [];
let j;
console.log("'j' before startting 'for' loop", j);
console.log("'array' before startting 'for' loop", array);
for (j = 2; j <= 10; j += 2) {
  console.log("'j' inside 'for' loop", j);
  array.push(j);
  console.log("'array' inside 'for' loop", array);
}
console.log("'j' after completing 'for' loop", j);
console.log("'array' after completing 'for' loop", array);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// Nested For Loop - Entry Check
let matrix = [];
let x,
  y,
  z = 1;
console.log("'x' before startting 'nested for' loop", x);
console.log("'y' before startting 'nested for' loop", y);
console.log("'matrix' before stating outer 'for' loop", matrix);
for (x = 0; x < 3; x++) {
  console.log("Row", x, "~~~~~~~~~~~~~~~~~~~~");
  matrix.push([]);
  console.log("'matrix' befor starting inner 'for' loop", matrix);
  for (y = 0; y < 3; y++) {
    console.log("Column", y);
    matrix[x].push(z++);
    console.log("'matrix' inside inner 'for' loop", matrix);
  }
  console.log("'matrix' after completing inner 'for' loop", matrix);
}
console.log("'x' after completing 'nested for' loop", x);
console.log("'y' after completing 'nested for' loop", y);
console.log("'matrix' after completing outer 'for' loop", matrix);
console.table(matrix);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// For Of Loop (For Each Loop) - Iterable Objects like Arrays
for (let row of matrix) {
  console.log("Matrix Row:", row);
  console.table(row);
}
console.log("'row' outside the loop is undefined");
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
// For Of Loop (For Each Loop) - String
const string = "Hello World";
for (let char of string) {
  console.log("Charater  ---> ", char);
}
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// For In Loop - Used to get Index of iterable objects (i.e) keys
for (let row in matrix) {
  console.log("Matrix Row Index:", row);
  console.log("Matrix Row Value:", matrix[row]);
}
console.log("'row' outside the loop is undefined");
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
// For In Loop - String
for (let char in string) {
  console.log("Charater Index  ---> ", char, " Character  ---> ", string[char]);
}
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// For In Loop - Non-iterable Objects like Key Value Pairs which doesn't work with 'For Of' loop
let user = {
  userName: "Gayathri Priyanka",
  age: 21,
  place: "Salem",
};
for (let key in user) {
  console.log("Key:", key, " - Value:", user[key]);
}
let userArrayKeys = Object.keys(user);
console.table(userArrayKeys);
let userArrayValues = Object.values(user);
console.table(userArrayValues);
for (let keys of userArrayKeys) {
  console.log(keys);
}
for (let values of userArrayValues) {
  console.log(values);
}
for (let keyValue = 0; keyValue < userArrayKeys.length; keyValue++) {
  // console.log(
  //   "Key:",
  //   userArrayKeys[keyValue],
  //   " - Value:",
  //   userArrayValues[keyValue]
  // );
  console.log(
    "Key:",
    userArrayKeys[keyValue],
    " - Value:",
    user[userArrayKeys[keyValue]]
  );
}
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Jump Statements - Terminates the inner loop
// Break
let a = 1;
console.log("'a' before starting 'while' loop", a);
while (a <= 10) {
  console.log("'a' inside 'while' loop", a++);
  if (a == 5) break;
}
console.log("'a' after completing 'while' loop", a);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// Continue
let b = 1;
console.log("'b' before starting 'while' loop", b);
while (b <= 10) {
  console.log("'b' inside 'while' loop", b++);
  if (b % 2 != 0) continue;
  console.log("'b' inside 'while' loop after 'if' for odd values of 'b'");
}
console.log("'b' after completing 'while' loop", b);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Label Block Statement
let names = [
  ["A1", "B1", "A2"],
  ["C1", "B2", "D1"],
  ["D2", "A3", "C2"],
];
console.table(names);
// First Occurance of member with 'A' in each row
for (let namesRow of names) {
  console.log("namesRow", namesRow);
  for (let member of namesRow) {
    console.log("member", member);
    if (member.startsWith("A")) {
      console.log("First Occurance of member with 'A':", member);
      break;
    }
  }
}
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
// First Occurance of member with 'D' in matrix
outer: for (let namesRow of names) {
  console.log("namesRow", namesRow);
  for (let member of namesRow) {
    console.log("member", member);
    if (member.startsWith("D")) {
      console.log("First Occurance of member with 'D':", member);
      // break;
      break outer;
    }
  }
}
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
