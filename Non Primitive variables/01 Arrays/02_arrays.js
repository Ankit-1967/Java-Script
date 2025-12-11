
// Arrays

const marvel_Heros = ["Thor", "Spiderman", "Ironman"];
const dc_Heros = ["Superman", "Batman", "Flash"];

const murgeArray = marvel_Heros.concat(dc_Heros);
console.log(marvel_Heros);
console.log(dc_Heros);

console.log(`The value of murge array is ${murgeArray} `);

var spradArrasy = [...marvel_Heros, ...dc_Heros];
console.log(`Murge two arrays with spread operator like this (...marvel_heros, ...dc_Heros) and resuls shows in next console`)

console.log(spradArrasy);

var another_Array = [1,2,3,[4,5,6,[7,8,9]]];

console.log(another_Array);

flatarray = another_Array.flat(1); //it can convert child array into normal array when reach 1 

console.log(flatarray);
flatarrayInfinity = another_Array.flat(Infinity);//it can convert all array into single array 

console.log(flatarrayInfinity);


let score1 = 100;
let score2 = 200;
let score3 = 250;

console.log(Array.of(score1, score2, score3));