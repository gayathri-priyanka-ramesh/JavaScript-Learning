/* Working of 'fetch()' -> Returns a Promise which when resolved gives a 'Response' Object
                           Response Objects has a body that contains a readable stream of data
                           Readable Stream can be converted to JSON using '.json()' or to TEXT using '.text()'
                           This again returns a promise which on resolved gives the required result value
                           Result can be used as per need (accessing, logging, modifying, etc.)
*/

// Fetch API Promise only rejects when we have network error (not in other cases)
console.log(
  "Data inside 'text' File to be handled using 'new Promise()' ---> ",
  fetch("text.txt")
);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
// console.log(
//   "Data inside 'sample' File to be handles using 'new Promise()' --->  404 (Not Found) error",
//   fetch("sample.txt")
// );
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// Rendering '.txt' File
// Fetches 'text.txt' and returns a promise
// fetch("sample.txt")
fetch("text.txt")
  // .text() -> returs a Promise
  .then((response) => response.text())
  // Promise if resolved will return the text representation of body
  .then((data) => console.log("Data Inside 'text' File  --->\n" + data))
  // catches if any network error occurs (here it is only 'typo' error hence not caught)
  .catch((error) => console.log("Error:", error))
  .finally((final) => console.log("Finally Block: ", final));
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

// using 'ok' Property
// fetch("sample.txt")
fetch("text.txt")
  .then((response) => {
    if (!response.ok) throw Error(response.statusText);
    else console.log("Response is OK");
    return response.text();
  })
  .then((data) =>
    console.log("Data Inside 'text' File using 'ok' Property  --->\n" + data)
  )
  .catch((error) =>
    console.log("Error Caught using 'ok' Property  --->\n" + error)
  )
  .finally((final) => console.log("Finally Block: ", final));
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// Refactoring using Async Function and Await Operator
const dataReadFromTextFile = document.querySelector(".dataReadFromTextFile");
async function dataRenderedFromTextFile() {
  try {
    // const response = await fetch("sample.txt");
    const response = await fetch("text.txt");
    const data = await response.text();
    dataReadFromTextFile.textContent = data;
    console.log("Data Inside 'text' File  --->\n" + data);
  } catch (error) {
    console.log("Error:", error);
  } finally {
    console.log("Finally Block");
  }
}
// dataRenderedFromTextFile();
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

// Using Async Function and Await Operator and 'ok' property
const dataReadFromTextFileOk = document.querySelector(
  ".dataReadFromTextFileOk"
);
async function dataRenderedFromTextFileOk() {
  try {
    // const response = await fetch("sample.txt");
    const response = await fetch("text.txt");
    if (!response.ok) throw Error(response.statusText);
    const data = await response.text();
    dataReadFromTextFileOk.textContent = data;
    console.log("Data Inside 'text' File using 'ok' Property  --->\n" + data);
  } catch (error) {
    console.log("Error Caught using 'ok' Property  --->\n", error);
  } finally {
    console.log("Finally Block");
  }
}
// dataRenderedFromTextFileOk();
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Rendering '.json' File
const dataReadFromJSONFile = document.querySelector(".dataReadFromJSONFile");
async function renderJSON() {
  try {
    // const response = await fetch("sample.json");
    const response = await fetch("data.json");
    if (!response.ok) throw Error(response.statusText);
    else console.log("Response is OK");
    const data = await response.json();
    dataReadFromJSONFile.textContent =
      "Data --> " +
      data +
      " Comment --> " +
      data.comment +
      " PersonName --> " +
      data.personName +
      " PersonFirstName --> " +
      data.personName.firstName +
      " PersonMiddleName --> " +
      data.personName.middleName +
      " PersonLastName --> " +
      data.personName.lastName +
      " Age --> " +
      data.age +
      " Location --> " +
      data.location +
      " IsWebDeveloper --> " +
      data.isWebDeveloper +
      " 111222 --> " +
      data[111222];
    console.log("Data Inside 'data' File  --->\n" + data);
  } catch (error) {
    console.log(
      "Error Caught using 'ok' Property using 'ok' Property  --->\n",
      error
    );
  } finally {
    console.log("Finally Block");
  }
}
// renderJSON();
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// External API
const btn1 = document.querySelector(".btn1");
btn1.addEventListener("click", makeRequest1);
function makeRequest1() {
  // fetch("https://jsonplaceholder.typi.com/todos/1")
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => {
      if (!response.ok) new Error(response.statusText);
      else console.log("Response is OK");
      return response.json();
    })
    .then((data) => {
      console.log("Data Title  ---> ", data.title);
      document.querySelector(".userId").innerHTML = data.userId;
      document.querySelector(".id").innerHTML = data.id;
      document.querySelector(".title").innerHTML = data.title;
      document.querySelector(".completed").innerHTML = data.completed;
    })
    .catch((error) => console.log("Error:", error))
    .finally(() => console.log("Finally Block"));
}

const btnAll = document.querySelector(".btnAll");
btnAll.addEventListener("click", makeRequestAll);
function makeRequestAll() {
  fetch("https://jsonplaceholder.typicode.com/todos/")
    .then((response) => {
      if (!response.ok) new Error(response.statusText);
      return response.json();
    })
    .then((data) => {
      console.log("Data Title  ---> ", data[1].title);
      let output = document.querySelector(".dataReadFromExternalAPI");
      data.forEach((element) => {
        output.innerHTML += `<div class="jsondata"> <div>(UserId):${element.userId}</div>
        <div>(ID):${element.id}</div>
        <div>(Title):${element.title}</div>
        <div>(Completed):${element.completed}</div></div>`;
      });
    })
    .catch((error) => console.log("Error:", error))
    .finally(() => console.log("Finally Block"));
}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
