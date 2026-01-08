// for of loops


const arr = [1, 2, 3, 4, 5];


for (const value of arr ) {
    console.log(value)
}


const Greet = "Hello world"; 


for (const greet of Greet) {
    console.log(greet);
}



// maps

const mapFunc = new Map();

mapFunc.set('IN', 'India');
mapFunc.set('JPN', 'Japan');
mapFunc.set('CHN', 'China');
mapFunc.set('IN', 'India');
mapFunc.set('NEP', 'Nepal');


for (const [key, value] of mapFunc) {
    console.log(key, ":-" ,value)
}