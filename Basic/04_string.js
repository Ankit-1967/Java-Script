// String in js

const firstName = "Ankit";
const lastName = "Thakur";

console.log( firstName  + lastName); 
console.log( `My name is ${firstName} ${lastName}`); 


console.log(firstName.length);
console.log(firstName.toUpperCase());
console.log(firstName.indexOf("k"));


let nameType = 'chai-or-code';

newnameType = nameType.slice(0, 5);
replace = nameType.replace( "-", " ");
console.log(newnameType);
console.log(replace);
let trimText = "  Ankit Thakur     "
console.log(trimText.trim()); // remove extra space