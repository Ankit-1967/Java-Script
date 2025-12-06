
// Javascript is Dynamically typed language.

// Static means decalare which lanuage use.
// Dynamic means not declare which language use. 


// Data types in js :- there are two data types in js 

// Primative data types :- Primitive types store the actual value. These are 7 types in primitive data type [ 1. String, 2. Number, 3. Boolean, 4. Undefined,   5.Null, 6. Symbol, 7.BigInt]

// Premitive DataTypes are also discuss in 02datatypes.js 

// Non-Primative data types / Reference data types :- These datatypes store a reference (pointer) to where the value is kept in memory. [ 1. Arrays, 2. Object, 3.Functions ]

// 1. Arrays

const subjects = ["English" , "Hindi", "Maths", "Science", "General Awareness"];

// 2. Objects 

const myData = {
            name: "Ankit Thakur",
            age:27,
            works:"Codesdesk Pvt. Ltd.",
            designation:"Designer"
        };

// 3. Function


const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof subjects);
console.log(typeof myData);
console.log(typeof myFunction);



// +++++++++++++++++++++++++++ Memory in js +++++++++++++++++++++++++++++++

// There are two types of memory in js 
// 1. Stacke memory( Primitive data types)
// Stack memory gets a copy of variable (not the same memory)

let myName = "Ankit Thakur";
anotherName = myName;
anotherName = "Anki";

console.log(myName);
console.log(anotherName);

// In this code it can show the main value cant changed but copy value change;

// 2. Heap ( Non - Primitive data types)
// Haep memory get a copy of the reference (same memory).

let user = {
    name :"Ankit Thakur",
    id:"at667448@gmail.com",
    age:24,
    logedIn:false
}

let user2 = user;
user2.id = "ankit@codesdesk.com";

console.log(user);
console.log(user2);