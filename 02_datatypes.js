
// dataTypes are two type 
// premetive data types :- string, number, BigInt, boolean, null, undefined and Symbol
// Non premetive data types :- array, object

"use strict"; //Treat  all js as a strict mode 
// alert(3 + 3); only use when browser but it can't work in node.js

/* 
    DataTypes :- are defined which type of data stored in a variable there are several data types. Now w can discuss below:-
    1. String 
    2. Number :- it can allow 0 to 2 to power 53
    3. Bigint
    4. Boolean
    5. Object
    6. Null :- type of null is an object
    7. Symbol :- for unique Things,
    7. Undefined
*/ 

// String
let name = "Ankit";

// number 

let phoneNumber = 9882170629;

// bollean
let loggedIn = false;

// Null
let accountBal = null;

// undefined 
let error;

// symbol

const userId = Symbol(123);
const anotherId = Symbol(123);

// BigInt

const bigNumber = 123253984573948587368382746786287n;

console.table([name, phoneNumber, loggedIn, accountBal, error]);
console.table([typeof name, typeof phoneNumber, typeof loggedIn, typeof accountBal, typeof error]);

console.log( userId == anotherId);


