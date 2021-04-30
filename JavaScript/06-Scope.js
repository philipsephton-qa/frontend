`use strict`;
// SCOPE - Visibilty of a variable in a file/project

const someFunction = () => {
    let hello = `Billy bob joe`; // variable has local scope- only accessable inside the function its declared
    console.log(`${hello} called from a function`);
}

someFunction();
//console.log(hello); // hello cant be called unless if its declared as a var not let or const...This is bad...


// if a variable doesnt exist in a file and we try to access it, it will create one AS A VAR and hoist!
// if it does exist in the file, it will use that variable
let check = false;
const changeCheck = () => {
    check = true; // if we dont declare the let/const it will look outside the variable, if we do it will create a local variable with that name...
    console.log(check);
}
console.log(check); // Prints False
changeCheck(); // Prints True
console.log(check); // Prints True, the value is changed during the variable

let change = false;
const changeMe = () => {
    let change = true; // if we dont declare the let/const it will look outside the variable, if we do it will create a local variable with that name...
    console.log(change);
}
console.log(change); // false
changeMe(); // true, the value of change in the local variable is set to true
console.log(change); // false, the global variable isnt changed as its not used

const test = () => {
    flag = true;
    console.log(flag);
    test1();
    console.log(flag);
}
const test1 = () => {
    flag = false;
    return;
}
test(); // This will return True, False

const test2 = () => {
    x = true; // LOCAL TO FUNCTION
    console.log(x); //TRUE
    test3();
    console.log(x); // TRUE
}
const test3 = () => {
    let x = false; // LOCAL TO FUNCTION ONLY!!!
    return;
}
test2(); // This will return True, True as let x = false in test 3 has declared it as a local variable so it doesnt change x in test2