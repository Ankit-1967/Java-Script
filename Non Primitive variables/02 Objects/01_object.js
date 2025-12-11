const mySym = Symbol("key1");

// Object literals
const JsUser = {
  name: "Ankit",
  "full name": "Ankit Thakur",
  [mySym]: "mykey1",
  age: 18,
  location: "Mohali",
  email: "Ankit@coedesdesk.com",
  isLoggedIn: false,
  lastLoginDay: ["Monday", "Saturday"]
};

// console.log(JsUser["name"]);
// console.log(JsUser["full name"]);
// console.log(JsUser["mySym"]);
// console.log(typeof JsUser[mySym]);

// JsUser.email = "hitesh@chatgpt.com"
// console.log(JsUser);
// Object.freeze(JsUser);
// JsUser.email = "at6674448@gmail.com"
// console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello JS User");
};

JsUser.greetingTwo = function () {
  console.log(`Hello JS User, ${this.name}`);
};

JsUser.greeting();
console.log(JsUser.greeting);