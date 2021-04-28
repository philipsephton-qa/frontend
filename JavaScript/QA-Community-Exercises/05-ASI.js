// ASI - Automatic Semi Colon Insertion
// 1. adds a ; when two lines are seperated by an enter key
// 2. adds a ; when 2 statements are separated by a {}
// 3. adds a ; when Line terminator follows a BREAK, RETURN, THROW or CONTINUE

let variable = 2;
let fname = "Philip"
let hello = "Hello";

console.log(variable)
console.log(fname)
console.log(hello)

function sayHello() {
    return "Someone says hello";
}
console.log(sayHello());