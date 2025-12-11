// Object creation using constructor method

// const tinderUser = new Object();
const tinderUser = {};
tinderUser["id"] = "123abc";
tinderUser["name"] = "Siraj";
tinderUser["isLoggedIn"] = false;

// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Ankit",
      lastname: "Thakur"
    }
  }
};

console.log(regularUser["fullname"]?.["userfullname"]?.["firstname1"]);
console.log(regularUser["fullname"]["userfullname"]["firstname"]);

//Combining 2 objects
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

// const obj3 = Object.assign({},obj1, obj2);
const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);


console.log(tinderUser.hasOwnProperty("isLoggedIn"));

const course = {
  coursename: "js in hindi",
  price: 999,
  courseInstructor: "hitesh"
};

// course["courseInstructor"]

// const { courseInstructor } = course;
// console.log(courseInstructor);
const { courseInstructor: instructor } = course;
console.log(instructor);
