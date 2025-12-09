const newDate = new Date();

console.log(newDate);
console.log(`The type of ate is  ${typeof newDate}`);
console.log(`Convert date into string ${newDate.toString()}`);
console.log(`The result of Convert date into toDateString() is ${newDate.toDateString()}`);
console.log(`The result of Convert date into toISOString is ${newDate.toISOString()}`);
console.log(`The result of Convert date into toJSON is ${newDate.toJSON()}`);
console.log(`The result of Convert date into to LocaleDateString is ${newDate.toLocaleDateString()}`);
console.log(`The result of Convert date into to LocaleString() ${newDate.toLocaleString()}`);
console.log(`The result of Convert date into to TimeString ${newDate.toTimeString()}`);
console.log(`The result of Convert date into to UTCString ${newDate.toUTCString()}`);


const createdDate = new Date(2025, 11, 25);
console.log(createdDate.toDateString()); // show data in date form

const updateFormat = new Date("2025-02-03");
console.log(`To show date format dd-mm-yyyy in date format use 'new Date("2025-02-03")' shows ${updateFormat.toLocaleString()}`);

const newUpdateFormat = new Date("01-02-2025");
console.log(`To show date format mm-dd-yyyy in date format use 'new Date("01-02-2025")' shows  ${newUpdateFormat.toDateString()}`);

const myTimeStamp = Date.now();

console.log(`To show value in sec ${Math.floor(myTimeStamp / 1000)}s`);

const currentDate = new Date();

console.log(`Toady is ${currentDate.getDay()}. and date is ${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()} and time is ${currentDate.getHours()}:${currentDate.getMinutes()}`);