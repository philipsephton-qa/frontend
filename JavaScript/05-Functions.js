`use strict`;

add(23,33);
// function declaration = Hoists, throws at the top of the file, this is bad practice
function add(a, b){
    console.log(a+b);
}

//Function Expression
const hello = function(){ // prevents trying to access a function that hasnt been created yet
    console.log("Whats up!!");
}
hello();

// Arrow Function
// Syntax: const <name> = (parameters) => doSomethingInReturn
const hello2 = () => console.log("Hello"); //
hello2();

// The arrow function and function expression can be used interchangably, neither can be accessed before they are initialised

