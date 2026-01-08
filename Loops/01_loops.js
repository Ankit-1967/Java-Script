    const MyArray = ["My world", "Test", "Spiderman"];
// for Loop
    for (let index = 0; index < 10; index++) {
        // const element = array[index];
        console.log(index);
        
    }

// for Loop for array
 for (let index = 0; index < MyArray.length; index++) {
    const element = MyArray[index];
    console.log(`Array index is ${index + 1} and value is ${element}`);
 }


//  Break and continue

for (let i = 1; i < 20; i++) {
    if(i ==5){
        console.log(`condition detected`)
        break;//break loop
    }
    console.log(`value of i is  ${i + 1}`);  
}

for (let i = 1; i <= 20; i++) {
    if(i ==5){
        console.log(`condition detected`)
        continue;// detect and skip     
    }
    console.log(`value of i is  ${i}`);  
}