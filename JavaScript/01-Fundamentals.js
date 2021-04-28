// Data types are either let or const

let fname = "Philip"; // LET = A value we can change
const VALUE = "Doesnt change"; // CONST = Something we cant change, because it cant change by convention we name it in all caps

console.log(fname);
console.log(VALUE);

// in JavaScript we dont have to declare the variable type its automatic
let firstName = "Harry";
let age = 25;
let salary = 32578.78;
let siblings = ["lisa", 23, false, "hello"]; // in JavaScript we can put whatever we want inside of an array
let bool = false;

// typeof = return "Datatype"
console.log(typeof firstName); // STRING
console.log(typeof age); // No INT only number
console.log(typeof salary); // Number
console.log(typeof bool); // Boolean
console.log(typeof siblings); // Array/Object 

// in JavaScript the Datatypes we can have are Number, String, Object, Array, null(a value to represent nothing) and undefined(Nothing)

//template literal
console.log(`5 + 3 = ${5+3}`); // you can access varibles and computations using ${variable}, we use backticks (``) to keep the code clean as we wont have to use them for anything else
