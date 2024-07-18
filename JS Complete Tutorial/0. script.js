// Console -> object
// alert("Hello World!");
// clg -> console.log(object);
// console.log("Hello World");
// console.clear();
// console.time("Timer");
// console.log("Hello");
// console.log(17);
// console.log(11.12);
// console.log(true);
// console.log([1, 2, 3, 4, 5]);
// console.table([1, 2, 3, 4, 5]);
// console.log({ fname: "Gayathri Priyanka", lname: "Ramesh", age: 21 });
// console.table({ fname: "Gayathri Priyanka", lname: "Ramesh", age: 21 });
// console.error("Custom Sample Error");
// console.warn("Custom Sample Warning");
// for (i = 0; i < 5; i++) {
//   console.log(i);
// }
// console.timeEnd("Timer");
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

let divCntExtHead = document.getElementsByTagName("div").length;
let divCnt = document.getElementById("divCnt");
divCnt.textContent = `Div Count from External In Head  --->  ${divCntExtHead}`;

/* Web storage API -> Store data inside the browser with 'key:value' pairs of only Strings
                      Memory capacity depends on type of browser or device
                      Follow same Origin Policy due to security reasons 
                      Setting data means it is set for that particular origin (Only data from same origin can be accessed)
                      Stored in the Global Object of the browser (localStorage | window.localStorage)
      
      Origin -> Protols (http, https)
                Host (---.com, ---.in)
                Port (8080, 8081 - wherever the app is hosted)
          Eg: http://example.com
              http://example.com/page1.php ---> same origin woth extended path
              https://example.com          ---> different origin as protocol varies
              http://post.example.com      ---> different origin as host varies
              http://example.com:8080      ---> different origin as port varied

          Session Storage -> Data is persisted only for that particular session (time when logged in until the tab is closed)
                            Data is not sent to server by making network API Calls (Cookies send data)
                            Minimum 5mb of data can be stored (Cookies have only 4000 bytes)
          
          Local Storage -> Data is not cleared until explicitly or programatically cleared
                           Data is persisted even if browser window is closed or even id system is shutdown and restarted
                           Minimum 5mb of data can be stored even in mobile phone
                Usage -> Store user specific data that is not relevant to store in server
                         AB Testing
                         Optimizing Web App performance (faster to retrieve from local storage than from server making network calls)
                         eg: Flipcart, Paytm
*/

// Dynamic Welcome Message using Local Storage
const setUserButton = document.getElementById("setUserButton");
const clearUserButton = document.getElementById("clearUserButton");
const welcomeMsg = document.getElementById("welcomeMsg");

function setUserName() {
  const userName = prompt("Enter your name");
  if (!userName) {
    setUserName();
  } else {
    // 'setItem' is a function present on top of localStorage API (overwrites 'value' for same 'key')
    localStorage.setItem("userName", userName);

    // Setting Objects in Local Storage
    const userObject = { name: userName };
    localStorage.setItem("usernameObject", userObject);
    localStorage.setItem("usernameJSON", JSON.stringify(userObject));
    const usernameString = String(userObject);
    const usernameObject = localStorage.getItem("usernameObject");
    const usernameJSON = localStorage.getItem("usernameJSON");
    const usernameParsedJSON = JSON.parse(usernameJSON);
    console.log(
      "UserObject:",
      userObject,
      "\nUserNameString:",
      usernameString,
      "\nUserNameObject:",
      usernameObject,
      "\nUserName JSON String:",
      usernameJSON,
      "\nUsername Parsed JSON:",
      usernameParsedJSON
    );
    welcomeMsg.innerHTML = `Welcome ${userName}`;
  }
}

setUserButton.onclick = () => {
  setUserName();
};

clearUserButton.addEventListener(
  "click",
  (clearFunc = () => {
    localStorage.clear();
  })
);

if (!localStorage.getItem("userName")) {
  setUserName();
} else {
  const storedUserName = localStorage.getItem("name");
  welcomeMsg.textContent = `Welcome ${storedUserName}`;
}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
