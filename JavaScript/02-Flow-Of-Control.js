// check for equality

let bool1 = true;
let bool2 = true;
let one = 1;

console.log(bool1 == bool2); //True
console.log(bool1 == one); //True

// Strict Equality = check the Value and Type
console.log(bool1 === one); //False

let variable1;
let variable2 = null;
console.log(variable1 == variable2); //True both are null
console.log(variable1 === variable2); //False they have different data types

console.log(1 == "1"); //True
console.log(1 != "1"); //False
console.log(1 === "1"); //False
console.log(1 !== "1"); //True

// Iterator
let x = 1;
console.log(x++); // prints 1, then incrementing it to to 2
console.log(x); // prints 2, it was incremented in the previous console.log

let y = 1;
console.log(++y); // prints 2, as y is incremented then printed

for(let i = 0; i < 5; i++){
    console.log(i);
}

for(let i=0; i<=3;){ // if theres an incrementer in the body we dont have to define it in the for brackets
    console.log(`i = ${++i}`);
}
// for([initial expression]; [condition]; [iterator]){body} // the iteratorr is optional if there is one in the body

// Ternary Statement
// syntax: (condition) ? valueIfTrue : valueIfFalse
let now = new Date(); // This calls the date function
let greeting = (now.getHours() > 17) ? `Good Evening` : `Good Morning`;
console.log(greeting);