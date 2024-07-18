// Set -> stores only unique values
let set = new Set();
console.log("Empty Set  ---> ", set);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

const initialValues = [11, 22, 33, 22, 33, 44, 33, 55];
set = new Set(initialValues);
console.log("Set with Initial Values  ---> ", set);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

const updatedValues = [10, 20, 30, 20, 30, 40, 30, 50];
set = new Set(updatedValues);
console.log("Set with Updated Values  ---> ", set);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

console.log("Add 'AAA'  --->", set.add("AAA"));
console.log("Add 'BBB'  --->", set.add("BBB"));
console.log("Add 'CCC'  --->", set.add("CCC"));
console.log("Add 'BBB'  --->", set.add("BBB"));
console.log("Add 'CCC'  --->", set.add("CCC"));
console.log("Add 'DDD'  --->", set.add("DDD"));
console.log("Add 'CCC'  --->", set.add("CCC"));
console.log("Add 'EEE'  --->", set.add("EEE"));
console.log("Set after Adding Values  ---> ", set);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

console.log("Does set has 'AAA'  ---> ", set.has("AAA"));
console.log("Does set has '40'  ---> ", set.has("40"));
console.log("Does set has 40  ---> ", set.has(40));
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

console.log("Delete 40  --->", set.delete(40));
console.log("Delete 44  --->", set.delete(44));
console.log("Set after Deleting Values  ---> ", set);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

for (let i of set) {
  console.log("Element of set ->", i);
}
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

console.log("Clearing Set  ---> ", set.clear());
console.log("Set after Clearing  ---> ", set);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);
