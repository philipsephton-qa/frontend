'use strict';
// A callback is a function that takes in another function as a parameter
const greeting = (firstName) => {
    // creating a popup with someones name entered inside
    alert(`Hello ${firstName}`);
}

const writeSomething = (function1) => {
    // creating an input box that takes a users name
    let username = prompt("Please enter your name");
    function1(username); // calling greeting(username) as greeting is passed through as a function on line 13
}
writeSomething(greeting)



// Commitment - something you said you were going to do
// fulfill it, break it, pending/forget

// a promise is a placeholder for some data
// available immediate, some time in the future, possibly not at all

const hello = () => {}; //named function
() => {} //annonymous function

let prompom = new Promise((resolve, reject) => {
    let a = 1+1;
    if (a == 2){
        resolve("Success"); // successful outcome
    }else{
        reject("Error"); // failed outcome
    }
});
console.log(prompom);

// if success.then() we want to do something
//else if rejected .catch()
prompom.then( () => {
    console.log(`This will execute for a resolve method`);
}).catch( () => {
    console.error(`this will execute for a reject method`);
}).then( () => {
    console.log(`I will run regardless of the outcome`)
})

let newPromise = new Promise( (resolve, reject) =>{
    //complicated logic
    console.log(`initial`);
    resolve();
    reject(); // unreachable code due to resolve always being executed
    }).then( () => {
        console.log(`do this`);
    }).then( () => {
        console.log(`Straight after`);
    }).catch( () => {
        console.log(`Oh no`);
    });
    