// Numbers n js 


const score = "500"; 

console.log(score);
console.log(typeof score);  ``

const balance = new Number(40000); // declare this for specific type of number
const bankbalance = new String(40000); // declare this for specific type of string

console.log(balance);
console.log(bankbalance);
console.log(typeof balance);


console.log(score.toString()); // change type of 
console.log(`The score value is ${score}`);
console.log(`Type of score is ${typeof score}`);
console.log(`Score length is ${score.length}`)


const otherNumber = 23.756 ;
console.log(otherNumber.toFixed(2)); // thats for after point how many digits show


console.log(`The other number presize value of 3 is ${otherNumber.toPrecision(2)}`); // that means it can show only limit which can added into function

const repersentsZero = 10000000000;
console.log(`The show value in hunders with comas  ${repersentsZero.toLocaleString('en-IN')}`) // to change the data of local string use 'en-contrycode'

// +++++++++++++++++++++++   Maths    ++++++++++++++++++++++++++++++++

const mathVal = 4.05 ;
console.log(Math);
console.log(`Convert nehgative value inot positive with Math.abs(-4) to  ${Math.abs(-4)}`); // convert negative value into0 positive but it can't update positive value into negative

console.log(`The value of  Math.round(4.05) is ${Math.round(mathVal)}`);  //round maths value 
console.log(`The value of  Math.ceil(4.05) is ${Math.ceil(mathVal)}`);  //ceil maths value. In this metheod it can update with next number when 0.0001 it gives us to 1
console.log(`The value of  Math.floor(4.05) is ${Math.floor(mathVal)}`);  //floor maths value. In this metheod it can update with actual number when 0.0001 it gives us to 0

console.log(`The squareRoot of this 16  is ${Math.sqrt(16)}`);

console.log(`The mininmum value of this string  is ${Math.min(1, 2, 5, 7, 9)}`);
console.log(`The maxmium value of this string  is ${Math.max(1, 2, 5, 7, 9)}`);


console.log(`To find maths random value using Math.random() ${Math.random()}`);


const minVal = 1;
const maxVal = 6;

console.log(`To define math random value range min(1) or max(6) is  ${Math.floor(Math.random() * (maxVal - minVal + 1) + minVal)}`);