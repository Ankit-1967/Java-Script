function myName() {
    console.log("A");
    console.log("N");
    console.log("K");
    console.log("I");
    console.log("T");
}

// myName();

// add two numbers 

// Basic syntax of number

function Addition(a = 0, b = 0 ){ // (a = 0, b = 0 ) these are parameters in function
    console.log( a + b);
}

Addition(3 , 2); // Addition(3 , 2)these are arguments
Addition();


// Update syntax of function 

function AddTwoNumber( a = 0, b = 0){
    let result = a + b;
    return result;
}

const add = AddTwoNumber(5, 10);

console.log(`The addition of two number ( 5 + 10) is ${add}` );


function userLogedIn(userName){
    // if (userName === undefined){
    //     return `No user loged in `
    // }
    // else{
        // }
        
    if( userName != undefined){ // if(!userName)
            return`${userName} log in`
    }
}

console.log( userLogedIn("Ankit"));
console.log( userLogedIn());


function CalculateCartPrice(...num1){
    // let cartLenght = num1.length;
    // for ( i = 0; i < cartLenght; i ++ ){
    //     console.log(`The price is ${num1[i]}`);
    // }
    return num1

}

console.log(CalculateCartPrice( 100, 200, 500, 1000));



const UserName = {
    userName  :"Ankit Thakur",
    userId : 1,
    userType : "Permanent"
};

function hadleObject(anyObject){
    console.log(`${anyObject.userName} is ${anyObject.userType} woker in our company. and their unique id number is ${anyObject.userId}.`)
};

hadleObject(UserName);



const myNewUser = [200, 400, 600, 800];


function secoundVal(getArray){
    return getArray[1];
}

console.log(secoundVal(myNewUser));