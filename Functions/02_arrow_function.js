const user = {
  userName: "Ankit Thakur",
  courseName: "Chai Aur( JS",
  welcomeMsg: function () {
    console.log(`${this.userName}, welcome to website`);
  },
};

user.welcomeMsg();

user.userName = "Test";
user.welcomeMsg();

// Arrow function in java script
// There are two types of arrow function in javascript
// 1. Implesit return Arrow function
// 2. Explesit return Arrow function

// 1. Explesit return arrow function : - in this function we can use return keyword to show the result of arrow function

const addTwo = (Num1, Num2) => {
  return Num1 + Num2;
};

console.log(addTwo(3, 7));

// 2. Implesit return arrow finction : -this is single line function in this function we cant need to return keyword to show result

const subTwo = (num1, num2) => num1 - num2;

console.log(subTwo(10, 7));

const subnum = (num1, num2 ) => (num1 - num2);

console.log(subnum(15, 10))