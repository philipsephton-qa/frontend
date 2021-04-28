'use strict'
// Arrays - Store information
let array = Array(10); // <--Convention
let arrayShortHand = [];

console.log(typeof array); // object
console.log(array);
console.log(array[7]); // undefined

// Access any index at any time in JavaScript, if it is empty or doesn't exist it will hold undefined

arrayShortHand[3] = "Audi A1";
console.log(arrayShortHand); // [undefined, undefined, undefined, Audi A1, ...]

let animals = [5];
console.log(animals); // [5], the value 5 was declared as the first value, not as the amount of array items
animals = ["Dog", "Cat", "Lion", "Wolf", "Tiger", "Bunny", "Mouse", "Rabbit"] // filling out the array
animals.length = 7; // This is how we set the length of the array, we can go over this length if needed but not at this point...(Rabbit is removed)

animals.push("Dog"); // affixes dog to the end of the array
console.log(animals);

animals.pop(); // removes from the end of the array
console.log(animals);

animals.unshift("Cat"); // adds to the start of the array
console.log(animals);

animals.shift(); // removes from the start of the array
console.log(animals);

for(let i = 0; i < animals.length; i++){ // the main use for .length is for iterations
    console.log(animals[i]);
}

for(let genus of animals){ // enhanced for loop, genus can be changed to anything you want as long as its not predetermined
    console.log(genus);
}

