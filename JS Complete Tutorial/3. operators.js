// Operators
// Arithmetic ->  +  -  *  /  %  **
var num = 5;
var undefinedVariable;
console.log("num + undefinedVariable  ---> ", num + undefinedVariable);
var preFixVariable = 10;
// PreFix-Increment ->  ++a
console.log(
  "preFixVariable (Before) =",
  preFixVariable,
  " --->  preFixIncrement =",
  ++preFixVariable,
  " --->  preFixVariable (After) =",
  preFixVariable
);
// PreFix-Decrement ->  --a
console.log(
  "preFixVariable (Before) =",
  preFixVariable,
  " --->  preFixDecrement =",
  --preFixVariable,
  " --->  preFixVariable (After) =",
  preFixVariable
);
var postFixVariable = 10;
// PostFix-Increment ->  a++
console.log(
  "postFixVariable (Before) =",
  postFixVariable,
  " --->  postFixIncrement =",
  postFixVariable++,
  " --->  postFixVariable (After) =",
  postFixVariable
);
// PostFix-Decrement ->  a--
console.log(
  "postFixVariable (Before) =",
  postFixVariable,
  " --->  postFixDecrement =",
  postFixVariable--,
  " --->  postFixVariable (After) =",
  postFixVariable
);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// Assignment ->  =  +=  -=  *=  /=  %=  **=
/* Comparison (of values) ->  Relational ->  >  >=  <  <=  
                              Equality   ->  ==   !=   (Lose Equality -> irresepective of data type)
                                             ===  !==  (Identity or Strict Equality -> compares the data type also) */
console.log("5==6 ---> ", 5 == 6);
console.log("5==5 ---> ", 5 == 5);
console.log("5=='5' ---> ", 5 == "5");
console.log("5==='5' ---> ", 5 === "5");
console.log("5!=6 ---> ", 5 != 6);
console.log("5!=5 ---> ", 5 != 5);
console.log("5!='5' ---> ", 5 != "5");
console.log("5!=='5' ---> ", 5 !== "5");
console.log("0==false --->", 0 == false);
console.log("0===false --->", 0 === false);
console.log("''==false --->", "" == false);
console.log("''===false --->", "" === false);
console.log(
  "new String('Hello')=='Hello' --->",
  new String("Hello") == "Hello"
);
console.log(
  "new String('Hello')==='Hello' --->",
  new String("Hello") === "Hello"
);
console.log("null==undefined --->", null == undefined);
console.log("null===undefined --->", null === undefined);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// Logical ->  &&  ||  !
// Conditional (Ternary) -> condition?true-statement:false-statement
// Shorter way to write 'if-else' statements
var ternaryExample =
  1 == true ? "1 is equal to true" : "1 is not equal to true";
console.log(ternaryExample);
function welcomeNullHandled(user) {
  const userName = user ? user : "User";
  console.log("Parameter:", user, "---> Welcome", userName);
}
welcomeNullHandled("Gayu");
welcomeNullHandled();
welcomeNullHandled(null);
welcomeNullHandled(undefined);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// Arrow Function
var userData = { userFName: "Gayathri", userAge: 21 };
const greeting = (userObject) => {
  const greetFName = userObject.userFName ? userObject.userFName : "FirstName";
  const greetLName = userObject.userLName ? userObject.userLName : "LastName";
  return (
    "Parameter: " + userObject + " ---> Hello " + greetFName + " " + greetLName
  );
};
console.log(greeting);
console.log(greeting(userData));
// console.log(greeting());
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// Conditional Chaining
// var mark=95;
var mark = 85;
// var mark=75;
var grade = mark >= 90 ? "A" : mark >= 80 ? "B" : "C";
console.log("Mark:" + mark + " -> Grade:" + grade);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// Bitwise ->  &  |  ~  ^  <<  >>  >>>
console.log("~12 =", ~12); // ~a = -a -1
console.log("~-12 =", ~-12); // ~-a = -(-a) -1
console.log("12<<1 =", 12 << 1); // a<<n = a*(2 pow n)
console.log("12<<2 =", 12 << 2); // 12<<2 = 12*(2 pow 2)
console.log("12>>1 =", 12 >> 1); // a>>n = a/(2 pow n)
console.log("12>>2 =", 12 >> 2); // 12>>2 = 12/(2 pow 2)
console.log("12>>>1 =", 12 >>> 1); // a>>n = a/(2 pow n)
console.log("12>>>2 =", 12 >>> 2); // 12>>2 = 12/(2 pow 2)
// Bitwise Assignment ->  &=  |=  ^=  <<=  >>=  >>>=
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// Nullish Coalescing -> ??
var nullishCoalescingVariable = null;
console.log(
  "nullishCoalescingVariable = null  ---> ",
  nullishCoalescingVariable
);
nullishCoalescingVariable = "It is Not null";
console.log(
  "nullishCoalescingVariable = 'It is Not null'  ---> ",
  nullishCoalescingVariable
);
var nullishCoalescingVariable = null ?? "It is null";
console.log(
  "nullishCoalescingVariable = null??'It is null'  ---> ",
  nullishCoalescingVariable
);
nullishCoalescingVariable = "It is Not null" ?? "It is null";
console.log(
  "nullishCoalescingVariable = 'It is Not null'??'It is null'  ---> ",
  nullishCoalescingVariable
);

// Nullish Coalescing Assignment -> ??=
console.log(userData);
console.log(userData.city);
userData.city ??= "Salem";
console.log(userData.city);
console.log(userData);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
