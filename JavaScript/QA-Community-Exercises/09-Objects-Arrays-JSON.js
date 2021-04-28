`use strict`;
let darthVader = {"allegiance":"Empire", "weapon":"lightsabre", "sith":true};
console.log(darthVader);

console.log(`Darth Vader's allegience is to the ${darthVader.allegiance}`);
console.log(`Darth Vader's weapon of choice is a ${darthVader.weapon}`);
console.log(`Darth Vader is a sith? ${darthVader.sith}`);
console.log(`Darth Vader is a Jedi? ${!darthVader.sith}`);

let myArray = ["hello", "everyone.."];
console.log(myArray.length);
myArray.push(1);
myArray.push(2);
myArray.push(3);
console.log(myArray.length);
myArray.shift();
for(i in myArray){
    console.log(myArray[i]);
}

// Array Exercise book

let quote = ["I","am","your","friend"];

console.log(quote[2]);

quote.pop();

quote.push("father");

console.log(quote);

quote.unshift("Luke");

console.log(quote);

for(let i in quote){
    if(quote[i] == "Luke"){
        console.log("No");
    } else{
    console.log(quote[i]);
    }
}

let erroneousWord = quote[0];
console.log(erroneousWord);

let lukeIsHere;
if(quote.find(element => element = erroneousWord) == erroneousWord){
    lukeIsHere = true;
}else{
    lukeIsHere = false;
}
console.log(lukeIsHere);

let lukeIsAt;

if(lukeIsHere == true){
    lukeIsAt = quote.findIndex(element => element = erroneousWord)
}
console.log(lukeIsAt);