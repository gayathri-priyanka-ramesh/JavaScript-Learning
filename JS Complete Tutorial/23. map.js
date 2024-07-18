/*  Map Data Structure -> Store key:value pairs where both can be of any datatype (only strings and symbols in objects)
                         Maintains insertion order (not maintained in objects)
                         Provides built-in methods for easy iteration over its elements 
                         
    Difference between Object & Map
      Object -> Key can be only String or Symbol
                No. of items is determined manually
                Native support for serialization from Object to JSON using 'JSON.stringify()' & parsing from JSON to Object using 'JSON.parse()'
      
      Map    -> Key can be any value like function, object, primitive
                No. of items is determined using 'size' property
                No native support for serialization or parsing
                It is iterable
                Better performance
*/
const map = new Map();
console.log("EmptyMap  ---> ", map);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

const key1 = "String";
const key2 = {};
const key3 = function () {};
const key4 = "Key to be Deleted";
const key5 = "Key not set";
const key6 = [10, 20, 30];
const key7 = "Key to be updated";
const key8 = {};
const key9 = [15, 25, 35, 45];

// Set method -> adds new element or updates existing element
map.set(key1, "StringValue");
map.set(key2, { AAA: 1, 2: "BBB", CCC: 3 });
map.set(key3, () => {
  console.log("Function to be written");
});
map.set(key4, "Value of key to be deleted");
map.set(key6, ["Array", "3 values"]);
map.set(key7, "Initial Value");
console.log("Map Before Update ---> ", map);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

map.set(key7, "Updated Value");
console.log("Map After Update ---> ", map);

const value8 = { DDD: 4, 5: "EEE", FFF: 6 };
const value9 = ["Array", "4 values"];
map.set(key8, value8);
map.set(key9, value9);
console.log("Map  ---> ", map);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

console.log("Map Keys  ---> ", map.keys());
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

console.log("Map Values  ---> ", map.values());
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

console.log("Map Values  ---> ", map.entries());
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

console.log("Delete Key4  ---> ", map.delete(key4));
console.log("Delete Key5  ---> ", map.delete(key5));
console.log("Map After Delete ---> ", map);
console.log("Map Size ---> ", map.size);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// Get method -> retrieves the value of the key passed ( map[key] gives 'undefined')
console.log("map[key1]  --->", map[key1]);
console.log("Value of key1  --->", map.get(key1));
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

// Iterating through map
for (let [key, value] of map) {
  console.log(`Key -> ${key}  ---  Value -> ${value}`);
}
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

for (let entry of map.entries()) {
  console.log("Entry  ---> ", entry);
}
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

for (let key of map.keys()) {
  console.log(`Key -> ${key}  ---  Value -> ${map.get(key)}`);
}
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

for (let value of map.values()) {
  console.log(`Key -> ${getByValue(map, value)}  ---  Value -> ${value}`);
}
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

function getByValue(map, searchValue) {
  for (let [a, b] of map.entries()) {
    if (b === searchValue) {
      // console.log(`Key -> ${a}  ---  Value -> ${b}`);
      return a;
    }
  }
}
// getByValue(map, "StringValue");
// getByValue(map, { AAA: 1, 2: "BBB", CCC: 3 });
// getByValue(map, "Function to be written");
// getByValue(map, ["Array", "3 values"]);
// getByValue(map, "Updated Value");
// getByValue(map, value8);
// getByValue(map, value9);

console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);
