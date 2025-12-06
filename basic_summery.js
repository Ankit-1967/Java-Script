
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