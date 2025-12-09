// Arrays


var myArray = [ 0, 1, 2, 3, 4, 5];
<<<<<<< Updated upstream
var myArray = [ 0, 1, 2, 3, 4, 5];
=======
var myArr = [ 0, 1, 2, 3, 4, 5];
var myArray1 = myArray;
>>>>>>> Stashed changes
var test = ["test", "test2", "test3"];
console.log('test');
// for( i=0; i < myArray.length; i++){
//     console.log(myArray[i]);
// }

<<<<<<< Updated upstream
myArray.pop();
console.log(`Remove last value of string using pop() ${myArray}`);
myArray.push(6);
console.log(`Remove last value of string using push() ${myArray}`);

myArray.shift();
console.log(myArray);
=======
myArray1.pop();
console.log(`Remove last value of string using pop() ${myArray1}`);
myArray1.push(6);
console.log(`Remove last value of string using push() ${myArray1}`);

myArray1.shift();
console.log(`Remove first value of string using shift() ${myArray1}`);

myArray1.unshift(-1);
console.log(`Add first value of string using unshift() ${myArray1}`);

console.log(`Find any number or any data in array using include(9)  is ${myArray1.includes(9)}`);

console.log(`Find the index of  data in array using indexof(6)  is ${myArray1.indexOf(6)}`)


var newArr = [ 0, 1, 2, 3, 4, 5];

console.log(`The real format of an array is ${newArr}`);
console.log(`To convert arry to string usnig join() ${newArr.join()}`);


console.log(`${newArr.join()}`)
// Slice and splice

console.log(newArr)
var myArrCopy = newArr.slice(1, 3);
console.log(`In this operation we can use Array slice(1, 3) function it can slice value from index 1 to last index 2 the result is ${myArrCopy}`);
var myArrCopy1 = newArr.splice(1, 3);
console.log(`In this operation we can use Array splice(1, 3) function it can remove premanent value from index 1 to last index 3.it can remove ${myArrCopy1}` );
console.log(`After splice our variable is ${newArr}`);
>>>>>>> Stashed changes
