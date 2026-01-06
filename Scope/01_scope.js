// Scopes in jsvascript {}

let a = 100;
let b = 200;
var c = 300; //global scope

if(true){

let a = 10;// function scope or block scope
const b = 20; 
var c = 30;  //global scope
console.log(`inner a is ${a}`);
}
console.log(a);
console.log(b);
console.log(c);


// Nested scope in javascript

function funOne(){
    const userName = "Ankit Thakur";
    function funTwo(){
        const userAddress = "youtube.link.in"
        console.log(userName)
    }
    funTwo();
    // console.log(userAddress);
}

funOne();


// Hoisting in java script

// console.log(addTwo(2)); This function cant defined when the varaible can store the function
const addTwo  = function(num){
    return num + 2 ;
}
console.log(addTwo(2));
 